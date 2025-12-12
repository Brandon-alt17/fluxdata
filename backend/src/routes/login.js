// backend/src/routes/login.js
import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

const router = Router();

router.post("/", async (req, res) => {
  console.log("[LOGIN] received body:", req.body);
  try {
    const { emailOrName, password } = req.body || {};

    if (!emailOrName || !password) {
      console.warn("[LOGIN] missing credentials:", { emailOrNameProvided: !!emailOrName, passwordProvided: !!password });
      return res.status(400).json({ error: "Usuario/email y password son requeridos" });
    }

    // Admin login (mantengo tu lógica)
    if (emailOrName === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        console.warn("[LOGIN][ADMIN] WARNING: JWT_SECRET not defined, using fallback (dev only)");
      }

      const token = jwt.sign(
        {
          sub: "admin",
          role: "admin",
          name: process.env.ADMIN_NAME,
          email: process.env.ADMIN_USER,
        },
        secret || "dev-secret",
        { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // secure only in prod
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.json({
        message: "Login exitoso (admin)",
        user: {
          id: "admin",
          name: process.env.ADMIN_NAME,
          email: process.env.ADMIN_USER,
          role: "admin",
        },
      });
    }

    // Buscar usuario/empresa
    const user = await prisma.usuarios.findFirst({
      where: {
        OR: [
          { correo_contacto: emailOrName },
          { nombre_usuario: emailOrName },
        ],
      },
      select: {
        id_usuario: true,
        contrasena_usuario: true,
        rol_usuario: true,
        estado: true,
        correo_contacto: true,
        nombre_usuario: true,
      },
    });

    console.log("[LOGIN] user found:", !!user, user ? { id: user.id_usuario, estado: user.estado } : null);

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Validar estado solo si existe el campo (evita comparaciones con undefined)
    if (typeof user.estado !== "undefined" && user.estado !== "activo") {
      return res.status(403).json({ error: "Cuenta inactiva, contacte al administrador" });
    }

    if (!user.contrasena_usuario) {
      // Esto indica un problema en la DB (usuario sin hash)
      console.error("[LOGIN] user has no password hash:", user);
      return res.status(500).json({ error: "Error interno en login", details: "Usuario sin contraseña almacenada" });
    }

    const validPassword = await bcrypt.compare(password, user.contrasena_usuario);
    if (!validPassword) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const secret = process.env.JWT_SECRET || "dev-secret";
    const token = jwt.sign(
      {
        sub: user.id_usuario,
        email: user.correo_contacto,
        name: user.nombre_usuario,
        role: user.rol_usuario || "user",
      },
      secret,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({
      message: "Login exitoso",
      user: {
        id: user.id_usuario,
        name: user.nombre_usuario,
        email: user.correo_contacto,
        role: user.rol_usuario || "user",
      },
    });
  } catch (err) {
    // Log completo con stack para depuración
    console.error("[LOGIN] Error interno:", err && err.stack ? err.stack : err);
    const payload = { error: "Error interno en login" };
    if (process.env.NODE_ENV !== "production") payload.details = err?.message || String(err);
    return res.status(500).json(payload);
  }
});

export default router;

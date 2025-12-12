import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  // Si usas cookies de sesión:
  res.clearCookie("token");

  return res.json({
    ok: true,
    message: "Sesión cerrada"
  });
});

export default router;

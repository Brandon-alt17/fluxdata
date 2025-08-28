import { pool } from "../database/conectionPosgreSQL.js";

const getUsuarios = async () => {
  try {
    console.log("Consultando tabla Usuarios...");
    const result = await pool.query('SELECT * FROM "Usuarios";');
    console.log(result.rows);
  } catch (error) {
    console.error(error);
  }
};

getUsuarios();

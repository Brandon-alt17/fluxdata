import { pool } from "./database/conectionPosgreSQL.js";

const getUsuarios = async () => {
  try {
    const result = await pool.query("SELECT * FROM Usuarios;");
    console.log(result.rows);
  } catch (error) {
    console.error(error);
  }
};

getUsuarios();
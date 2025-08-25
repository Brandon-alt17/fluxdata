import { Pool } from "./database/conectionPosgreSQL.js";

const getLanguages = async () => {
  try {
    const result = await Pool.query(
      "SELECT id, name, developers, enabled FROM languages;"
    );
    console.log(result.rows);
  } catch (error) {
    console.error("Error en la consulta:", error);
  }
};

getLanguages();

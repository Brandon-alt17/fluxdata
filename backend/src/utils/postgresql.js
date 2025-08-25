import { pool } from "./database/conectionPostresSQL";

const getLanguages = async () => {
    try {
        const result = await pool.query("SELECT id, name, developers, enabled FROM languages;");
        console.log(result);
    } catch(error) {
        console.error(error);
    }
};

getLanguages();
import pg from 'pg';

export const  Pool = new pg.Pool({
    host: "localhost",
    port: 5432,
    database: "db_fluxdata",
    user: "postgres",
    password: "Swordtech"    
}); 
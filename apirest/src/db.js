import {createPool} from "mysql2/promise";

export const Pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Seguridad2022**',
    port: 3306,
    database: 'companydb'
})

import express from "express";
import { Pool } from "./db.js";
import employeesRoutes from './routes/employees.routes.js'
const app = express()

app.get('/ping',async (req,res) => {
    const [result] = await Pool.query('SELECT "pong" AS result')
    res.json (result[0])
})


app.use(employeesRoutes)
app.listen(7000)
console.log('server in port', 7000);
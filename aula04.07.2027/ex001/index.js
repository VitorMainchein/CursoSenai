const express = require('express')
const {Client} = require('pg')
require("dotenv").config()
const app = express()
const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

const connectDB = async () => {
    client
    .connect()
    .then(() => {
        console.log("A conexão funcioniou")
    }).catch((err) => {
        console.error('O erro ao conectar no Banco de dados')
    })
}
connectDB()
app.get('/test-api', function(req, res){
    res.send('Nossa API esta funcionando')
})

app.listen(8000)
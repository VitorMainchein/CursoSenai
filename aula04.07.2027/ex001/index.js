const express = require('express')

const app = express()

app.get('/test-api', function(req, res){
    res.send('Nossa API esta funcionando')
})

app.listen(8000)

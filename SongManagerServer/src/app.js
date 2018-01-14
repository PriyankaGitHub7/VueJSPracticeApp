const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan') // used for logging
const modelObjects = require('./models').sequelize
const config = require('./config/config')

const app = express()

// app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

app.get('/status',(req,res) => {
    res.send({
        message : "My First Vue Express App"
    })
})

require('./routes')(app)

modelObjects.sync()
    .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})
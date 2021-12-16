//server
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const myconn = require('express-myconnection')

//settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)
const dbConfig = require('./db/config')

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(myconn(mysql, dbConfig, 'single'))

//routes 
app.get('/', (req, res)=>{
    res.send('Welcome to my API with Node.js and MySQL')
})
app.use('/api/cuadros', require('./routes/cuadros'))

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});
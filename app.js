const express = require('express')
const adminRoutes = require('./routes/index')
const usersRoutes = require('./routes/users')

const app = express()
// view engine setup
app.set('views', __dirname+ '/views');
app.set('view engine', 'hbs');


app.use('/',adminRoutes)
app.use('/users',usersRoutes)

module.exports = app


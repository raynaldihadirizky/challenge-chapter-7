// NOTES!!
// username: ray
// password: ray

const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
const PORT = 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: 'Buat ini rahasia',
    resave: false,
    saveUninitialized: false
}))

const passport = require('./lib/passport')
app.use(passport.initialize())
app.use(passport.session())
// app.use(express.json()) //JWT - SETUP

app.use(flash())

app.set('view engine', 'ejs')

const router = require('./router')
app.use(router)


app.listen(PORT, () => {
    console.log(`server running in ${PORT}`)
})
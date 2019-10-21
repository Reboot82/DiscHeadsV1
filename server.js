
const express = require('express')
const app = express()
const methodOverride = require('method-override')

/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { userRouter } = require('./controllers/user.js')
// const { templateRouter2 } = require('./controllers/template2.js')


app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/', userRouter)
// app.use('/temp2', templateRouter2)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})


const express = require('express')
const app = express()
const methodOverride = require('method-override')

/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { userRouter } = require('./controllers/user.js')
const { courseRouter } = require('./controllers/course.js')
const { discRouter } = require('./controllers/disc.js')
const { appRouter} = require('./controllers/appcontroller.js')


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
app.use('/users', userRouter)
app.use('/courses', courseRouter)
app.use('/discs', discRouter)
app.use('/start', appRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})

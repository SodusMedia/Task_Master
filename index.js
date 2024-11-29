const express = require('express');
const app = express();
const tasks = require('./routes/approutes');
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found');
/* const error = require('./middleware/error-handler'); */
const errorHandlerMiddleware = require('./middleware/error-handler');


// middleware
app.use(express.static('./public'))
app.use(express.json())



// routes
/*  app.get('/hello', (req, res) => {
    res.send('Task Manager App')

})
  */

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const PORT = process.env.PORT || 7500


/* PORT = 7500 */

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () =>
           console.log(`Server is now running on http://localhost:${PORT}...`))

      } catch (error) {
        console.log(error)

      }
    }

start()



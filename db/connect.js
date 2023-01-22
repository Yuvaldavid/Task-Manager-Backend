const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const connectDB = (url) => {
    return mongoose.connect(url, {
        
    })
}

module.exports = connectDB

/*userNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true, */
//mongoose
//.connect()
//.then(() => console.log('CONNECTED TO THE DATA BASE...')) //promise
//.catch((err) => console.log(err)) // if the primise not true
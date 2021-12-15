const mongoose = require("mongoose");


const uri = 'mongodb+srv://neal:neal@cluster0.mqtqk.mongodb.net/Music_Forum?retryWrites=true&w=majority'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoBd Connected :::`.cyan.underline)
    } catch (error) {

        console.error(`Error:${error}`)
        process.exit(1)

    }
}

module.exports = connectDB
const mongoose = require("mongoose")
const connectToMongo = async () => {
    mongoose.connect(process.env.mongoURL).then(() => {
        console.log("database connected")
    })
}
module.exports = connectToMongo
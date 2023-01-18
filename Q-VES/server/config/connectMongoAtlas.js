const mongoose = require('mongoose');

const connectMongoAtlas = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser:true
        })
        await console.log("Conexion con Mongo DB Atlas exitosa")

    }catch(e){
        console.error(e)
        process.exit(1)
    }
}

module.exports = connectMongoAtlas
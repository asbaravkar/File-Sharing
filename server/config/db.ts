import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            useCreateIndex : true,
            useFindAndModify : true,
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })
    } catch (error) {
        console.log("Connection error", error.message);
        
    }

    const connection = mongoose.connection
    if(connection.readyState >= 1) {
        console.log("Connected to DB");
        return        
    }

    connection.on("error", ()=>console.log("Connection failed"))
}

export default connectDB
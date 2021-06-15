import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fileSchema = new Schema({
    filename : {
        type : String,
        required : true
    }
})
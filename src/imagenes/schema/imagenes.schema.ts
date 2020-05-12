import {Schema} from 'mongoose'


export const ImagenesSchema = new Schema({
    favorita:{type:Boolean , required :false },
    id:{type:String , required :true },
    url:{type:String , required :true },
  
})


import {Schema} from 'mongoose'


export const ImagenesSchema = new Schema({
    breeds:{type:[] , required :false },
    id:{type:String , required :true },
    url:{type:String , required :true },
    width:{type:Number , required :false },
    height:{type:Number , required :false },
    favorita: {type:Boolean, required:false}
})


const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    dateCreated:{type:Date, required:true, default:Date.now},
    category:{type:String, required:true, enum: {
        values:['GREENTEA', 'BLACKTEA',"OOLONGTEA","WHITETEA"],
        message:'{VALUE} is not supported.'
    }},
    price:{type:Number, required:true}
})

const Tea = model('Product', ProductSchema);
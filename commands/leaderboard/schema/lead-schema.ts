import mongoose from 'mongoose'

const schema=new mongoose.Schema({
    _id:{
        type: String,
        required:true,
    },
    nick:{
        type:String,
        required:true,
    },
    thnx:{
        type:Number,
        required:true

    }

})

export default mongoose.model("leaderboard",schema)
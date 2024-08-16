import mongoose, { Types } from 'mongoose';
import 'dotenv/config'
const mongoUrl=`mongodb+srv://xwebcod:${process.env.MONGOPASS}<password>@cluster0.xjsg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(mongoUrl);
const userSchema = new mongoose.Schema({
    username:
    {
        type : String,
        require : true
    },
    email:
    {
        type : String,
        require : true
    }
})

const user = new mongoose.model('user',userSchema)
user1 =new user({})
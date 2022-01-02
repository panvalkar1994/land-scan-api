import { model, Schema } from "mongoose";
import * as bcrypt from 'bcrypt';

export interface IUser {
  username: string;
  password: string;
  userId: string;
}

const userSchema = new Schema<IUser>({
    username:{
        type:String,
        required:true,
        unique:true  
    },
    password:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        default:''
    }
},{
    timestamps:true
})

userSchema.pre('save', async function(next){
    const user = this;

    // check if user password modified or new
    if(!user.isModified('password')) return next();

    try {
        
        // generate genSalt with default rounds
        const salt = await bcrypt.genSalt();
        // generate hash
        const hash = await bcrypt.hash(user.password, salt);
    
        user.password = hash;
        return next();

    } catch (error:any) {
        return next(error);
    }

})


const User = model("User", userSchema);

export default User;
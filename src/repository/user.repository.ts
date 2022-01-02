import { UserDto } from "../dto/user.dto";
import User from "../model/user.model";
import {v4 as uuid} from 'uuid';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function createUser(userDto:UserDto){
    const user = new User({
        username:userDto.username,
        password:userDto.password
    });
    user.userId = uuid();
    try {
        const saved = await user.save();
        if(saved._id){
            return {message:"User created Sucessfully"}
        }
    } catch (error:any) {
        throw new Error(error.message);
    }
}

export async function logInUser(userDto: UserDto) {
    const user =  await User.findOne({username:userDto.username});
    if(!user){
        throw new Error("User does not exist");
    }

    // validate password
    if(await bcrypt.compare(userDto.password, user.password)==false){
        throw new Error("Invalid Credentials")
    }

    // generate token
    const token = jwt.sign({ userId: user.userId }, process.env.ACCESS_TOKEN_SECRET as string);

    return token;

}

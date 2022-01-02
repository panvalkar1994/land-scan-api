import { UserDto } from "../dto/user.dto";
import { createUser, logInUser } from "../repository/user.repository";


export async function login(userDto:UserDto){
    try {
        const token = await logInUser(userDto);
        return token;
    } catch (error) {
        throw error;
    }
}

export async function signUp(userDto: UserDto) {

    return createUser(userDto);

}
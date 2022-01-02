import { Response, Request } from "express";
import { UserDto } from "../dto/user.dto";
import { login, signUp } from "../service/user.service";

export async function loginHandler(req: Request, res: Response) {
    try {
       const userDto = await UserDto.validateUserDto(req.body);
       const token = await login(userDto)       
       return res.json({token});
   } catch (error:any) {
       return res.status(404).send(error.message)
   }
}

export async function signUpHandler(req: Request, res: Response) {
  try {
    const userDto = await UserDto.validateUserDto(req.body);
    const result = await signUp(userDto);
    return res.status(201).send(result);
  } catch (error: any) {
    return res.status(404).send(error.message);
  }
}

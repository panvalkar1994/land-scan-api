import { plainToClass } from "class-transformer";
import { IsDefined, IsString, MinLength, validate } from "class-validator";

export class UserDto {
  @IsString()
  @MinLength(6, {
    message: "too short username",
  })
  @IsDefined()
  username!: string;

  @IsString()
  @MinLength(6, {
    message: "Weak Password",
  })
  @IsDefined()
  password!: string;

  static async validateUserDto(data: any): Promise<UserDto> {
    const userData: UserDto = plainToClass(UserDto, data);
    // validate userDto
    try {
      const err = await validate(userData);
      if (err.length) {
        throw new Error("Invalid Credentials");
      }
      return userData;
    } catch (error) {
      throw error;
    }
  }
}

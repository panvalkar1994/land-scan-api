import { plainToClass } from "class-transformer";
import { IsDefined, IsOptional, IsString, MinLength, Validate, validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Point } from "geojson";
import { IsPoint } from "../validators/point.validator";


// regionId:string;
//     name:string;
//     description:string;
//     location:Point, // GeoJson point 
//     ownerId:Sch

export class RegionDto {
  @IsDefined()
  @IsString()
  @MinLength(3)
  name!: string;

  @IsOptional()
  description!: string;

  // custom validator to be added
  @IsDefined()
  @Validate(IsPoint)
  location!: Point;

  static async validateRegionDto(data: any): Promise<RegionDto> {
    const userData: RegionDto = plainToClass(RegionDto, data);
    // validate RegionDto
    try {
      const err = await validate(userData);
      if (err.length) {
        throw new Error();
      }
      return userData;
    } catch (error) {
      throw new Error("Invalid Region Data")
    }
  }
}




import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Point } from "geojson";

@ValidatorConstraint({ name: "isPoint", async: false })
export class IsPoint implements ValidatorConstraintInterface {
  validate(location: Point, args: ValidationArguments) {
    if (location !== undefined && location !== null) {
      if (location.type === "Point" && location.coordinates.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return `Invalid Location`;
  }
}

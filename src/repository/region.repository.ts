import { RegionDto } from "../dto/region.dto";
import Region from "../model/region.model";
import { v4 as uuid } from "uuid";
import { Types } from "mongoose";
import User from "../model/user.model";

export async function addRegion(regionDto: RegionDto, userId: string) {
  const region = new Region();
  region.regionId = uuid();
  region.name = regionDto.name;
  region.location = regionDto.location;

  try {
    const user  = await User.findOne({'user.userId':userId});
    region.owner = user?._id;
    const result = await region.save();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function findRegionById(regionId:string) {
  try {
    const region = await Region.findOne({'regionId':regionId})
    if(!region){
      throw new Error("Region does not exist")
    }
    return region;
  } catch (error) {
    throw error;
  }
}

export async function deleteRegionById(userId:string, regionId:string) {
  try {
    const region = await findRegionById(regionId);
    if(region.owner._id.toString()!==userId){
      throw new Error("UnAuthorized")
    }
    const result = await region.delete();
    return result;
  } catch (error) {
    throw error;
  }
}

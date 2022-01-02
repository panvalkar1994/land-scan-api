import { RegionDto } from "../dto/region.dto";
import Region, { IRegion } from "../model/region.model";
import { v4 as uuid } from "uuid";
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
    const user = await User.findOne({'userId':userId});
    if(region.owner._id.toString()!=user?._id){
      throw new Error("UnAuthorized")
    }
    const result = await region.delete();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateRegion(regionDto:RegionDto, userId:string, regionId:string) {
  try {
    
    const user = await User.findOne({ userId: userId });
  
     let filter = {
       'regionId':regionId,
       'owner':user?._id
     }
  
     let update:Partial<IRegion> = {};
  
     if(regionDto.name){
       update.name = regionDto.name;
     }
  
     if(regionDto.description){
       update.description = regionDto.description;
     }
  
     if(regionDto.location.coordinates.length){
       update.location = regionDto.location;
     }
  
     const result = await Region.updateOne(filter, update);
     return result;
  } catch (error) {
    throw error;
  } 
}
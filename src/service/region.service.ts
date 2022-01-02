import { RegionDto } from "../dto/region.dto";
import { addRegion, deleteRegionById, findRegionById, updateRegion } from "../repository/region.repository";

export async function createRegion(regionDto:RegionDto, userId:string) {
    try {
        const createdRegion = addRegion(regionDto, userId);
        return createdRegion;
    } catch (error) {
        throw error;
    }
}

export async function getRegionById(regionId:string) {
    try {
        const region = findRegionById(regionId);
        return region;
    } catch (error) {
        throw error;
    }
}

export async function deleteRegion(userId:string, regionId:string) {
    try {
      const region = deleteRegionById(userId, regionId);
      return region;
    } catch (error) {
      throw error;
    }
}

export async function updateRegionHandler(data:RegionDto, userId:string, regionId:string){
    return updateRegion(data, userId, regionId);
}
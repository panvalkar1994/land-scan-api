import { mongo, ObjectId } from 'mongoose'

import { RegionDto } from "../dto/region.dto";
import { addRegion, findRegionById } from "../repository/region.repository";

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
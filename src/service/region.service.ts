import { mongo, ObjectId } from 'mongoose'

import { RegionDto } from "../dto/region.dto";
import { addRegion } from "../repository/region.repository";

export async function createRegion(regionDto:RegionDto, userId:string) {
    try {
        const createdRegion = addRegion(regionDto, userId);
        return createdRegion;
    } catch (error) {
        throw error;
    }
}
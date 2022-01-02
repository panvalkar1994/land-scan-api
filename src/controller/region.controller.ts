import { Request, Response } from "express";
import { RegionDto } from "../dto/region.dto";

export async function createRegionHandler(req:Request, res:Response) {
    try {
        const regionDto = await RegionDto.validateRegionDto(req.body);
        return res.json(regionDto)
    } catch (error:any) {
        res.send(error.message)
    }
}
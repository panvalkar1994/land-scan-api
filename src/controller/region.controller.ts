import { Request, Response } from "express";
import { RegionDto } from "../dto/region.dto";
import { createRegion, getRegionById } from "../service/region.service";

export async function createRegionHandler(req:Request, res:Response) {
    try {
        const regionDto = await RegionDto.validateRegionDto(req.body);
        const userId = req.body.userId;
        const createdRegion = await createRegion(regionDto, userId);
        return res.json(createdRegion);
    } catch (error:any) {
        res.send(error.message)
    }
}

export async function getRegion(req: Request, res: Response) {
  try {
      const regionId = req.params.id;
      const region = await getRegionById(regionId);
      return res.send(region);
  } catch (error:any) {
      res.send(error.message)
  }
}
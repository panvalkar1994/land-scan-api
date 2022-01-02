import { Point } from "geojson";
import { model, Schema } from "mongoose";

export interface IRegion{
    regionId:string;
    name:string;
    description:string;
    location:Point, // GeoJson point 
    ownerId:Schema.Types.ObjectId, // reference to userId
}

const RegionSchema = new Schema<IRegion>({
    regionId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        minlength:3
    },
    description:{
        type:String
    },
    location:{
        type:{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    },
    ownerId:{
        type:Schema.Types.ObjectId, 
        ref:'User'
    }

})

const Region = model('Region', RegionSchema);

export default Region;
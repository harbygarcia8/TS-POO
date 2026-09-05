import { BaseModel } from "./base.model";

export enum ACCESS_TYPE { 
    PRIVATE = 'private',
    PUBLIC = 'public'

}

export interface Category extends BaseModel {
    name: string;
    image: string;
    access?: ACCESS_TYPE;
}

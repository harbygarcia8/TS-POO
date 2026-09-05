import { IsEnum, IsNotEmpty, IsUrl, Length } from "class-validator";
import { ACCESS_TYPE, Category } from "../models/category.model";

export interface ICreateCategoryDTO extends Omit<Category, 'id' | 'createdAt' | 'updatedAt'> {}

export class CreateCategoryDTO implements ICreateCategoryDTO {

    @IsNotEmpty()
    @Length(3, 50)
    name!: string;
    
    @IsUrl()
    image!: string;

    @IsEnum(ACCESS_TYPE)
    access?: ACCESS_TYPE | undefined;

}

export interface UpdateCategoryDTO extends Partial<CreateCategoryDTO>{}

export interface FindCategoryDTO extends Readonly<Category>{}

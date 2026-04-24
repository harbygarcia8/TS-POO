import { BaseModel } from "./base.model";
import { Category } from "./category.model";

export interface Products extends BaseModel{
    title:       string;
    slug:        string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
}
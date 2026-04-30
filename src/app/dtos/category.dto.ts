import { Cat } from "../../12-abstract";
import { Category } from "../models/category.model";

export interface CreateCategoryDTO extends Omit<Category, 'id' | 'createdAt' | 'updatedAt'> {}

export interface UpdateCategoryDTO extends Partial<CreateCategoryDTO>{}

export interface FindCategoryDTO extends Readonly<Category>{}

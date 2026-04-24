import { faker } from "@faker-js/faker";
import type { CreateProductDTO, FindProductDTO, UpdadeProductDTO } from "./product.dto.js";
import type { Product } from "./product.model.js";
import type { BaseModel } from "../base.model.js";

export const products: Product[] = [];
export const findByProducts = (dto: FindProductDTO): Product[] => {

    // dto.tags?.push()
    // dto.tags?.push();
    return products;

}

export const addProduct = (data: CreateProductDTO): Product => {

    const newProduct = {
        ...data,
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    }
    products.push(newProduct)
    return newProduct;
}

export const updateProduct = (id: Product['id'], changes: UpdadeProductDTO): Product => {
    const index = products.findIndex(item => item.id === id);
    const  prevData = products[index];
    products[index] = {
        ...prevData,
        ...changes,
    } as Product
    return products[index]

}

export const getProduct = (id:Product['id']) =>  {
    // code

}

export const deleteProduct = (id:Product['id']) => {
    // code
}
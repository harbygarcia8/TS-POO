import { faker } from "@faker-js/faker";
import type { CreateProductDTO, FindProductDTO, UpdadeProductDTO } from "../dtos/product.dto.js";
import { Product } from "../models/product.model.js";
import { ProductRepository } from "../interfaces/product.interface.js";



export class ProductMemoryService implements ProductRepository{
    private products: Product[] = [];

    getAll (): Product[] {
        return this.products;
    }

    create (data: CreateProductDTO): Product {
        const newProduct = {
            ...data,
            id: faker.number.int(),
            createdAt: new Date(),
            updatedAt: new Date(),
            category: {
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.url(),
                createdAt: new Date(),
                updatedAt: new Date()
            }            
        }

        return this.add(newProduct);
    }

    private add(product: Product):Product {
        this.products.push(product);
        return product;

    }

    update (id:Product['id'], changes: UpdadeProductDTO): Product {
        const index = this.products.findIndex(item => item.id === id);
        const prevData = this.products[index];
        this.products[index] = {
            ...prevData,
            ...changes
        }
        return this.products[index];

    }

    findOne(id: Product['id']) {
        return this.products.find(item => item.id === id)
    }


}



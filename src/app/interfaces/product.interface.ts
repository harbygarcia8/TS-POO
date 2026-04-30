import { CreateProductDTO, UpdadeProductDTO } from "../dtos/product.dto";
import { Product } from "../models/product.model";

export interface ProductRepository {
    getAll(): Product[] | Promise<Product[]>
    create(product: CreateProductDTO): Product | Promise<Product>
    update(idProduct: Product['id'], product:UpdadeProductDTO): Product | Promise<Product>
    findOne(idProduct: Product['id']): Product | Promise<Product> | undefined
}
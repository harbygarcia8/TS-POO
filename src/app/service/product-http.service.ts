import axios from "axios";
import { CreateProductDTO, UpdadeProductDTO } from "../dtos/product.dto";
import { ProductRepository } from "../interfaces/product.interface";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductRepository {

    static instance: ProductHttpService | null = null;
    private readonly url = 'https://api.escuelajs.co/api/v1/products'

    async getAll(): Promise<Product[]> {
        const {data} = await axios.get<Product[]>(this.url);
        return data;          
    }

    async update(idProduct: Product["id"], product: UpdadeProductDTO): Promise<Product> {

        const {data} = await axios.put<Product>(`${this.url}/${idProduct}`, product);
        return data;

    }

    async create(product: CreateProductDTO): Promise<Product> {
        const {data} = await axios.post<Product>(this.url, product);
        return data;
    }
    
    async findOne(idProduct: Product["id"]): Promise<Product> {
        const { data } = await axios.get<Product>(`${this.url}/${idProduct}`)
        return data
    }

    static createInstance(): ProductHttpService | null {
        if (this.instance === null) {
            ProductHttpService.instance = new ProductHttpService();
        }
        return ProductHttpService.instance;
    }

}

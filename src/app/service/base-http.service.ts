import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdadeProductDTO } from "../dtos/product.dto";
import { UpdateCategoryDTO } from "../dtos/category.dto";

export class BaseHttpService<TypeClass> {
    // private data: TypeClass = [];

    constructor(
        private readonly url:string = 'https://api.escuelajs.co/api/v1/products'
    ){}

    async getAll() {
        const { data } = await axios.get<TypeClass[]>(this.url);
        return data
    }

    async update<ID, DTO>(idProduct: ID, product: DTO): Promise<Product> {

        const {data} = await axios.put<Product>(`${this.url}/${idProduct}`, product);
        return data;

    }
    
}

// const service = new BaseHttpService<string>();

// const service2 = new BaseHttpService<Category>();
// service2.getAll();


 (async () => {
    const productsService = new BaseHttpService<Product>()
    
    const response = productsService.getAll();
    console.log('------'.repeat(10))
    const update = productsService.update<Product['id'],UpdadeProductDTO>(1, {
        title: 'example'
    })
    console.log(response)
    console.log('------'.repeat(10))

    const categoryService = new BaseHttpService<Category>();
    const responseCategory = await categoryService.getAll()
    const responseUpdateCategory = await categoryService.update<Category['id'],UpdateCategoryDTO>(1,{
        name: 'categoryExample'
    })
    console.log(responseCategory)

})();
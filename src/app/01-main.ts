import axios from 'axios'
import { Products } from './models/product.model';



(async ()=> {
    async function getProducts(): Promise<Products[]> {
        const {data} = await axios.get<Products[]>('https://api.escuelajs.co/api/v1/products')
        return data;
    }
    console.log('-----'.repeat(10))
    const products = await getProducts();
    console.log(products.map(item => `${item.id} ~ ${item.title}`))
})(); 
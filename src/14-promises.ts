import axios from 'axios'

interface Products {
    id:          number;
    title:       string;
    slug:        string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
}

interface Category {
    id:         number;
    name:       string;
    slug:       string;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}

(async ()=> {

    function delay (time: number) {
        const promise = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('true')
            }, time)

        });
        return promise;
    }

    function getProducts() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products')
        return promise
    }


    async function getProductsAsync(): Promise<Products> {
        const rta = await axios.get<Products>('https://api.escuelajs.co/api/v1/products')
        return rta.data
    }   

    console.log('-----'.repeat(10))
    const rta = await delay(3000);
    console.log(rta.repeat(2))

    console.log('-----'.repeat(10))

    const products = await getProducts();
    console.log(products.data)


})(); 
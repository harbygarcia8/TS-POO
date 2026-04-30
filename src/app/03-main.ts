import { ProductHttpService } from "./service/product-http.service";

const productService = ProductHttpService.createInstance();

(async() => {
    console.log('-------'.repeat(10))
    console.log('Leyendo todos los productos')
    const products = await productService?.getAll();
    console.log(products?.length)
    console.log(products?.map((item) => item.price))

    console.log('-------'.repeat(10))

    if (products) {
        const productId = products[0].id

        console.log('Actualizando producto')

        await productService?.update(1, {
            title: 'New Title',
            price: 123456
        })

        console.log('-------'.repeat(10))
        console.log('Leyendo el primer producto actualizado.')
        const product = await productService?.findOne(productId);

        console.log(product);
    }


})()



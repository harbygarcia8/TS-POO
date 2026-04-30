import { ProductMemoryService } from "./service/product-memory.service";

const productService = new ProductMemoryService();

const productCreated = productService.create({
    title: '',
    price: 122,
    description: '',
    categoryId: 12,
    images: []
})

console.log(productService.getAll())
console.log('-----'.repeat(10))
console.log(productService.findOne(productCreated.id))

productService.update(productCreated.id, {
    title: 'nombre real'
})

console.log('-----'.repeat(10))
console.log(productService.findOne(productCreated.id))
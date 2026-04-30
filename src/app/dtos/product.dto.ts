import { Product } from "../models/product.model";

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string
}

// el utility type Pick nos permite crear un nuevo tipo a partir de otro, 
// pero solo con las propiedades que le indiquemos
type example = Pick<Product, 'title' | 'description'>

// el utility type Partial nos permite crear un nuevo tipo a partir de otro, 
// pero con todas las propiedades como opcionales
type example1 = Partial<Product>
export interface UpdadeProductDTO extends Partial<CreateProductDTO> {}

// el utility type Required nos permite crear un nuevo tipo a partir de otro, 
// pero con todas las propiedades como requeridas
type example2 = Required<Product>

// el utility type Readonly nos permite crear un nuevo tipo a partir de otro,
// pero con todas las propiedades como solo lectura
export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>> {
    readonly tags: ReadonlyArray<string>
}

type example3 = Readonly<Product>
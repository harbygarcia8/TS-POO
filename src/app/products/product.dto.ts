import type { Product } from "./product.model.js";

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string
}

type example = Pick<Product, 'title' | 'description'>

export interface UpdadeProductDTO extends Partial<CreateProductDTO> {}

type example2 = Required<Product>

export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>> {
    readonly tags: ReadonlyArray<string>
}

type example3 = Readonly<Product>
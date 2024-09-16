import { brand } from './schemaTypes/brand'
import { category } from './schemaTypes/category'
import { product } from './schemaTypes/product'
import { review } from './schemaTypes/review'
import { role } from './schemaTypes/role'
import { tag } from './schemaTypes/tag'
import { user } from './schemaTypes/user'


export const schema = {
  types: [product, brand, category, review, role, tag, user],
}


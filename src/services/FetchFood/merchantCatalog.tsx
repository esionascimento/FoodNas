import { APIPOST } from './utilsFood'

export const fechtCatalogProductList = () => APIPOST.get('/merchant/catalog/list_products')

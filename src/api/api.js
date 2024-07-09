import { products } from "./mock"

// Get Products
export const getProducts = () => {
  const response = products
  return response
}

export const getProductsByCategory = (category) => {
  const response = products
  const productByCategory = response.filter(p => p.category == category)
  return productByCategory
}
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

export const getProductsByName = (productName) => {
  const response = products
  const productByName= response.filter(p => p.productName == productName)
  return productByName
}

export const getProductsById = (id) => {
  const response = products
  const productById= response.find(p => p.id == id)
  return productById
}


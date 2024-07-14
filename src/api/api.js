import { products } from "./mock"
import axios from 'axios'

// Users
export const getUsers = async() => {
  try {
    const response = await axios.get('https://668fb31ec0a7969efd992601.mockapi.io/api/v1/users')
    return response
  } catch (error) {
    return error
  }
}

export const getUserById = async(id) => {
  try {
    const response = await axios.get('https://668fb31ec0a7969efd992601.mockapi.io/api/v1/users')
    return response
  } catch (error) {
    return error
  }
}

export const register = async(data) => {
  try {
    const response = await axios.post('https://668fb31ec0a7969efd992601.mockapi.io/api/v1/users/',data)
    return response
  } catch (error) {
    return error
  }
}

export const login = async(data) => {
  try {
    const getAllUser = await getUsers()
    const users = getAllUser.data
    const response = users.find(u => u.email == data.email && u.password == data.password)
    if(response==undefined){return 'Email atau password salah!'}
    return response
  } catch (error) {
    return error
  }
}

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


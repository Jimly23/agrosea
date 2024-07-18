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
    const response = await axios.get(`https://668fb31ec0a7969efd992601.mockapi.io/api/v1/users/${id}`)
    return response.data
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

export const updateUser = async(data) => {
  const {id, seller, storeName} = data;
  try {
    // console.log(id,seller,storeName);
    const response = await axios.put(`https://668fb31ec0a7969efd992601.mockapi.io/api/v1/users/${id}`, { seller, storeName });
    return response.data
  } catch (error) {
    return error
  }
}

// Products
export const addProduct = async(data) => {
  try {
    const response = await axios.post('https://668fb31ec0a7969efd992601.mockapi.io/api/v1/products/',data)
    return response.data
  } catch (error) {
    return error
  }
}

export const getProductByUserId = async(userId) => {
  try {
    const getProducts = await axios.get('https://668fb31ec0a7969efd992601.mockapi.io/api/v1/products')
    const response = getProducts.data.filter(p => p.userId == userId)
    return response
  } catch (error) {
    return error
  }
}


// Get Products Object
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


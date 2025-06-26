/* eslint-disable no-console */
// src/lib/axios.ts
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// Attach token in requests (if available)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Automatically save sessionkey from response
axiosInstance.interceptors.response.use(
  (response) => {
    const sessionkey = response.data?.sessionkey
    if (sessionkey) {
      localStorage.setItem('token', sessionkey)
      console.log('✅ Token saved from response:', sessionkey)
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance

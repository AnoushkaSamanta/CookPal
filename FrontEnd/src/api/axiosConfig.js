import axios from 'axios';

// Auth API instance (for login/signup)
export const authApi = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// MealDB API instance
export const mealApi = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
});
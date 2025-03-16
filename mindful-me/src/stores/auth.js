import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: null,
    token: localStorage.getItem('authToken') || null, // Optionally get the token from localStorage
  }),
  actions: {
    setUserData(data) {
      this.userData = data
      localStorage.setItem('authToken', data.token)  // Store token in localStorage
    },
    clearUserData() {
      this.userData = null
      this.token = null
      localStorage.removeItem('authToken')  // Remove token from localStorage
    },
  },
})


class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const mergedOptions = { ...defaultOptions, ...options }

    try {
      const response = await fetch(url, mergedOptions)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      if (response.status === 204) {
        return null
      }

      return await response.json()
    } catch (error) {
      console.error(`API request failed: ${url}`, error)
      throw error
    }
  }

  get(endpoint) {
    return this.request(endpoint, { method: 'GET' })
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  patch(endpoint, data) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }
}

export const apiClient = new ApiClient('http://localhost:1212/api')

import axios, { AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import jwtDecode from 'jwt-decode'

const API_URL = 'https://backend.agri.in'

const apiService: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const showSessionExpiredPopup = () => {
  // Create an overlay div
  const overlay = document.createElement('div')
  overlay.setAttribute('id', 'session-expired-overlay')
  overlay.style.position = 'fixed'
  overlay.style.left = '0'
  overlay.style.top = '0'
  overlay.style.width = '100%'
  overlay.style.height = '100%'
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  overlay.style.zIndex = '9999'
  // popup
  const popup = document.createElement('div')
  popup.setAttribute('id', 'session-expired-popup')
  popup.style.position = 'fixed'
  popup.style.left = '50%'
  popup.style.top = '50%'
  popup.style.transform = 'translate(-50%, -50%)'
  popup.style.zIndex = '9999'
  popup.style.backgroundColor = 'white'
  popup.style.border = '1px solid #ccc'
  popup.style.padding = '20px'
  popup.style.borderRadius = '4px'
  popup.style.textAlign = 'center'

  const message = document.createElement('p')
  message.textContent = 'Session expired. Please Sign-in'
  popup.appendChild(message)

  const button = document.createElement('button')
  button.textContent = 'OK'
  button.style.padding = '6px 12px'
  button.style.marginTop = '10px'
  button.style.border = 'none'
  button.style.borderRadius = '4px'
  button.style.backgroundColor = '#007bff'
  button.style.color = 'white'
  button.style.cursor = 'pointer'
  button.addEventListener('click', () => {
    window.location.href = '/'
  })
  popup.appendChild(button)

  document.body.appendChild(popup)
  // Append the popup to the overlay
  overlay.appendChild(popup)

  // Append the overlay to the body
  document.body.appendChild(overlay)
}
const handleTokenRefreshFailure = () => {
  localStorage.removeItem('user')
  sessionStorage.removeItem('user')
  showSessionExpiredPopup()
}

const refreshToken = async (): Promise<string | null> => {
  const userData =
    localStorage.getItem('user') || sessionStorage.getItem('user')
  const user = userData ? JSON.parse(userData) : null

  if (!user || !user.refreshToken) return null

  try {
    const response = await axios.post(
      `${API_URL}/admin/api/v1/usermanager/refreshToken`,
      {
        refresh_token: user.refreshToken,
      }
    )

    if (response.status === 200) {
      const updatedUser = { ...user, ...response.data }
      if (localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(updatedUser))
      } else {
        sessionStorage.setItem('user', JSON.stringify(updatedUser))
      }
      return response.data.accessToken
    }
    throw new Error('Refresh token request failed')
  } catch (error) {
    console.error('Error refreshing access token:', error)
    return null
  }
}

apiService.interceptors.request.use(
  async (config: { headers: any }) => {
    const userData =
      localStorage.getItem('user') || sessionStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null

    if (user && user.accessToken) {
      const decodedToken: any = jwtDecode(user.accessToken)
      const now = new Date().getTime() / 1000

      if (decodedToken.exp - now < 60) {
        const newAccessToken = await refreshToken()

        if (newAccessToken) {
          user.accessToken = newAccessToken
          if (localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify(user))
          } else {
            sessionStorage.setItem('user', JSON.stringify(user))
          }
        }
      }

      const updatedConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
      return updatedConfig
    }
    return config
  },
  (error: any) => Promise.reject(error)
)

apiService.interceptors.response.use(
  (response: any) => {
    toast.success(
      response?.data?.message ? response?.data?.message : 'Success!',
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      }
    )
    return response
  },
  async (error: { response: { status: number }; config: any }) => {
    const isSignInRequest = window.location.href.includes('/sign-in')
    if (error?.response?.status === 401 && !isSignInRequest) {
      const originalRequest = error.config
      const newAccessToken = await refreshToken()
      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return apiService(originalRequest)
      }
      handleTokenRefreshFailure()
      return Promise.reject(error)
    }
    // if (error?.response?.status === 400) {
    //   handleTokenRefreshFailure();
    //   return Promise.reject(error);
    // }

    toast.error('Failed!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    })
    return Promise.reject(error)
  }
)

export const post = (url: string, data: {}) =>
  new Promise((resolve, reject) => {
    apiService
      .post(url, data)
      .then((response: { data: unknown }) => resolve(response.data))
      .catch((error: any) => reject(error))
  })

export const get = (url: any) =>
  new Promise((resolve, reject) => {
    apiService
      .get(url)
      .then((response: { data: unknown }) => resolve(response.data))
      .catch((error: any) => reject(error))
  })

export const put = (url: any, data: {}) =>
  new Promise((resolve, reject) => {
    apiService
      .put(url, data)
      .then((response: { data: unknown }) => resolve(response.data))
      .catch((error: any) => reject(error))
  })

export const del = (url: any, data: {}) =>
  new Promise((resolve, reject) => {
    apiService
      .delete(url, { data })
      .then((response: { data: unknown }) => resolve(response.data))
      .catch((error: any) => reject(error))
  })

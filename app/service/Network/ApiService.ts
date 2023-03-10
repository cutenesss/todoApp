/* istanbul ignore file */
import axios from 'axios'

const createAPI = () => {
  const APIInstant = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return APIInstant
}

const instance = createAPI()

function handleResult<T>(api: Promise<T>) {
  return api
    .then((res: any) => {
      return handleResponse<T>(res)
    })
    .catch(async (error: any) => {
      return handleResponse<T>(error)
    })
}

function handleResponse<T>(data: any) {
  if (data.status !== 200) {
    return Promise.reject(data)
  }
  return Promise.resolve(data.data)
}

export const ApiClient = {
  get: (url: string, payload: Object) =>
    handleResult(instance.get(url, payload)),
  post: (url: string, payload: object) =>
    handleResult(instance.post(url, payload)),
  put: (url: string, payload: object) =>
    handleResult(instance.put(url, payload)),
  delete: (url: string, payload: object) =>
    handleResult(instance.delete(url, { data: payload })),
}

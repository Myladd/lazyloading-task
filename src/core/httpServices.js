import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const httpService = axios.create({
  baseURL: BASE_URL
})

export const request = ({ ...options }) => {
  httpService.defaults.headers.common.Authorization = "accepted get"
  const onSuccess = res => res
  const onError = error => {
    return error
  }

  return httpService(options).then(onSuccess).catch(onError)
}
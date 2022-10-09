import axios, { AxiosRequestConfig } from 'axios'

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API
})

type Props = {
  accessToken:string
}

export default httpClient

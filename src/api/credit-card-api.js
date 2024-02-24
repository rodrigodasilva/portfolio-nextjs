import axios from 'axios'

import { ENV } from '@/constants/ENV'

const BASE_URL = ENV.CREDIT_CARD_API_URL

export const creditCardApi = {
  createToken: (appId, data) =>
    axios.post(`${BASE_URL}/tokens?appId=${appId}`, data)
}

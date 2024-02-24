import axios from 'axios'

import { ENV } from '@/constants/ENV'

const BASE_URL = ENV.PAYMENT_LINK_API_URL

export const paymentLinkApi = {
  fetchById: (id) => axios.get(`${BASE_URL}/${id}`),
  createSession: (id) =>
    axios.post(`${BASE_URL}/${id}/sessions`, {
      headers: { 'Content-Type': 'application/json' }
    }),
  addCustomer: ({ id, sessionId, data }) =>
    axios.post(`${BASE_URL}/${id}/sessions/${sessionId}/customer`, data),
  addAddress: ({ id, sessionId, data }) =>
    axios.patch(
      `${BASE_URL}/${id}/sessions/${sessionId}/billing-address`,
      data
    ),
  payment: ({ id, sessionId, data }) =>
    axios.patch(`${BASE_URL}/${id}/sessions/${sessionId}/payment`, data)
}

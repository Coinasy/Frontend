import axios from 'axios'
import setAuthorizationToken from '../api/setAuth'
import jwt from 'jsonwebtoken'

export function createPool(data) {
  return dispatch => {
    return axios.post('/api/pool/create', data) // Tries to add to DB
    .then(res => {
        console.log(res)
    })
  }
}

export function getMyPool() {
  return dispatch => {
    return axios.get('/api/pool').then(res => {
      dispatch({
        type: 'GET_POOL',
        res
      })
      return res
    })
  }
}

export function getMorePool() {
  return dispatch => {
    return axios.get('/api/pool/morePool').then(res => {
      dispatch({
        type: 'GET_MORE_POOL',
        res
      })
      return res
    })
  }
}

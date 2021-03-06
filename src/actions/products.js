import * as request from "superagent";
import {baseUrl} from "../constants"

export const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT"
export const ADD_PRODUCT = "ADD_PRODUCT"

export const FETCH_MY_PRODUCTS = "FETCH_MY_PRODUCTS"
export const UPDATED_PRODUCT = 'UPDATE_PRODUCT'
export const REMOVED_PRODUCT = 'REMOVED_PRODUCT'

export const FILTER_PRODUCTS = "FILTER_PRODUCTS"


export const fetchMyProducts = (profileId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/profiles/${profileId}/products`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_MY_PRODUCTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}


export const fetchAllProducts = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/products`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ALL_PRODUCTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchProduct = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/products/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_PRODUCT,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const addProduct = (product, picture) => (dispatch, getState) =>{
  const state = getState()
  const jwt = state.currentUser.jwt

  return request
    .post(`${baseUrl}/products`)
    .set("Authorization", `Bearer ${jwt}`)
    .attach("productPhoto", picture)
    .field(product)
    .then(response => {
      dispatch({
        type: ADD_PRODUCT,
        payload: response.body
      })
    })
    .catch(err => {
      console.error(err)
    })
}

export const updateProduct = (productId, updates) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/products/${productId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response => dispatch ({
      type: UPDATED_PRODUCT,
      payload: response.body
    }))
    .catch(err => {
        console.error(err)
    })
}

export const removeProduct = (productId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/products/${productId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({volume: 0})
    .then(response => dispatch ({
      type: REMOVED_PRODUCT,
      payload: response.body
    }))
    .catch(err => {
        console.error(err)
    })
}



export const filterProducts = (preferences) => (dispatch) => {
  console.log(preferences)
  const {code, country} = preferences

    request
      .get(`${baseUrl}/search/products?code=${code ? code : '*'}&country=${country ? country : '*'}`)
      .then(response => {
        console.log(response)
            dispatch({
              type: FILTER_PRODUCTS,
              payload: response.body
            })
        })
        .catch(err => {
            console.error(err)
        })

      }

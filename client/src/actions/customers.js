import { callApi } from '../utils/api'
var _ = require('lodash');

export const FETCH_BUTTONS_SUCCESS = 'FETCH_BUTTONS_SUCCESS';
export const FETCH_BUTTONS_FAILURE = 'FETCH_BUTTONS_FAILURE';
export const SET_BUTTON_PRODUCT_QUANTITY = 'SET_BUTTON_PRODUCT_QUANTITY';
export const SET_BUTTON_EXTERNAL_ID = 'SET_BUTTON_EXTERNAL_ID';
export const BUTTON_UPDATE_SUCCESS = 'BUTTON_UPDATE_SUCCESS';
export const BUTTON_UPDATE_FAILURE = 'BUTTON_UPDATE_FAILURE';
export const BUTTON_ORDER_SUCCESS = 'BUTTON_ORDER_SUCCESS';
export const BUTTON_ORDER_FAILURE = 'BUTTON_ORDER_FAILURE';
export const SET_BUTTON_CACHE = 'SET_BUTTON_CACHE';
export const SET_BUTTON_CACHE_FAILURE = 'SET_BUTTON_CACHE_FAILURE';
export const SET_BUTTON_FROM_CACHE = 'SET_BUTTON_FROM_CACHE';
export const WIFI_TEACH_SUCCESS = 'WIFI_TEACH_SUCCESS';
export const WIFI_TEACH_FAILURE = 'WIFI_TEACH_FAILURE';
export const SET_BUTTON = "SET_BUTTON";
export const SET_LOGIN_URI_BUTTON_ID = "SET_LOGIN_URI_BUTTON_ID";
export const BUTTON_DELETE_SUCCESS = 'BUTTON_DELETE_SUCCESS';
export const BUTTON_DELETE_FAILURE = 'BUTTON_DELETE_FAILURE';



export function fetchCustomers(cb) {
    // return function (dispatch, getState) {
    callApi(null, null, 'GET', 'customersbyuser', null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
    // }
}

export function addCustomer(customer, cb) {
    callApi(null, null, 'POST', 'add-customer', customer, BUTTON_UPDATE_SUCCESS, BUTTON_UPDATE_FAILURE);
}


export function getCustomerData(id,cb) {
    // return function (dispatch, getState) {
    callApi(null, null, 'GET', `customer/${id}`, null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
    // }
}

export function deleteCustomer(id ,cb) {
    callApi(null, null, 'DELETE', `delete-customer/${id}`, null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb)
}


export function updateCustomer(id ,customer,cb) {
    callApi(null, null, 'PUT', `edit-customer/${id}`, customer, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb)
}



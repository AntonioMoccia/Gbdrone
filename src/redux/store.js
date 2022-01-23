import {configureStore} from '@reduxjs/toolkit'
import homeReducer from './Home/homeSlice'
import contactReducer from './Contact/contactSlice'
import aboutReducer from './About/aboutSlice'
import servicesReducer from './Services/servicesSlice'
export const store = configureStore({
        reducer:{
            home:homeReducer,
            contact:contactReducer,
            about:aboutReducer,
            services:servicesReducer
        }
})
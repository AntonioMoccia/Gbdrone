import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {map} from 'lodash'
import {client} from '../../prismic'

export const getServicesData = createAsyncThunk(
    'services/getServicesData',
    async (par,thunkApi)=>{
            var res = await client.getByType('servizio')

        return [...res.results]
    }
    )


const servicesSlice = createSlice({
    name:'services',
    initialState:{
        data:[],
        labels:[],
    },
    reducers:{
        getLabels:(state,action)=>{
            state.labels = map(state.data,(e)=>{
                    console.log(e.uid)
                return e.uid
            })
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getServicesData.pending,(state,action)=>{
            
        }).addCase(getServicesData.fulfilled,(state,action)=>{
            state.data = [...action.payload]
        })
    }
})
export const {getLabels} = servicesSlice.actions
export default servicesSlice.reducer
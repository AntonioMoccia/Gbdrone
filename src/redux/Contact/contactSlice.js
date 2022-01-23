import {client} from '../../prismic'
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let init={
    data:{},
    loaded:false
}

export const getContactData = createAsyncThunk(
    'contact/getContactData',
     async (par,thunkApi)=>{
        var res = await client.getSingle('contact')
        return res.data
    }
)

const contactSlice=createSlice({
    name:'contact',
    initialState:init,
    extraReducers:(builder)=>{
        builder.addCase(getContactData.pending,(state,action)=>{
             state.loaded=false
        }).addCase(getContactData.fulfilled,(state,action)=>{
             state.data = action.payload
             state.loaded = true
        })
    }
})

export default contactSlice.reducer

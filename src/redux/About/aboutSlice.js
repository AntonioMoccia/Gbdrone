import {client} from '../../prismic'
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let init={
    data:{},
    loaded:false
}

export const getAboutData = createAsyncThunk(
    'about/getAboutData',
     async (par,thunkApi)=>{
        var res = await client.getSingle('about')
        return res.data
    }
)

const aboutSlice=createSlice({
    name:'about',
    initialState:init,
    extraReducers:(builder)=>{
        builder.addCase(getAboutData.pending,(state,action)=>{
             state.loaded=false
        }).addCase(getAboutData.fulfilled,(state,action)=>{
             state.data = action.payload
             state.loaded = true
        })
    }
})

export default aboutSlice.reducer

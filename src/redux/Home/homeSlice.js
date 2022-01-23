import {client} from '../../prismic'
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let init={
    data:{},
    loaded:false
}

export const getHomeData = createAsyncThunk(
    'home/getHomeData',
     async (par,thunkApi)=>{
        var res = await client.getSingle('home')
        return res.data
    }
)

const homeSlice=createSlice({
    name:'home',
    initialState:init,
    extraReducers:(builder)=>{
        builder.addCase(getHomeData.pending,(state,action)=>{
             state.loaded=false
        }).addCase(getHomeData.fulfilled,(state,action)=>{
             state.data = action.payload
             state.loaded = true
        })
    }
})

export default homeSlice.reducer

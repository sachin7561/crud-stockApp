import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: 'stockSlice',
    initialState:[],
    reducers:{
        createstock: (state,action)=>{
             state.push(action.payload)
             alert('stock added successfully')
        },
        deletestock: (state,action)=>{
            return state.filter((item,index)=>index !== action.payload)
        
        },
        editstock: (state,action)=>{
            const { index, updatedContact } = action.payload;
            return state.map((stock, i) =>
                i === index ? updatedContact : stock
            );
            
        }
    },
})

export const {createstock,deletestock,editstock} = stockSlice.actions
export default stockSlice.reducer
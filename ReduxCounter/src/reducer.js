import { createSlice } from "@reduxjs/toolkit";

// Declare initial state
// Initial State can be anything , an object or an array or just a constant we have declared
const initialState = 2;

// Make a slice
export const counterSlice = createSlice(
    {
        name : "Counter", // Property
        initialState,
        // Property
        reducers :{
            // Make Reducers here or can be imported from some file too 
            // Since our use-case is small , we will be declaring and defining them here itself

            increment : (state,action) =>{
                return state+1;
            },

            decrement : (state,action) =>{
                return state-1;
            },

            // Reducer to increment the state by a specific value, provided in action.payload
            incrementBySomeValue : (state,action)=>{
                return state+action.payload
            },
            // Reducer to decrement the state by a specific value, provided in action.payload
            decrementBySomeValue : (state,action)=>{
                return state- action.payload
            }
        }
    }
)

// Will be helpful for components
export const {increment,decrement,incrementBySomeValue,decrementBySomeValue} = counterSlice.actions 

// For the store
export default counterSlice.reducer 
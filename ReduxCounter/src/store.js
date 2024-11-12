// Import configureStore Function
import { configureStore } from "@reduxjs/toolkit";

// Can be imported with any value as we did a default export
import counterReducer from './reducer'

// Create a redux store
const store = configureStore(
    {
        reducer : {
            counter : counterReducer
        }
    }
)

export default store;
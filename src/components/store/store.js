import {configureStore} from '@reduxjs/toolkit'
import general from '../Slicers/General';
export const store = configureStore({
    reducer: {
        general,
    }
})
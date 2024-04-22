import {createSlice} from '@reduxjs/toolkit';


export const depoiteslice = createSlice({
    name: 'value',
    initialState: {
        value: 0
    },
    reducers: {
        deposite: (state) => {
            state.value += 10;
        },

        wihtdrwal: (state) => {
            state.value -= 10;
        }
    }
});

export const {deposite, wihtdrwal} = depoiteslice.actions;
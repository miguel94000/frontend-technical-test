import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Realtor } from '../../app/entities';
import { retrieveRealtors } from 'src/app/realtor/core/use-cases/retrieve-realtors';

export { realtorAdapter, initialState, realtorSlice}

const realtorAdapter = createEntityAdapter<Realtor>({
    selectId: (realtor: Realtor) => realtor.id,
});

const initialState = realtorAdapter.getInitialState();

const realtorSlice = createSlice({
    name: 'realtors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveRealtors.fulfilled, (state, action) => {
            realtorAdapter.setAll(state, action.payload.realtors);
            console.log("realtorAdapter", state.entities)
        });
        
    },
});

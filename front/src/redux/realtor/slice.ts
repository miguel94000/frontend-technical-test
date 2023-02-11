import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Realtor } from '../../app/entities';
import { retrieveRealtors } from 'src/app/realtor/core/use-cases/retrieve-realtors';

export { entityRealtorAdapter, initialState, realtorSlice}

const entityRealtorAdapter = createEntityAdapter<Realtor>({
    selectId: (realtor: Realtor) => realtor.id,
});

const initialState = entityRealtorAdapter.getInitialState();

const realtorSlice = createSlice({
    name: 'realtors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveRealtors.fulfilled, (state, action) => {
            entityRealtorAdapter.setAll(state, action.payload.realtors);
        });
    },
});

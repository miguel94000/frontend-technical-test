import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { realtorAdapter } from 'src/redux/realtor/slice';
import {  Realtor } from 'src/app/entities';

export {selectors}

// Store State
const realtorSelectors = realtorAdapter.getSelectors<RootState>(
    (state) => state.realtors
);

// Seletors
const selectors = {
    selectRealtorListViewModel: () => {
        return createSelector(
            (state: RootState) => realtorSelectors.selectAll(state),
            (realtors: Realtor[]): Realtor[] => realtors
            
        );
    },
};
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { realtorAdapter } from 'src/redux/realtor/slice';
import {  Realtor } from 'src/app/entities';
import { commonLabels } from 'src/ressources/language/common/common-labels';

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
    selectRealtorByIdViewModel: (realtorId: string) => {
        return createSelector(
            (state: RootState) => {
                const realtor = realtorSelectors.selectById(state, realtorId);
                if (!realtor) {
                    return {} as Realtor
                }
                return realtor;
            },
            (realtor: Realtor): Realtor => realtor
        )
    }
};
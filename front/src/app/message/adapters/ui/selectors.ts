import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { messageAdapter } from 'src/redux/message/slice';
import {  Message } from 'src/app/entities';

export {selectors}

// Store State
const messageSelectors = messageAdapter.getSelectors<RootState>(
    (state) => state.messages
);

// Seletors
const selectors = {
    selectMessageListViewModel: () => {
        return createSelector(
            (state: RootState) => messageSelectors.selectAll(state),
            (messages: Message[]): Message[] => messages
            
        );
    },
};
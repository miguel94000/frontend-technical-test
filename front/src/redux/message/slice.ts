import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Message } from '../../app/entities';
import { retrieveMessagesByRealtorId } from 'src/app/message/core/use-cases/retrieve-messages';

export const messageAdapter = createEntityAdapter<Message>({
    selectId: (message: Message) => message.id,
});

export const initialState = messageAdapter.getInitialState();

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveMessagesByRealtorId.fulfilled, (state, action) => {
            messageAdapter.setAll(state, action.payload.messages);
        });
    },
});

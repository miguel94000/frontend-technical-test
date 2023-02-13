import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Message } from '../../app/entities';
import { retrieveMessages } from 'src/app/message/core/use-cases/retrieve-messages';

export const messageAdapter = createEntityAdapter<Message>({
    selectId: (message: Message) => message.id,
});

export const initialState = messageAdapter.getInitialState();

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveMessages.fulfilled, (state, action) => {
            messageAdapter.setAll(state, action.payload.messages);
        });
    },
});

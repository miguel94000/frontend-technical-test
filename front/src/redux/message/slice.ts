import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Message } from '../../app/entities';
import { retrieveMessages } from 'src/app/message/core/use-cases/retrieve-messages';

export const entityMessageAdapter = createEntityAdapter<Message>({
    selectId: (message: Message) => message.id,
});

export const initialState = entityMessageAdapter.getInitialState();

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(retrieveMessages.fulfilled, (state, action) => {
            entityMessageAdapter.setAll(state, action.payload.messages);
        });
    },
});

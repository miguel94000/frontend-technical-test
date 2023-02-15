import { createEntityAdapter, createSlice, Update } from '@reduxjs/toolkit';
import { Message } from '../../app/entities';
import { retrieveMessagesByRealtorId } from 'src/app/message/core/use-cases/retrieve-messages';
import { updateMessageReadById } from 'src/app/message/core/use-cases/update-message-read-by-id';
import { updateMessageListByRealtorId } from 'src/app/message/core/use-cases/update-message-list-by-realtor-id';

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
        builder.addCase(updateMessageReadById.fulfilled, (state, action) => {
            messageAdapter.updateOne(state, {id: action.payload.message.id, changes: action.payload.message});
        });
        builder.addCase(updateMessageListByRealtorId.fulfilled, (state, action) => {
            messageAdapter.upsertMany(state, action.payload.messages);
        });
    },
});

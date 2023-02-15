import { Message } from 'src/app/entities';
import { MessageExtraArgs } from 'src/redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateMessageReadById = createAsyncThunk<
    Readonly<{
        message: Readonly<Message>;
    }>,
    {message: Message},
    { extra: MessageExtraArgs }
>(
    `messages/updateMessageRead`,
    async (params, { extra: { messageUpdateByIdQuery } }) => {
        return messageUpdateByIdQuery(params.message);
    }
);

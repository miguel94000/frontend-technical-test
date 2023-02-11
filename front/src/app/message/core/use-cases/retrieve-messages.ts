import { Message } from 'src/app/entities';
import { MessageExtraArgs } from 'src/redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const retrieveMessages = createAsyncThunk<
    Readonly<{
        messages: Readonly<Array<Message>>;
    }>,
    { realtor_id: string },
    { extra: MessageExtraArgs }
>(
    `/realtors/messages/`,
    async (params, { extra: { messageListQuery } }) => {
        return messageListQuery( params.realtor_id );
    }
);

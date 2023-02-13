import { Message } from 'src/app/entities';
import { MessageExtraArgs } from 'src/redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const retrieveMessagesByRealtorId = createAsyncThunk<
    Readonly<{
        messages: Readonly<Array<Message>>;
    }>,
    {realtor_id: string, pageNumber: number, pageSize: number},
    { extra: MessageExtraArgs }
>(
    `messages/retrieveMessagesByRealtorId`,
    async (params, { extra: { messageListQuery } }) => {
        return messageListQuery(params.realtor_id, params.pageNumber, params.pageSize);
    }
);

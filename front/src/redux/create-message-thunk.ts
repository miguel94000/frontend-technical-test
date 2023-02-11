import { createAsyncThunk } from '@reduxjs/toolkit';
import { MessageExtraArgs } from './store';

export const createMessageThunk = <RESPONSE, PARAMS>(
    actionName: string,
    fn: (
        params: PARAMS,
        extraArgs: { extra: MessageExtraArgs }
    ) => Promise<RESPONSE>
) =>
    createAsyncThunk<RESPONSE, PARAMS, { extra: MessageExtraArgs }>(
        actionName,
        fn
    );

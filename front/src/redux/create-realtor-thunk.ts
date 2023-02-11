import { createAsyncThunk } from '@reduxjs/toolkit';
import { RealtorExtraArgs } from './store';

export const createRealtorThunk = <RESPONSE, PARAMS>(
    actionName: string,
    fn: (
        params: PARAMS,
        extraArgs: { extra: RealtorExtraArgs }
    ) => Promise<RESPONSE>
) =>
    createAsyncThunk<RESPONSE, PARAMS, { extra: RealtorExtraArgs }>(
        actionName,
        fn
    );

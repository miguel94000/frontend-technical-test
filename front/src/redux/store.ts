import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createRequestHttp } from 'src/utils/request-http/request-http';
import { storage } from 'src/utils/storage/local-storage';

/**
 *      Slice
 */
import { messageSlice } from './message/slice';
import { realtorSlice } from './realtor/slice';

/**
 *      Ports
 */
import { iRealtorListQuery } from 'src/app/realtor/core/ports/retrieve-realtor-port';
import { iMessageListQuery } from 'src/app/message/core/ports/retrieve-message-port';

/**
 *      API
 */
import { apiRetrieveRealtor } from 'src/app/realtor/adapters/api/api-retrieve-realtors';
import { apiRetrieveMessageByRealtorId } from 'src/app/message/adapters/api/api-retrieve-messages-by-realtor-id';

export type { RootState, RealtorExtraArgs, MessageExtraArgs, FTTExtraArgs, AppDispatch };
export { createStore, store, useAppDispatch };

const rootReducer = combineReducers({
    [messageSlice.name]: messageSlice.reducer,
    [realtorSlice.name]: realtorSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;
type RealtorExtraArgs = {
    realtorListQuery: iRealtorListQuery;
};
type MessageExtraArgs = {
    messageListQuery: iMessageListQuery;
};
type FTTExtraArgs = RealtorExtraArgs & MessageExtraArgs;

const createStore = ({
    extraArgument,
    preloadedState,
}: {
    extraArgument?: Partial<FTTExtraArgs>;
    preloadedState?: Partial<RootState>;
}) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: { ...extraArgument } as FTTExtraArgs,
                },
                serializableCheck: false,
            }),
        preloadedState,
    });
};

const requestHttp = createRequestHttp({ storage });

const store = createStore({
    extraArgument: {
        realtorListQuery: apiRetrieveRealtor({ requestHttp }),
        messageListQuery: apiRetrieveMessageByRealtorId({ requestHttp }),
    }
})

type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();

import { Realtor } from 'src/app/entities';
import { createRealtorThunk } from 'src/redux/create-realtor-thunk';

export const retrieveRealtors = createRealtorThunk<
    Readonly<{
        realtors: Readonly<Array<Realtor>>;
    }>,
    void
>('/realtors', async (_, { extra: { realtorListQuery } }) => {
    return realtorListQuery();
});

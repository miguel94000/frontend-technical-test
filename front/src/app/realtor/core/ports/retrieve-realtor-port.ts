import { Realtor } from 'src/app/entities';

export { createRealtorListResult };
export type { RealtorListResult, iRealtorListQuery };

const createRealtorListResult = ({
    realtors,
}: {
    realtors: Array<Realtor>;
}) => {
    return Object.freeze({
        realtors: Object.freeze(realtors),
    });
};

type RealtorListResult = ReturnType<typeof createRealtorListResult>;

interface iRealtorListQuery {
    (): Promise<RealtorListResult>;
}

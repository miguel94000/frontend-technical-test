import { RequestHttp } from 'src/utils/request-http/request-http';
import {
    RealtorListResult,
    createRealtorListResult,
    iRealtorListQuery,
} from 'src/app/realtor/core/ports/retrieve-realtor-port';
import { Error } from 'src/app/entities';

export const apiRetrieveRealtor =
    ({ requestHttp }: { requestHttp: RequestHttp }): iRealtorListQuery =>
    async (): Promise<RealtorListResult> => {
        return new Promise((resolve, reject) => {
            requestHttp
                .get('/realtors')
                .then((response: Response) => response.json())
                .then((realtors) => {
                    resolve(createRealtorListResult({ realtors: realtors }));
                })
                .catch((error: Error) => {
                    console.error(error);
                    reject(error);
                });
        });
    };

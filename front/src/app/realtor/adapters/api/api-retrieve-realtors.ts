import { RequestHttp } from 'src/utils/request-http/request-http';
import {
    RealtorListResult,
    createRealtorListResult,
    iRealtorListQuery,
} from 'src/app/realtor/core/ports/retrieve-realtor-port';
import { GetError } from 'src/utils/error-helper/error-helper';

export const apiRetrieveRealtor =
    ({ requestHttp }: { requestHttp: RequestHttp }): iRealtorListQuery =>
    async (): Promise<RealtorListResult> => {
        return new Promise((resolve, reject) => {
            requestHttp
                .get('realtors')
                .then((response: Response) => {
                    const error = GetError(response);
                    if (error) {
                        reject(error);
                        return;
                    } else {
                        return response.json();
                    }
                })
                .then((body) => {
                    if (body) {
                        const realtorsList = body.json();
                        resolve(
                            createRealtorListResult({ realtors: realtorsList })
                        );
                    }
                })
                .catch((error) => {
                    reject(GetError(error));
                });
        });
    };

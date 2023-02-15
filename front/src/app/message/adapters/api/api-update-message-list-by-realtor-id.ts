import { RequestHttp } from 'src/utils/request-http/request-http';
import {
    MessageUpdateListByRealtorIdResult,
    createMessageUpdateListByRealtorIdResult,
    iMessageUpdateListByRealtorIdQuery,
} from 'src/app/message/core/ports/update-message-list-by-realtor-id-port';
import { GetError } from 'src/utils/error-helper/error-helper';

export const apiUpdateMessageListByRealtorId =
    ({ requestHttp }: { requestHttp: RequestHttp }): iMessageUpdateListByRealtorIdQuery =>
    async (
        realtor_id: string,
        pageNumber: number,
        pageSize: number
    ): Promise<MessageUpdateListByRealtorIdResult> => {
        return new Promise((resolve, reject) => {
        console.log('chargement api');

            requestHttp
                .get(
                    `/realtors/${realtor_id}/messages?page=${pageNumber}&page_size=${pageSize}&sort=date:desc`
                )
                .then((response: Response) => response.json())
                .then((messagesList) => {
                    messagesList.forEach((message: any) => {
                        message.realtorId = realtor_id;
                    });
                    resolve(createMessageUpdateListByRealtorIdResult({ messages: messagesList }));
                })
                .catch((error) => {
                    reject(GetError(error));
                });
        });
    };

import { RequestHttp } from 'src/utils/request-http/request-http';
import {
    MessageListResult,
    createMessageListResult,
    iMessageListQuery,
} from 'src/app/message/core/ports/retrieve-message-port';
import { Error } from 'src/app/entities';

export const apiRetrieveMessageByRealtorId =
    ({ requestHttp }: { requestHttp: RequestHttp }): iMessageListQuery =>
    async (
        realtor_id: string,
        pageNumber: number,
        pageSize: number
    ): Promise<MessageListResult> => {
        return new Promise((resolve, reject) => {
            requestHttp
                .get(
                    `/realtors/${realtor_id}/messages?page=${pageNumber}&page_size=${pageSize}&sort=date:desc`
                )
                .then((response: Response) => response.json())
                .then((messagesList) => {
                    messagesList.forEach((message: any) => {
                        message.realtorId = realtor_id;
                    });
                    resolve(createMessageListResult({ messages: messagesList }));
                })
                .catch((error: Error) => {
                    console.error(error);
                    reject(error);
                });
        });
    };

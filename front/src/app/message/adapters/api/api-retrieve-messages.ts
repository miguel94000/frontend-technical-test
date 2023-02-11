import { RequestHttp } from 'src/utils/request-http/request-http';
import {
    MessageListResult,
    createMessageListResult,
    iMessageListQuery,
} from 'src/app/message/core/ports/retrieve-message-port';
import { GetError } from 'src/utils/error-helper/error-helper';

export const apiRetrieveMessage =
    ({ requestHttp }: { requestHttp: RequestHttp }): iMessageListQuery =>
    async (realtor_id: string): Promise<MessageListResult> => {
        return new Promise((resolve, reject) => {
            requestHttp
                .get(`realtor/${realtor_id}/messages`)
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
                        const messagesList = body.json();
                        resolve(
                            createMessageListResult({ messages: messagesList })
                        );
                    }
                })
                .catch((error) => {
                    reject(GetError(error));
                });
        });
    };

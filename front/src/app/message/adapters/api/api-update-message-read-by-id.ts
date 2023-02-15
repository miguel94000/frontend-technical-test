import { RequestHttp } from 'src/utils/request-http/request-http';
import {
    MessageUpdateResult,
    createMessageUpdateResult,
    iMessageUpdateByIdQuery,
} from 'src/app/message/core/ports/update-message-read-by-id-port';
import { GetError } from 'src/utils/error-helper/error-helper';
import { Message } from 'src/app/entities';

export const apiUpdateMessageReadById =
    ({ requestHttp }: { requestHttp: RequestHttp }): iMessageUpdateByIdQuery =>
    async (message: Message): Promise<MessageUpdateResult> => {
        return new Promise((resolve, reject) => {
            // Suppression des propriété non acceptées par le endPoint
            const {realtorId, id, ...newMessage} = message
            requestHttp
                .patch(
                    `/realtors/${realtorId}/messages/${id}`,
                    JSON.stringify({
                        ...newMessage,
                        read: true,
                    })
                )
                .then((response: Response) => response.json())
                .then((message) => {
                    resolve(createMessageUpdateResult({ message: message }));
                })
                .catch((error) => {
                    reject(GetError(error));
                });
        });
    };

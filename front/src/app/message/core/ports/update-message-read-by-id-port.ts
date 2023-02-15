import { Message } from 'src/app/entities';

export { createMessageUpdateResult };
export type { MessageUpdateResult, iMessageUpdateByIdQuery };

const createMessageUpdateResult = ({
    message,
}: {
    message: Message;
}) => {
    return Object.freeze({
        message: Object.freeze(message),
    });
};

type MessageUpdateResult = ReturnType<typeof createMessageUpdateResult>;

interface iMessageUpdateByIdQuery {
    (message: Message ): Promise<MessageUpdateResult>;
}

import { Message } from 'src/app/entities';

export { createMessageListResult };
export type { MessageListResult, iMessageListQuery };

const createMessageListResult = ({
    messages,
}: {
    messages: Array<Message>;
}) => {
    return Object.freeze({
        messages: Object.freeze(messages),
    });
};

type MessageListResult = ReturnType<typeof createMessageListResult>;

interface iMessageListQuery {
    (realtor_id: string, pageNumber: number, pageSize: number ): Promise<MessageListResult>;
}

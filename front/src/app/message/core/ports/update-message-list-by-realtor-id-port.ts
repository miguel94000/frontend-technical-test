import { Message } from 'src/app/entities';

export { createMessageUpdateListByRealtorIdResult };
export type { MessageUpdateListByRealtorIdResult, iMessageUpdateListByRealtorIdQuery };

const createMessageUpdateListByRealtorIdResult = ({
    messages,
}: {
    messages: Array<Message>;
}) => {
    return Object.freeze({
        messages: Object.freeze(messages),
    });
};

type MessageUpdateListByRealtorIdResult = ReturnType<typeof createMessageUpdateListByRealtorIdResult>;

interface iMessageUpdateListByRealtorIdQuery {
    (realtor_id: string, pageNumber: number, pageSize: number ): Promise<MessageUpdateListByRealtorIdResult>;
}

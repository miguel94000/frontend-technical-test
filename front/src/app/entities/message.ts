import { Contact } from './contact';

export enum MessageType {
    EMAIL="email",
    PHONE="phone",
    SMS="sms"
}
export interface Message {
    subject: string;
    body: string;
    read: boolean;
    type: MessageType;
    contact: Contact;
    date: string;
    id: number;
    realtorId: string;
}
import { Contact } from './contact';
export interface Message {
    id: number;
    date: string;
    subject: string;
    body: string;
    type: string;
    read: boolean;
    contact: Contact;
}

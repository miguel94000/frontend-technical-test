import React from 'react'
import { Message, MessageType } from "src/app/entities";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DraftsIcon from '@mui/icons-material/Drafts';
import SmsIcon from '@mui/icons-material/Sms';

export function SelectIcon(message: Message) {
    if(message.read){
        return <DraftsIcon />;
    } else {
        switch (message.type) {
            case MessageType.EMAIL:
                return <MarkunreadIcon />;
            case MessageType.PHONE:
                return <LocalPhoneIcon />;
            case MessageType.SMS:
                return <SmsIcon />;
            default:
                break;
        }
    }

}
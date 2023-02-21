import React from 'react'
import { Message, MessageType } from "src/app/entities";
import {MarkunreadIcon, LocalPhoneIcon, DraftsIcon, SmsIcon } from 'src/ressources/assets/icons'

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
import React from 'react'
import Typography from "@mui/material/Typography";
import {Message, MessageType } from "src/app/entities";
import { custom_typography } from 'src/theme';

export{MaxlengthText, IsPhoneMessage, FormatPhoneMessage, FormatPhoneNumber}


function MaxlengthText(text: string): string{
    return text.length > 71 ? text.substring(0, 71) + "..." : text
}
function FormatPhoneMessage(message: Message): JSX.Element{
    const classes = {
        custom_typography: custom_typography
    }

    if(IsPhoneMessage(message.type)){
        if(message.contact.firstname !== ""){
            return <div style={{display: 'flex'}}>
                        <Typography style={message.read ? classes.custom_typography.no_bold : classes.custom_typography.bold}>
                            {
                                message.contact.firstname + ' ' +
                                message.contact.lastname + ' '
                            }
                            <span style={classes.custom_typography.no_bold}>{'('+message.contact.phone+')'}</span>
                        </Typography>
                    </div>
        } else {
            return <Typography style={message.read ? classes.custom_typography.no_bold : classes.custom_typography.bold}>
            {message.contact.phone}
        </Typography>
        }
    }

    return <Typography style={message.read ? classes.custom_typography.no_bold : classes.custom_typography.bold}>
    {message.contact.firstname +
        ' ' +
        message.contact.lastname}
</Typography>

}
function IsPhoneMessage(messageType: MessageType): boolean{
    return messageType === MessageType.PHONE ? true : false
}
function FormatPhoneNumber(phoneNoFormated: string): string {
    return phoneNoFormated.replace(/(.{2})/g, '$1 ');
    }

import React from 'react'
import Typography from "@mui/material/Typography";
import {Message, MessageType } from "src/app/entities";
import { custom_typography } from 'src/theme';

export{MaxlengthText, IsPhoneMessage, FormatPhoneMessage}


function MaxlengthText(text: string): string{
    return text.length > 71 ? text.substring(0, 71) + "..." : text
}

function FormatPhoneMessage(message: Message): JSX.Element{
    const classes = {
        custom_typography: custom_typography
    }

    if(IsPhoneMessage(message.type)){
        if(message.contact.firstname !== ""){
            return <div style={{display: 'flex'}}><Typography style={classes.custom_typography}>
            {message.contact.firstname +
                ' ' +
                message.contact.lastname}
                
        </Typography>
        <Typography>
        {'('+message.contact.phone+')'}
        </Typography>
            
        </div>
        } else {
            return <Typography style={classes.custom_typography}>
            {message.contact.phone}
        </Typography>
        }
    }

    return <Typography style={classes.custom_typography}>
    {message.contact.firstname +
        ' ' +
        message.contact.lastname}
</Typography>

}

function IsPhoneMessage(messageType: MessageType): boolean{
    return messageType === MessageType.PHONE ? true : false
}
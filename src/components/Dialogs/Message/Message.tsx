import React from 'react';
import s from './../Dialogs.module.css';
import {MessageType} from '../../../redux/state';


const Message = (props: {message: string}) => {
    return <div className={s.dialog}>{props.message}</div>
}

export default Message;
import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogPageType, DialogType, MessageType} from '../../redux/state';

type DialogsPropsType ={
    state: DialogPageType
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

//Зьмiтрыч избавляется от рефов, типизация 31-34 25.55

    let newMessagesElement = React.createRef<any>();

    let addMessage = () => {
        let text = newMessagesElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessagesElement}></textarea>
            </div>
            <div>
                <button onClick={ addMessage }>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs;
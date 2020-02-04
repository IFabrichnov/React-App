import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { AddMessageFormRedux } from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElemenst = state.messages.map(m => <Message message={m.message} />);

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (props.isAuth == false) return <Redirect to={'/login'} />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                    {messagesElemenst}
            <div className={classes.inputArea}>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
            </div>
        </div>
    )
}


export default Dialogs;
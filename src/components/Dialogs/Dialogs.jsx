import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    
    let messagesElemenst = state.messages.map( m => <Message message={m.message} />);

    let newMessageBody = state.newMessageBody;

    let onMessageClick = () => {
       props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body= e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>
                    { messagesElemenst }
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                <button onClick={onMessageClick}>Add Post</button>
            </div>
        </div>
    )
}

export default Dialogs;
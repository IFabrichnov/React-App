import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../commons/FormsControls/FormsControns'

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody' placeholder='Enter your message' />
            </div>
            <button>Add Post</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);

import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators';
import {Textarea} from '../../commons/FormsControls/FormsControns'
import Icon from '@material-ui/core/Icon';
import Button from "@material-ui/core/Button";
import classes from '../Dialogs.module.css';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody'
                       placeholder='Enter your message'/>
            </div>
            <Button
                onClick={props.handleSubmit}
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

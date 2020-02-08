import React from 'react';
import classes from './FormsControns.module.css';
import {Field} from "redux-form";
import {required} from "../../../utils/validators";
import {TextField} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : " ")}>
            <div>
                {props.children}
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <TextField id="outlined-basic" label="Message" variant="outlined"{...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const InputLogin = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <TextField className={classes.inputWidth} id="standard-basic" label="Login" {...input} {...restProps} /> </FormControl>
}

export const InputPassword = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <TextField className={classes.inputWidth} id="standard-basic" label="Password" {...input} {...restProps} /> </FormControl>
}

export const InputCheckbox = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <Checkbox
        defaultChecked
        value="secondary"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }} {...input} {...restProps} /> </FormControl>
}


export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder} name={name}
                   validate={validators}
                   component={component}
                   {...props}
            /> {text}
        </div>
    )
}
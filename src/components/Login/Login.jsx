import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../FormsControls/FormsControns';
import { required } from '../../utils/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'Login'} 
                validate={[required]}
                component={Input}></Field>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} 
                validate={[required]}
                component={Input}></Field>
            </div>
            <div>
                <Field  name={'rememberMe'} component={Input} type={'checkbox'} /> remeber me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }   
    
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;
import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'Login'} component={'input'}></Field>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}></Field>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remeber me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)


const Login = (props) => {
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm />
    </div>
}

export default Login;
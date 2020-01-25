import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {createField, Input} from '../commons/FormsControls/FormsControns';
import { required } from '../../utils/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import classes from '../commons/FormsControls/FormsControns.module.css';

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>

                {createField('email', 'email', [required], Input)}
                {createField('Password', 'password', [required], Input, {type:'password'})}
                {createField(null, 'rememberMe', [], Input, {type:'checkbox'}, 'remember me')}

          { error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }   
    
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {createField, Input, InputCheckbox, InputLogin, InputPassword} from '../commons/FormsControls/FormsControns';
import { required } from '../../utils/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import classes from '../commons/FormsControls/FormsControns.module.css';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const LoginForm = ({handleSubmit,error, captchaUrl}) => {
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                        <LockOutlinedIcon  />
                </Avatar>
                <Typography className={classes.alignCenter} component="h1" variant="h5">
                    Sign up
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            {createField('email', 'email', [required], InputLogin)}
                        </Grid>
                        <Grid item xs={12}>
                            {createField('Password', 'password', [required], InputPassword, {type:'password'})}
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.rememberMe}>
                                {createField(null, 'rememberMe', [], InputCheckbox, {type:'checkbox'}, '')}
                                <Typography className={classes.align}>
                                    Remember me
                                </Typography>
                            </div>

                        </Grid>
                    </Grid>
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.signUpButton}
                    >
                        Sign Up
                    </Button>
                    { captchaUrl && <img src={captchaUrl} />}
                    { captchaUrl && createField('symbols from img', 'captcha', [required], Input, {})}
                    { error && <div className={classes.formSummaryError}>
                        {error}
                    </div>}
                </form>
            </div>
        </Container>

    )
}


const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }   
    
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div className={classes.loginBlock}>
        <LoginReduxForm  onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
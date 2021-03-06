import React from 'react';
import {createField, Input, Textarea} from "../../commons/FormsControls/FormsControns";
import {reduxForm} from "redux-form";
import classes from './ProfileInfo.module.css';
import Button from "@material-ui/core/Button";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Save
            </Button>
        </div>
        { error && <div className={classes.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name:</b> {createField("Full name", "full name", [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My Professional skills:</b>
            {createField("My Professional skills", "lookingForAJobDescription", [], Input)}
        </div>
        <div>
            <b>About me:</b>
            {createField("About me", "aboutMe", [], Input)}
        </div>
        <div>
            <b>Contacts:</b> { Object.keys(profile.contacts).map(key => {
            return <div key={key} className={classes.contact}>
                <b>{key}:</b>{createField(key, "contacts." + key, [], Input)}
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
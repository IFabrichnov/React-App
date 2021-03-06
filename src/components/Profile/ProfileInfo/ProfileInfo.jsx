import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../commons/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from "./ProfileDataForm";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
      props.saveProfile(formData).then(
          () => {
              setEditMode(false);
          }
      );
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto}/>
                <div className={classes.buttonProfile}>
                {props.isOwner &&

                <input  type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                <div className={classes.buttonEdit}>
                {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div>
            <Button
                onClick={props.goToEditMode}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Edit
            </Button>
        </div>}
        <div>
            <b>Full name:</b> {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My Professional skills:</b> {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;
import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../commons/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = (props) => {
  if ( !props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
          props.savePhoto(e.target.files[0]);
      }
  }

  return (
    <div>
      {/* <div>
        <img src='https://static.make.ua/catalog/11/sea-0000186__1364763882__615.jpg'></img>
      </div> */}
      <div className={classes.descriptionBlock}>
       <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} />
          {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
       <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;
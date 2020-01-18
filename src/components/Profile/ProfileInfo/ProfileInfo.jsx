import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if ( !props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
      {/* <div>
        <img src='https://static.make.ua/catalog/11/sea-0000186__1364763882__615.jpg'></img>
      </div> */}
      <div className={classes.descriptionBlock}>
       <img src={props.profile.photos.large} />
       <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;
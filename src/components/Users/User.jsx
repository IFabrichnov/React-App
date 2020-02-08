import React from 'react';
import usersPhoto from '../../assets/images/user.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import Button from "@material-ui/core/Button";


let User = ({user, followingInProgress,unfollow,follow}) => {
    return (
        <div className={styles.userProfile}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : usersPhoto} className={styles.usersPhoto} />
                        </NavLink>
                    </div>
                    <div className={styles.buttonFollow}>
                        {user.followed
                            ?
                            <Button variant="outlined" color="secondary" disabled={followingInProgress.some( id => id === user.id)}
                                    onClick={() => { unfollow(user.id)
                                    }}>UnFollow</Button>

                            : <Button variant="outlined" color="primary" disabled={followingInProgress.some( id => id === user.id)}
                                      onClick={() => { follow(user.id)
                                      }}>Follow</Button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
}


export default User;
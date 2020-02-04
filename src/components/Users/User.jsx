import React from 'react';
import usersPhoto from '../../assets/images/user.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';


let User = ({user, followingInProgress,unfollow,follow}) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : usersPhoto} className={styles.usersPhoto} />
                        </NavLink>
                    </div>
                    <div className={styles.buttonFollow}>
                        {user.followed
                            ? <button disabled={followingInProgress.some( id => id === user.id)}
                            onClick={() => { unfollow(user.id)
                            }}>UnFollow</button>
                            : <button disabled={followingInProgress.some( id => id === user.id)}
                             onClick={() => { follow(user.id)
                            }}>Follow</button>}
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
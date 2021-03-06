import React from 'react';
import Paginator from '../commons/Paginator/Paginator';
import User from "./User";
import classes from './users.module.css';


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div className={classes.userBlock}>
            {
                users.map(u => <User user={u} key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}

                    />
                )
            }
        </div>
    </div>
}


export default Users;
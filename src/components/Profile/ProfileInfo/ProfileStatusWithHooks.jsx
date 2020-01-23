import React, { useState, useEffect } from 'react';
import classes from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    
    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditeMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
     }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={ activateEditeMode }>{props.status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value={status} onChange={onStatusChange}  onBlur={ deactivateEditMode} autoFocus={true} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
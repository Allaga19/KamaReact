import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejIPVMx_ibsj-NFuC8cf4epUd8U0oXljVlrRUhj9_58RXg-GYHZgD3yUAE53MpDt6a78&usqp=CAU" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};
export default ProfileInfo;
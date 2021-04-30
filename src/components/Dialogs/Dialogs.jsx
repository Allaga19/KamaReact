import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
  
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
// и исходный массив объектов
    let dialogs = [
        {id: 1, name: 'Алла'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Виктор'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] 
    //  массив jsx элементов 
    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messages.map( message =>  <Message message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;
import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    // console.log(props.message);
    // console.log(props.like);
    return (
        <div className={classes.item}>
            <img className="cont_img" src="https://i.ytimg.com/vi/fbHG-FGLz_Y/maxresdefault.jpg" alt=""/>
            { props.message }
            <div>
                { props.span }
                <span>like</span> { props.LikeCount }
            </div>
        </div>
    )
};
export default Post;
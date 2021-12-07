import React from 'react';
import s from './Post.module.css';


const Post = (props:any) => {
    return (
        <div className={s.item}>
            <img src="https://informnapalm.org/by/wp-content/uploads/sites/6/2019/01/zianon.jpg"/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;
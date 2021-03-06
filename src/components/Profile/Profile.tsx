import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from '../../redux/state';

import {addPost} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (text: string)=>void
}



const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;
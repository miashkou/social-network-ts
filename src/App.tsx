import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
    addPost: ()=>void
    updateNewPostText: (text:string)=>void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>

            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs"
                           element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile"
                           element={<Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}
                           />}
                    />
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
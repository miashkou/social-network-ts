import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import {addPost, RootStateType, updateNewPostText} from './redux/state'
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
        , document.getElementById('root'));
}




// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

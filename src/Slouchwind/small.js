import React from "react";

export function ProfilePic(props) {
    return (
        <div id="user">
            <img src={props.src} className="userImg" />
        </div>
    );
}

export function Card(props) {
    return (
        <div className="card">
            <img src={props.src} />
            <p>{props.children}</p>
        </div>
    );
}
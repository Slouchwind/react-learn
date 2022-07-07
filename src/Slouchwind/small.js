import React from "react";

export function ProfilePic(props) {
    return (
        <div id="user">
            <img src={props.src} className="userImg" />
        </div>
    );
}
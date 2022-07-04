import React from "react";

export function Icon(props) {
    return (
        <a href="./">
            <div id="icon">
                <img src={props.src} />
            </div>
        </a>
    );
}

export function LinkBlock(props) {
    return <div><a href={props.href}>{props.children}</a></div>;
}
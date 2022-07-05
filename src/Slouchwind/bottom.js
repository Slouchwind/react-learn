import React from "react";

export function Link(props) {
    return (<div id="A">{props.children}</div>);
}

export class Hitokoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    componentDidMount() {
        fetch("https://v1.hitokoto.cn/?c=i&encode=json")
            .then(res => res.json())
            .then(r => this.setState({ text: r.hitokoto }));
    }

    render() {
        return (<p>{this.state.text}</p>);
    }
}
import React from "react";

//root操作
var root = {
    value: function (name) {
        return document.documentElement.style.getPropertyValue(name.trim());
    },
    replace: function (nameAndValue) {
        var info = nameAndValue.split(":");
        document.documentElement.style.setProperty(info[0].trim(), info[1].trim());
    }
}

export function Link(props) {
    return <div id="A">{props.children}</div>;
}

export class Hitokoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
        fetch("https://v1.hitokoto.cn/?c=i&encode=json")
            .then(r => r.json())
            .then(res => {
                this.setState({ text: res.hitokoto });
                console.log("\n%c" + res.hitokoto + "\n%c    ————" + res.from + "\n", "color:" + root.value("--main") + ";margin:5px 0", "margin:5px 0");
            });
    }

    render() {
        return (<p>{this.state.text}</p>);
    }
}
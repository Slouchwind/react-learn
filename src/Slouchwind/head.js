import React from "react";

var getTime = {
    time: function (date) {
        let h = date.getHours();
        if (h < 10) { h = "0" + h; }
        let m = date.getMinutes();
        if (m < 10) { m = "0" + m; }
        let s = date.getSeconds();
        if (s < 10) { s = "0" + s; }
        return h + ":" + m + ":" + s;
    },
    date: function (date) {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        if (m < 10) { m = "0" + m; }
        let d = date.getDate();
        if (d < 10) { d = "0" + d; }
        return y + "年" + m + "月" + d + "日";
    }
}

var root = {
    value: function (name) {
        return document.documentElement.style.getPropertyValue(name.trim());
    },
    replace: function (nameAndValue) {
        var info = nameAndValue.split(":");
        document.documentElement.style.setProperty(info[0].trim(), info[1].trim());
    }
}

function turnMainColor(code) {
    if (code == 0) {
        root.replace("--main: #719fe3");
        root.replace("--main-hover: #96bbf1");
        root.replace("--main-active: #4c7dd6");
        root.replace("--main-bg: #ffffff");
        root.replace("--main-color: #000000");
        root.replace("--right-bg: #ffffffab");
        root.replace("--right-hover: #0000001b");
        root.replace("--right-shadow: #00000057");
        root.replace("--scroll-bg: #d1d1d1");
        root.replace("--scroll-line-bg: #929292");
        root.replace("--head-bg: #ffffff12");
        root.replace("--head-shadow: #00000057");
        root.replace("--card-bg: #ffffff");
        root.replace("--card-shadow: #989898");
    }
    if (code == 1) {
        root.replace("--main: #719fe3");
        root.replace("--main-hover: #96bbf1");
        root.replace("--main-active: #4c7dd6");
        root.replace("--main-bg: #1c1c1c");
        root.replace("--main-color: #ffffff");
        root.replace("--right-bg: #2525258f");
        root.replace("--right-hover: #00000040");
        root.replace("--right-shadow: #000000b3");
        root.replace("--scroll-bg: #2b2b2b");
        root.replace("--scroll-line-bg: #575757");
        root.replace("--head-bg: #1c1c1c40");
        root.replace("--head-shadow: #111111cc");
        root.replace("--card-bg: #292929");
        root.replace("--card-shadow: #111111");
    }
}

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

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.setState({ date: new Date() });
        }, 0);
    }

    UNSAFE_componentWillMount() {
        clearInterval(this.timeID);
    }

    render() {
        return (
            <div id="clock">
                <p>{getTime.time(this.state.date)}</p>
                <p>{getTime.date(this.state.date)}</p>
            </div>
        );
    }
}

export class ColorMode extends React.Component {
    constructor(props) {
        super(props);
        this.mode = {
            src: [
                "https://m.xiguacity.cn/post/6042be99fef5f8753d6c03c1/b60fa262-cfc1-406d-814c-2ffaf63baaf0.svg",//dark
                "https://m.xiguacity.cn/post/6042be99fef5f8753d6c03c1/5c2cac44-609e-490e-ade0-78db98454575.svg",//light
                "https://m.xiguacity.cn/post/6042be99fef5f8753d6c03c1/94cb39ac-ef09-4ef4-ac35-c7f9a225699b.svg"//system
            ],
            title: [
                "切换到「浅色主题」",
                "切换到「跟随系统」",
                "切换到「深色主题」"
            ],
        };
        this.state = { mode: 0 };
    }

    turnColorMode() {
        this.setState({ mode: (this.state.mode + 1) % 3 });
        turnMainColor(
            this.state.mode == 3 ?
                window.matchMedia("(prefers-color-scheme: dark)").matches ?
                    0
                    : 1
                : this.state.mode
        );
    }

    render() {
        return (
            <div>
                <img
                    id="color"
                    src={this.mode.src[this.state.mode]}
                    title={this.mode.title[this.state.mode]}
                    onClick={() => { this.turnColorMode() }}
                />
            </div>
        );
    }
}
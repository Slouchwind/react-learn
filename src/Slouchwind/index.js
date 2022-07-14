import React from "react";
import { Icon, LinkBlock, Clock, ColorMode } from "./head";
import { Hitokoto, Link } from "./bottom";
import { RightMouse } from "./small";
import "./index.css";

const icon = "https://m.xiguacity.cn/post/6042be99fef5f8753d6c03c1/c3750ecf-94c1-4d3f-9f3a-4bf2834fd779.svg";

export function Head() {
    return (
        <>
            <div className="head">
                <div id="left">
                    <Icon src={icon} alt="icon" />
                    <LinkBlock href="./editor.html">项目</LinkBlock>
                </div>
                <div className="right">
                    <Clock />
                    <ColorMode />
                </div>
            </div>
            <div id="top"></div>
        </>
    );
}

export function Bottom() {
    return (
        <div id="bottom">
            <Link>
                <a href="https://qixie.vercel.app" target="_blank" rel="noreferrer">齐谐者</a>
                <a href="./about.html">关于</a>
            </Link>
            <Hitokoto />
        </div>
    );
}

//返回时间/日期
var getTime = {
    time: () => {
        let date = new Date();
        let h = date.getHours();
        if (h < 10) { h = "0" + h; }
        let m = date.getMinutes();
        if (m < 10) { m = "0" + m; }
        let s = date.getSeconds();
        if (s < 10) { s = "0" + s; }
        return h + ":" + m + ":" + s;
    },
    date: () => {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        if (m < 10) { m = "0" + m; }
        let d = date.getDate();
        if (d < 10) { d = "0" + d; }
        return y + "年" + m + "月" + d + "日";
    }
}

//运营了几天
function runDate() {
    const firstDay = new Date();
    firstDay.setFullYear(2022, 3, 15);
    var nowDay = new Date();
    return Math.round((nowDay - firstDay) / (1 * 24 * 60 * 60 * 1000));
}

//root操作
var root = {
    value: (name) => {
        return document.documentElement.style.getPropertyValue(name.trim());
    },
    replace: (nameAndValue) => {
        var info = nameAndValue.split(":");
        document.documentElement.style.setProperty(info[0].trim(), info[1].trim());
    }
}

export class Basic extends React.Component {
    componentDidMount() {
        this.logger();
    }

    logger() {
        let basicCss = "margin:5px 0";
        let colorCss = "color:" + root.value("--main") + ";margin:5px 0";
        console.log(
            "\n%c感谢您的访问♪(･ω･)ﾉ" +
            `${"\n"}%cSlouchwind Web  %c${document.getElementsByTagName("title")[0].innerHTML}` +
            `${"\n"}现在是 ${getTime.date()} ${getTime.time()}` +
            `${"\n"}春鹄的个人网站%c 已上线 ${runDate()} 天${"\n"}`,
            basicCss, colorCss, basicCss, colorCss
        );
    }

    render() {
        return (
            <>
                <Head />
                {this.props.children}
                <Bottom />
                <RightMouse />
            </>
        );
    }
}

export function Repeat(props = { index: 1 }) {
    let repeat = [];
    for (let i = 0; i < props.index; i++) {
        repeat.push(props.children);
    }
    return repeat;
}
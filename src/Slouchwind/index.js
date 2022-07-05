import React from "react";
import { Icon, LinkBlock, Clock, ColorMode } from "./head";
import { Hitokoto, Link } from "./bottom";
import "./index.css";

const icon = "https://m.xiguacity.cn/post/6042be99fef5f8753d6c03c1/c3750ecf-94c1-4d3f-9f3a-4bf2834fd779.svg";

export class Head extends React.Component {
    render() {
        return (
            <>
                <div className="head">
                    <div id="left">
                        <Icon src={icon} />
                        <LinkBlock href="./editor">项目</LinkBlock>
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
}

export class Bottom extends React.Component {
    render() {
        return (
            <div id="bottom">
                <Link>
                    <a href="https://qixie.rth1.me/" target="_blank">齐谐者</a>
                    <a href="./about">关于</a>
                </Link>
                <Hitokoto />
            </div>
        );
    }
}
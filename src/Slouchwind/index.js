import React from "react";
import { Icon, LinkBlock } from "./small";
import "./index.css";

export class Head extends React.Component {
    render() {
        return (
            <div className="head">
                <div id="left">
                    <Icon src="https://m.xiguacity.cn/post/6042be99fef5f8753d6c03c1/c3750ecf-94c1-4d3f-9f3a-4bf2834fd779.svg" />
                    <LinkBlock href="./editor">项目</LinkBlock>
                </div>
            </div>
        )
    }
}
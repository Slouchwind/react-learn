import React from "react";
import ReactDOM from "react-dom/client";
import { Basic, Repeat } from ".";
import { Card, ProfilePic } from "./small";
import "../index.css";

const index =
    <Basic>
        <h3>清晨花蕊，静满泪水。</h3>
        <h3>是起是坠，真情清脆。</h3>
        <Repeat index={52}>
            <p>测试</p>
        </Repeat>
    </Basic>

const about =
    <Basic>
        <p>感谢您来访春鹄的个人网站！</p>
        <p>这是一位前端初学者的第一个网站(*╹▽╹*)</p>
        <p>这是我的头像 ↓</p>
        <ProfilePic src="https://pic.lienav.com/i/2022/05/10/627a4567b4b27.jpg" />
    </Basic>

const editor =
    <Basic>
        <div id="editor">
            <Card src="https://pic.lienav.com/i/2022/05/15/62809e2c8b010.png">春鹄</Card>
            <Card src="https://pic.lienav.com/i/2022/04/18/625d6ff5c9e3e.jpeg">齐谐者</Card>
            <Card src="https://lun-eu.icons8.com/a/GC4SDZlvKU6WDwps8BVZtg/qLLw7hzbekK1uf3lMHlTSg/Artboard.png">更多</Card>
        </div>
    </Basic>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(index);
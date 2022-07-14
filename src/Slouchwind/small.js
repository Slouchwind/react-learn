import React from "react";

export function ProfilePic(props) {
    return (
        <div id="user">
            <img src={props.src} className="userImg" alt="作者头像" />
        </div>
    );
}

export function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt="卡片" />
            <p>{props.children}</p>
        </div>
    );
}

//返回选中的文字，将换行符改为空格
function mouseSelect(replace = " ") {
    return window.getSelection().toString().replace(/\n/g, replace);
}

//复制text
function textCopy(text) {
    navigator.clipboard.writeText(text).then(
        function () {
            /*复制成功*/
        }, function () {
            /*复制失败*/
        }
    );
}

//返回文字宽度
function getTextWidth(text, font) {
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var textWidth = context.measureText(text);
    return textWidth.width;
}

export class RightMouse extends React.Component {
    componentDidMount() {
        document.oncontextmenu = this.rightMouse;
        document.onclick = () => document.getElementsByClassName("rightMouse")[0].style.display = "none";
    }

    liOnclick(i) {
        switch (i) {
            case 0:
                textCopy(mouseSelect("\n"));
                break;
            case 1:
                window.open(`https://www.baidu.com/s?word=${mouseSelect()}`, "_blank");
                break;
            case 2:
                textCopy(window.location.href);
                break;
            case 3:
                window.location.reload();
                break;
            default:
                return;
        }
    }

    rightMouse() {
        var ul = document.getElementsByClassName("rightMouse")[0];
        ul.onselectstart = () => false;
        //更改右键菜单宽度
        let search = `搜索"${mouseSelect()}"`;
        if (getTextWidth(search, "12px") > 64 && window.getSelection().toString() !== "") {
            ul.style.width = getTextWidth(search, "12px") < 300 ?
                getTextWidth(search, "12px") + 72 + "px"
                : "372px";
        }
        else ul.style.width = "136px";
        var lis = document.querySelectorAll("ul.rightMouse li");
        //没有选中文字时隐藏复制&搜索选项
        if (window.getSelection().toString() !== "") {
            lis[0].style.display = "list-item";
            lis[1].style.display = "list-item";
            lis[1].innerText = search;
        }
        else {
            lis[0].style.display = "none";
            lis[1].style.display = "none";
        }
        let e = window.event;
        //去除原生右键菜单
        e.preventDefault ? e.preventDefault() : (e = false);
        //获取右键坐标
        let x = e.clientX;
        let y = e.clientY;
        //显示右键菜单
        ul.style.display = "block";
        ul.style.left = x + "px";
        ul.style.top = y + "px";
    }

    render() {
        var liText = ["复制", "搜索", "复制当前页面链接", "重新加载"];
        var liJSX = [];
        liText.map(
            // eslint-disable-next-line
            (value, index) => {
                liJSX.push(
                    <li
                        key={index}
                        onClick={() => { this.liOnclick(index) }}
                    >{value}</li>
                );
            }
        );
        return <ul className="rightMouse">{liJSX}</ul>;
    }
}
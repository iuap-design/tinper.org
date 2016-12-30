var clickSet = {
    data: {
        key: {
            title:"t"
        },
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: beforeClick,
        onClick: onClick
    }
};

var clickNodes =[
    { id:1, pId:0, name:"普通的父节点", t:"我很普通，随便点我吧", open:true},
    { id:11, pId:1, name:"叶子节点 - 1", t:"我很普通，随便点我吧"},
    { id:12, pId:1, name:"叶子节点 - 2", t:"我很普通，随便点我吧"},
    { id:13, pId:1, name:"叶子节点 - 3", t:"我很普通，随便点我吧"}
];

var log, className = "dark";
function beforeClick(treeId, treeNode, clickFlag) {
    className = (className === "dark" ? "":"dark");
    alert("[ "+getTime()+" beforeClick ] " + treeNode.name );
    return (treeNode.click != false);
}
function onClick(event, treeId, treeNode, clickFlag) {
    alert("[ "+getTime()+" onClick ] clickFlag = " + clickFlag + " (" + (clickFlag===1 ? "普通选中": (clickFlag===0 ? "<b>取消选中</b>" : "<b>追加选中</b>")) + ")");
}
function getTime() {
    var now= new Date(),
    h=now.getHours(),
    m=now.getMinutes(),
    s=now.getSeconds();
    return (h+":"+m+":"+s);
}

$(document).ready(function(){
    $.fn.zTree.init($("#clickTree"), clickSet, clickNodes);
});

import { Button } from 'tinper-bee';
function demo2 () {
    return (
        <div className="demo-button">
                <Button type="primary">default 主色按钮</Button>
                <Button type="accent">辅色按钮</Button>
                <Button disabled>不可点击</Button>
                <Button type="success">辅色按钮</Button>
                <Button type="info">辅色按钮</Button>
                <Button type="warning">辅色按钮</Button>
                <Button type="danger">辅色按钮</Button>
            </div>
    );
}


ReactDOM.render(demo2(), document.getElementById('neouiReactDemo2'));

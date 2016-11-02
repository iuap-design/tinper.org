import { Button } from 'tinper-bee';
function demo1 () {
    return (
        <div className="demo-button">
            <Button size="sm" type="primary">小按钮</Button>
            <Button type="primary">默认</Button>
            <Button size="lg" type="primary">大按钮</Button>
            <Button size="xg" type="primary">巨大按钮</Button>
    </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('neouiReactDemo1'));

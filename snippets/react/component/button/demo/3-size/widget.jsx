import { Button } from 'tinper-bee';
function demo3 () {
    return (
        <div className="demo-button">
            <Button shape="block" type="primary">块状按钮</Button>
            <Button shape="round" type="primary">圆形边按钮</Button>
            <Button shape="squared" type="primary">方形按钮</Button>
            <Button shape="floating" type="primary">圆形按钮</Button>
            <Button shape="pillRight" type="primary">右半圆按钮</Button>
            <Button shape="pillLeft" type="primary">左半圆按钮</Button>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('neouiReactDemo3'));

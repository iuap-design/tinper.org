import { Switch } from 'tinper-bee';

function changeHandle () {
    alert('点我点我点我~');
}

function demo3 () {
    return (
        <div>
            <Switch onChangeHandler = {changeHandle} checkedChildren={'开'} unCheckedChildren={'关'} />
            <Switch checked={true} onChangeHandler = {changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />
        </div>
    )
}

ReactDOM.render(demo3(), document.getElementById('beeSwitchDemo3'));

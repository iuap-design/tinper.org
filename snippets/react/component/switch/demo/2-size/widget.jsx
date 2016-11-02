import { Switch } from 'tinper-bee';

function demo2 () {
    return (
        <div>
            <Switch checked={true} size='small' />
            <Switch checked={true} />
        </div>
    )
}

ReactDOM.render(demo2(), document.getElementById('beeSwitchDemo2'));

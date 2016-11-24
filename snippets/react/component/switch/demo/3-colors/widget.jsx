import { Switch } from 'tinper-bee';

function demo3 () {
    return (
        <div>
            <Switch colors="primary" checked={true} />
            <Switch colors="success" checked={true} />
            <Switch colors="info" checked={true} />
            <Switch colors="danger" checked={true} />
            <Switch colors="dark" checked={true} />
        </div>
    )
}

ReactDOM.render(demo3(), document.getElementById('beeSwitchDemo3'));

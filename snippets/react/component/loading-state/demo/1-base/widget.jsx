import { Loadingstate } from 'tinper-bee';

function demo1 () {
    return (
        <div className="demo-loading-state">
        	<Loadingstate>confirm</Loadingstate>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactLoadingstateDemo1'));


import { Loadingstate } from 'tinper-bee';

function demo2 () {
    return (
        <div className="demo-loading-state">
            <Loadingstate loadingText="waiting..." loadingTime="4000">confirm</Loadingstate>
        </div>
    );
}


ReactDOM.render(demo2(), document.getElementById('ReactLoadingstateDemo2'));
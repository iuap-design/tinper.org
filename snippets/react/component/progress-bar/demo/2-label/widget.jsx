import { ProgressBar } from 'tinper-bee';

function demo2() {
    return( 
    	<div className="demo-progress-bar">
    		<ProgressBar now = {now} label = {`${now}%`} />
    	</div>
	)
}



ReactDOM.render(demo2(), document.getElementById('ReactProgressBarDemo2'));



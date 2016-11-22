import { ProgressBar } from 'tinper-bee';


function demo4() {
    return( 
    	<div className="demo-progress-bar">
    		<ProgressBar striped now = {now}/> 
    	</div>
	)
}



ReactDOM.render(demo4(), document.getElementById('ReactProgressBarDemo4'));
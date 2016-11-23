import { ProgressBar } from 'tinper-bee';


function demo3() {
    return( 
    	<div className="demo-progress-bar">
    		<ProgressBar active now = {now}/> 
    	</div>
	)
}



ReactDOM.render(demo3(), document.getElementById('ReactProgressBarDemo3'));
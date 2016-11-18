import { ProgressBar } from 'tinper-bee';


function demo6() {
    return( 
    	<div className="demo-progress-bar">
    		<ProgressBar>
				<ProgressBar colors="success" now = {10} />
				<ProgressBar striped now = {20} />
				<ProgressBar active colors="warning" now = {30} />
			</ProgressBar>
    	</div>
	)
}



ReactDOM.render(demo6(), document.getElementById('ReactProgressBarDemo6'));
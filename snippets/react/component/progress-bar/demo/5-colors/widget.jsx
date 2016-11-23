import { ProgressBar } from 'tinper-bee';


function demo5() {
    return( 
    	<div className="demo-progress-bar">
    		<ProgressBar colors="info" now = {20} />
			<ProgressBar colors="danger" now = {50} />
			<ProgressBar colors="success" now = {40} />
			<ProgressBar colors="warning" now = {30} />
    	</div>
	)
}



ReactDOM.render(demo5(), document.getElementById('ReactProgressBarDemo5'));
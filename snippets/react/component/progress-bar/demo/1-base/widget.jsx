import { ProgressBar } from 'tinper-bee';

const now = 60;
function demo1() {
    return( 
    	<ProgressBar now = {now} />
	)
}



ReactDOM.render(demo1(), document.getElementById('ReactProgressBarDemo1'));


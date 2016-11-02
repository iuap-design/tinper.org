import { FormControl } from 'tinper-bee'

function demo1 () {
    return (
        <div className="demo-form-control">
        	<FormControl placeholder="Enter text"/>			
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactFormControlDemo1'));

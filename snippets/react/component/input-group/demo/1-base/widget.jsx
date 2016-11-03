import { InputGroup } from 'tinper-bee';
import { FormControl } from 'tinper-bee'

function demo1 () {
    return (
        <div className="demo-input-group">
        	<InputGroup>
        		<FormControl />
        	</InputGroup>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactInputGroupDemo1'));

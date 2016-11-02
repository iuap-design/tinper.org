import { FormGroup } from 'tinper-bee';
import { FormControl } from 'tinper-bee'
function demo1 () {
    return (
        <div className="demo-form-group">
            <FormGroup>
                <FormControl />
            </FormGroup>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactFormGroupDemo1'));
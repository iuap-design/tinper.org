import { FormGroup } from 'tinper-bee';
import { InputGroup } from 'tinper-bee';
import { FormControl } from 'tinper-bee';
import { ControlLabel } from 'tinper-bee';

function demo3 () {
    return (
        <div className="demo-form-group">
            <FormGroup validationState="error"> 
                <ControlLabel>组合:</ControlLabel>
                <InputGroup>
                    <InputGroup.Addon>.00</InputGroup.Addon>
                    <FormControl type="text" />
                    <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
            </FormGroup>             
        </div>
    );
}


ReactDOM.render(demo3(), document.getElementById('ReactFormGroupDemo3'));

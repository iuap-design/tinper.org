import { FormGroup } from 'tinper-bee';
import { FormControl } from 'tinper-bee';
import { InputGroup } from 'tinper-bee';

function demo2 () {
    return (
        <div className="demo-input-group">
            <FormGroup>
                <InputGroup>
                    <InputGroup.Addon>.00</InputGroup.Addon>
                    <FormControl type="text" />
                    <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>

                <InputGroup>
                    <InputGroup.Addon>.00</InputGroup.Addon>
                    <FormControl type="text" />
                </InputGroup>

                <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
            </FormGroup>        
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactInputGroupDemo2'));

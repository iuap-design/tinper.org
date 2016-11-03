import { FormGroup } from 'tinper-bee';
import { FormControl } from 'tinper-bee';
import { InputGroup } from 'tinper-bee';

function demo3 () {
    return (
        <div className="demo-input-group">
            <FormGroup>
                <InputGroup>
                    <InputGroup.Button>
                        <Button>test</Button>
                    </InputGroup.Button>
                    <FormControl type="text" />
                </InputGroup>

                <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Button>
                        <Button>test</Button>
                    </InputGroup.Button>
                </InputGroup>

                <InputGroup>
                    <InputGroup.Button>
                        <Button>test</Button>
                    </InputGroup.Button>
                    <FormControl type="text" />
                    <InputGroup.Button>
                        <Button>test</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>        
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactInputGroupDemo3'));
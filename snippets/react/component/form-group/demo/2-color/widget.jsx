import { FormGroup } from 'tinper-bee';
function demo2 () {
    return (
        <div className="demo-form-group">
            <FormGroup validationState="error"> 
                <FormControl type="text" />
            </FormGroup>    
            <FormGroup validationState="warning"> 
                <FormControl type="text" />
            </FormGroup>    
            <FormGroup validationState="success"> 
                <FormControl type="text" />
            </FormGroup>            
        </div>
    );
}


ReactDOM.render(demo2(), document.getElementById('ReactFormGroupDemo2'));

import { FormGroup } from 'tinper-bee';
import { FormControl } from 'tinper-bee';

 class Demo3 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }

    }

    validateState () {

        if ( this.state.value == "" ) {
            return "warning";
        }
        if ( /^[0-9]*$/.test(this.state.value) ) {
            return "success";
        } else {
            return "error"
        }
    }

    handerChange (e) {
        this.setState({value:e.target.value});
    }
    render (){
        return( 
            <div className="demo-form-control">
                <FormGroup ref='demo3FormGroup' validationState={this.validateState()}>
                    <FormControl ref="demo3FormControl" placeholder="只能输入数字" value={this.state.value} onChange={this.handerChange.bind(this)}/> 
                </FormGroup>
            </div>
        )
    }

}


ReactDOM.render(<demo3 />, document.getElementById('ReactFormGroupDemo3'));

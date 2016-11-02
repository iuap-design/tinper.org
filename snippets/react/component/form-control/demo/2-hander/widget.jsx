import { FormControl } from 'tinper-bee';

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.HanderChange = this.HanderChange.bind(this);
        this.state = {
            value: 'test'
        }
    }
    HanderChange () {
        let value = ReactDOM.findDOMNode(this.refs.demo2).value;
        
        this.setState ({value: value});
    }
    render(){
        return( 
            <div className="demo-form-control">

                <FormControl ref='demo2' defaultValue='test' onChange={this.HanderChange} /> 

                <span>{this.state.value}</span>
            </div>
        )
    }

}


ReactDOM.render(
    <Demo2 />, 
    document.getElementById('ReactFormControlDemo2')
);

import { RadioGroup } from 'tinper-bee';


const Demo1 = React.createClass({
  getInitialState() {
    return {selectedValue: 'apple'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>

          <RadioGroup.Radio colors="warning" value="apple" >apple</RadioGroup.Radio>

          <RadioGroup.Radio colors="success" value="orange" >Orange</RadioGroup.Radio>

          <RadioGroup.Radio colors="info" value="watermelon" >Watermelon</RadioGroup.Radio>

          <RadioGroup.Radio colors="danger" value="banana" >Banana</RadioGroup.Radio>

          <RadioGroup.Radio colors="dark" value="grape" >Grape</RadioGroup.Radio>

      </RadioGroup>
    );
  }
});	


ReactDOM.render(<Demo1 />, document.getElementById('ReactRadioGroupDemo1'));



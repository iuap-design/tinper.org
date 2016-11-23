import { RadioGroup } from 'tinper-bee';

const Demo2 = React.createClass({
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

          <RadioGroup.Radio value="apple" >apple</RadioGroup.Radio>

          <RadioGroup.Radio value="orange" >Orange</RadioGroup.Radio>

          <RadioGroup.Radio disabled value="watermelon" >Watermelon</RadioGroup.Radio>

      </RadioGroup>
    );
  }
});


ReactDOM.render(<Demo2 />, document.getElementById('ReactRadioGroupDemo2'));



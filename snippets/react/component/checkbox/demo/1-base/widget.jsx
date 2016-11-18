import { Checkbox } from 'tinper-bee';


function demo1 () {
	return (
		<div className="demo-checkbox">
			<Checkbox> checkbox</Checkbox>
			<Checkbox disabled> checkbox</Checkbox>
			<Checkbox checked> checkbox</Checkbox>
			<Checkbox checked disabled> checkbox</Checkbox>
		</div>
	)
}


ReactDOM.render(demo1(), document.getElementById('ReactCheckboxDemo1'));


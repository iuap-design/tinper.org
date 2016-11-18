import { Checkbox } from 'tinper-bee';


function demo2 () {
	return (
		<div className="demo-checkbox">
			<Checkbox colors="danger"> checkbox</Checkbox>
			<Checkbox colors="info"> checkbox</Checkbox>
			<Checkbox colors="success"> checkbox</Checkbox>
			<Checkbox colors="dark"> checkbox</Checkbox>
			<Checkbox colors="danger"> checkbox</Checkbox>
		</div>
	)
}

ReactDOM.render(demo2(), document.getElementById('ReactCheckboxDemo2'));



import { Alert } from 'tinper-bee';

function demo1 () {
    return (
    	<div>
	        <Alert colors="news">
			    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
			</Alert>
			<Alert colors="success">
			    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
			</Alert>
			<Alert colors="warning">
			    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
			</Alert>
			<Alert colors="danger">
			    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
			</Alert>
			<Alert colors="info">
			    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
			</Alert>
		</div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactAlertDemo1'));


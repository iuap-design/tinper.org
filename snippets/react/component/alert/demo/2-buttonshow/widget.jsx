import { Loadingstate } from 'tinper-bee';
import { Button } from 'bee-button';


class Demo3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAlert: false
		}
	}
	handleAlertDismiss () {
		this.setState({showAlert: false});
	}
	handerAlertShow () {
		this.setState({showAlert: true});
	}
	render(){
		if(this.state.showAlert){
			return ( 
				<div>
					
					<Button type="warning" onClick={this.handleAlertDismiss.bind(this)}> hide alert</Button>
					<Alert colors="news" className="dark" onDismiss={this.handleAlertDismiss.bind(this)} closeLabel="关闭">
					    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
					</Alert>
					
				</div>
			)
		}else {
			return (
				<Button onClick={this.handerAlertShow.bind(this)}> Show alert</Button>
			)
			
		}

	}
}


ReactDOM.render(demo2(), document.getElementById('ReactAlertDemo3'));
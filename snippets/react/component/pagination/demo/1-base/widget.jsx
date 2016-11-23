import { Pagination } from 'tinper-bee';

class Demo1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}
	handleSelect(eventKey) {
	    this.setState({
	      activePage: eventKey
	    });
	}
	render() {
	    return (
	      <div>
	        <Pagination
		        items={20}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      </div>
	    );
	}
}

ReactDOM.render(<Demo1/>, document.getElementById('ReactPaginationDemo1'));


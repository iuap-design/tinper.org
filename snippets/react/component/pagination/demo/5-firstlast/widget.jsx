import { Pagination } from 'tinper-bee';


class Demo5 extends React.Component {
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
	        	first
	        	last
	        	prev
	        	next
		        items={20}
		        maxButtons={5}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      </div>
	    );
	}
}


ReactDOM.render(<Demo5 />, document.getElementById('ReactPaginationDemo5'));
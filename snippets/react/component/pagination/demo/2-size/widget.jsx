import { Pagination } from 'tinper-bee';

class Demo2 extends React.Component {
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
		    	noBorder
		        items={20}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
		    <Pagination
		    	gap
		        items={20}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      </div>
	    );
	}
}

ReactDOM.render(<Demo2/>, document.getElementById('ReactPaginationDemo2'));


var Hello = React.createClass({
	getInitialState: function(){
		return ({count: 0});
	},
	render: function(){
	return (<div>
	         <h1>
	           Hello {this.props.name}, 
			   age: {this.props.age},
			   count: {this.state.count}
			 </h1>
			 <button onClick={this.handleChange}>Click me</button>
			 </div>);
	},
	handleChange: function(){
		this.setState({count: this.state.count + 1});
	}
});

React.render(<Hello name="John" age="20" />, document.getElementById('MainApp'));

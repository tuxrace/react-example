var Box = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return (<div> <input type="text" value={value} onChange={this.handleChange} /> <span> {this.state.value} </span> </div>);
  }
});

React.render(<Box />, document.getElementById('myApp'));
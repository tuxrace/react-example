var record = [];

var Country = React.createClass({
getInitialState: function(){
	return ({list:''});
},
render: function(){
	return (<div> 
			  <h1> Country App </h1>
				<input type="text" onChange={this.setSearch}/>
				<ul>
				{this.state.list}
				</ul>
			</div>);
},
componentDidMount: function(){
	RH.get(this.props.remoteurl,
	function(result){
		var result = JSON.parse(result);
		var objectlist = result.map(function(x){
			record.push(x);
			return (<li> {x.name} </li>);				
		});
		this.setState({list:objectlist});
	}.bind(this));
},
setSearch: function(e){		
	var objectlist = record.map(function(x){
		return  x.name;
	})
	.filter(/./.test.bind(new RegExp(e.target.value, "gi")))
	.map(function(x, y){			
		return (<li> {x} </li>);				
	});		
	
	this.setState({list:objectlist});
	console.log(testfilter);
}
});
	
React.render(<Country remoteurl="https://restcountries.eu/rest/v1/all" />, document.getElementById('MainApp'));

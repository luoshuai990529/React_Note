import React, { Component, PureComponent } from 'react';

class Child extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		console.log('child componentWillMount');
	}

	componentDidMount() {
		console.log('child componentDidMount');
	}
	componentWillReceiveProps(nextProps) {
		console.log('childvwillReceiveProps', nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('child shouldUpdate', nextProps, nextState);
		return true;
	}

	componentWillUpdate() {
		console.log('child componentWillUpdate');
	}

	componentDidUpdate() {
		console.log('child componentDidUpdate');
	}
	render() {
		console.log('child render');
		const { name } = this.props;
		return <button>{name}</button>;
	}
}

class Parent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'first time',
		};
	}

	componentWillMount() {
		console.log('parent componentWillMount');
	}

	componentDidMount() {
		console.log('parent componentDidMount');
        console.log('<=======父子组件挂载完毕=======>')
		setTimeout(() => {
			this.setState({
				name: 'second time',
			});
		}, 5000);
	}
	componentWillReceiveProps(nextProps) {
		console.log('parent willReceiveProps', nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('parent shouldUpdate', nextProps, nextState);
		return true;
	}

	componentWillUpdate() {
		console.log('parent componentWillUpdate');
	}

	componentDidUpdate() {
		console.log('parent componentDidUpdate');
	}
	render() {
		console.log('Parent render');
		return <Child name={this.state.name} />;
	}
}
function App() {
	return (
		<div>
			<Parent></Parent>
		</div>
	);
}

export default App;

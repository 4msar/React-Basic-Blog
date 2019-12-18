import React from 'react';
import axios from '../../helpers/axios';

export default class Details extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			post: null
		}
	}
	shouldComponentUpdate(){
		return this.state.post ? this.props.post !== this.state.post.id : true;
	}
	componentDidUpdate(state, props){		
		axios.get('/blogs/'+this.props.post).then(response=>{
			this.setState({ post: response.data });
		});
	}
	componentDidMount(){
		axios.get('/blogs/'+this.props.post).then(response=>{
			this.setState({ post: response.data });
		});
	}
	render() {
		return (
			<div>
				{this.state.post ? (
					<div>
						<h1>{this.state.post.title}</h1>
						<h6>{this.state.post.createdAt}</h6>
						<div>{this.state.post.details}</div>
					</div>
				): null}
			</div>
		);
	}
}

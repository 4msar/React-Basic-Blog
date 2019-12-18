import React from 'react';
import axios from '../helpers/axios';

import Posts from '../components/Post/Posts';
import CreatePost from '../components/CreatePost/CreatePost';
import Details from '../components/Details/Details';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 'success',
			posts: [],
			selected: null
		}
	}


	componentDidUpdate(prevState, prevProps){
		console.log(prevProps, prevState);
		console.log('[Main] updated');
	}

	componentDidMount(){
		console.log('[Main] mounted');

		axios.get('/blogs').then(response=>{
			this.setState({ posts: response.data });
		});
	}

	postClickHandler(item){
		this.setState({ selected: item });
	}
	backButtonClickHandler(item){
		this.setState({ selected: null });
	}
	isNewPostCreated(item){
		if( item ){
			const posts = this.state.posts;
			posts.push(item);
			this.setState({ posts: posts });
		}
	}

	render() {
		console.log('[Main] rendered');
		return (
			<div>
				<CreatePost
					created={this.isNewPostCreated.bind(this)} />
				<hr />
				
					<div>
						<h2>All Posts</h2>
						<Posts
							clicked={this.postClickHandler.bind(this)}
							posts={this.state.posts} />
					</div>
					
						{this.state.selected ? (<div>
							<button className="btn btn-warning btn-sm" onClick={this.backButtonClickHandler.bind(this)}>Close</button>
							<Details 
								post={this.state.selected}
								/>
						</div>):null}
					
			</div>
		);
	}
}
	
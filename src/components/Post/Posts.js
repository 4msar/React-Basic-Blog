import React from 'react';
import style from './Post.module.css';

export default class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: this.props.posts
		}
	}

	componentDidUpdate(state, props){
		if( state.posts && this.props.posts.length !== props.posts.length ){
			this.setState({ posts: this.props.posts });
		}
	}

	render() {
		return (
			<div>
				{this.state.posts.map(item=>{
					let classes = ['media'];
						classes.push(style.PostItem);
					return (
						<div className={classes.join(' ')} key={item.id}>
							<img src={item.image} className="mr-3 img-thumbnail" alt={item.title} />
							<div className="media-body">
								<h5 onClick={(e)=>this.props.clicked(item.id)} className="mt-0">{item.title}</h5>
								{item.details.slice(0, 100)}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

import React from 'react';
import axios from '../../helpers/axios';

export default class CreatePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputs: {
				title: "",
				details: "",
			}
		}
	}

	inputChangeHandler(event, name){
		const inputs = this.state.inputs;
		inputs[name] = event.target.value;
		this.setState({ inputs: inputs });
	}
	formSubmitHandler(e){
		e.preventDefault();
		console.log(this.state.inputs);
		axios.post('/blogs', this.state.inputs).then(response=>{
			console.log(response);
			this.props.created(response.data);
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.formSubmitHandler.bind(this)}>
					<div className="form-group">
						<label htmlFor="title">Post Title</label>
						<input 
							type="text" 
							className="form-control" 
							id="title" 
							placeholder="Title...."
							value={this.state.inputs.title}
							required={true}
							onChange={(e)=>this.inputChangeHandler(e, 'title')} />
					</div>
					<div className="form-group">
						<label htmlFor="details">Post Details</label>
						<textarea 
							onChange={(e)=>this.inputChangeHandler(e, 'details')}
							className="form-control" 
							id="details" rows="3"
							defaultValue={this.state.inputs.details}
							placeholder="Write something..."></textarea>
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

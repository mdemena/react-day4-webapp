import React, { Component } from 'react';

export class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {title:'', description=''}
    }
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    onSubmit = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
	render() {
		return (
			<form onSubmit={}>
				<div>
					<label for="name">Title</label>
					<input type="text" name="title" placeholder="Title" onChange={onChange} />
				</div>
				<div>
					<label for="description">Description</label>
					<input type="text" name="description" placeholder="Description"  onChange={onChange}/>
				</div>
				<imput type="submit" value="Add Project" />
			</form>
		);
	}
}

export default Project;

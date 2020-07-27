import React, { Component } from 'react';
import axios from 'axios';

export class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { projects: [] };
	}
	componentDidMount = async () => {
		const apiData = await axios.get('http://localhost:3000/api/projects');
		const projects = apiData.data.map((p) => (
			<li>
				{p.title} ({p.description})
			</li>
		));
		this.setState({ projects: projects });
	};
	render() {
		return <ul>{this.state.projects}</ul>;
	}
}

export default Projects;

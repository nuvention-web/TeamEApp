import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { AcademicResources } from '../api/academicResources.js';

import AcademicResource from './AcademicResource.jsx';



// App component - represents entire app
class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			hideNonMatches: false,
		};
	}

	handleSubmit(event) {
		event.preventDefault();

		// Find text field via React ref
		const txt = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

		// const result = AcademicResources.find({all_text : textDecoration = 'line-through'},);

		// Clear form
		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

	toggleHideNonMatches() {
		this.setState({
			hideNonMatches: !this.state.hideNonMatches,
		});
	}

	renderAcademicResources() {
		let filteredResults = AcademicResources.find();

		if (this.state.hideNonMatches) {
			filteredResults = results;
		}

		return filteredResults.map((academicResource) => (
      <AcademicResource key={academicResource._id} academicResource={academicResource} />
    ));
	}

	render() {
		return (
			<div className="container">
			<header>
				<h1>Academic Resource Portal</h1>
				<form className="search-resources" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="textInput" placeholder="Search by course, resource, program..." />
				</form>
			</header>


			<ul>
				{this.renderAcademicResources()}
			</ul>
		</div>

		);
	}
}

App.propTypes = {
	academicResources: PropTypes.array.isRequired,
};

export default createContainer(() => {
	return {
		academicResources: AcademicResources.find({}, { sort: { createdAt: -1 } }).fetch(),
	};
}, App);









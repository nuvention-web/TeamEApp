import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { AcademicResources } from '../api/academicResources.js';

import AcademicResource from './AcademicResource.jsx';

class App extends Component {
	renderAcademicResources() {
		return this.props.academicResources.map((academicResource) => (
      <AcademicResource key={academicResource._id} academicResource={academicResource} />
    ));
	}

	render() {
		return (
			<div className="container">
			<header>
				<h1>Academic Resource Portal</h1>
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
		academicResources: AcademicResources.find({}).fetch(),
	};
}, App);









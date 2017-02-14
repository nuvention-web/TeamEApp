import React, { Component, PropTypes } from 'react';

import { AcademicResources } from '../api/academicResources.js';

export default class AcademicResource extends Component {
	toggleMatch() {
		AcademicResources.update(this.props.academicResource._id, {
			$set: { match: !this.props.academicResource.match },
		});
	}

	render() {
		return (
			<li>{this.props.academicResource.title}</li>
		);
	}
}

AcademicResource.propTypes = {
	academicResource: PropTypes.object.isRequired,
};
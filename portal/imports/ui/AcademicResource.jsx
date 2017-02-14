import React, { Component, PropTypes } from 'react';

export default class AcademicResource extends Component {
	render() {
		return (
			<li>{this.props.academicResource.title}</li>
		);
	}
}

AcademicResource.propTypes = {
	academicResource: PropTypes.object.isRequired,
};
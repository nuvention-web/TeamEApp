import { Session } from 'meteor/session'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

AcademicResources = new Mongo.Collection(null);

AcademicResources.insert({
	title: "Academic Mentoring Program (AMP)",
	courses: ['Bio 215', 'Bio 217', 'Bio 219', 'Chem 101', 'Chem 102', 'Chem 103', 'Econ 201', 'Econ 202', 'Econ 310', 'Stat 210'],
	contact: 'jamila.anderson@northwestern.edu',
	commitment: 'quarter-long',
});
AcademicResources.insert({
	title: "Gateway Science Workshop (GSW)",
	courses: ['Bio 215', 'Bio 217', 'Bio 219', 'Chem 101', 'Chem 102', 'Chem 103', 'Physics 135', 'Physics 130', 'EA 1', 'EA 2', 'EA 3', 'EA 4', 'Math 220', 'Math 224', 'Math 212', 'Math 213', 'Math 214', 'Math 230'],
	contact: 'jamila.anderson@northwestern.edu',
	commitment: 'quarter-long',
});
AcademicResources.insert({
	title: "Tech Tutoring",
	courses: ['Chem 101', 'Chem 102', 'Chem 103', 'Physics 135', 'Physics 130', 'EA 1', 'EA 2', 'EA 3', 'EA 4', 'Math 220', 'Math 224', 'Math 230'],
	contact: 'ueoffice@northwestern.edu',
	commitment: 'drop-in',
	location: 'MG28',
	days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
	times: ['2-5pm', '7-10pm'],
});

if (Meteor.isServer) {
	// this code only runs on the server
}

if (Meteor.isClient) {
	Template.resource_list.helpers({
		'programs': function() {
			return AcademicResources.find();
		},
		// 'contact_link': function() {
		// 	return AcademicResources.find({}, {fields: {contact:0}}).fetch();
			
		// }
		
	});

	Template.resource_list.events({
		'click li': function() {
			Session.set('selectedPlayer', 'session value test');

			var selectedPlayer = Session.get('selectedPlayer');
			console.log(selectedPlayer);
		}
	});
}

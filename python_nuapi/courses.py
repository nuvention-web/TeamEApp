import requests
from pymongo import MongoClient
import json
from nuapiclient import NorthwesternAPIClient
import pprint

API_KEY = 'ne3ZnvhRAwjLFjOp'

db_client = MongoClient('mongodb://NUVentionE:19951113@ds157499.mlab.com:57499/portaldata')
db = db_client.portaldata

collection = db.academicprograms

client = NorthwesternAPIClient(API_KEY)

programs = collection.find()
for program in programs:
	p = collection.find_one({"_id": program["_id"]});
	course_list = p['classes']
	courses = {}

	for i in range(len(course_list)):
		course = course_list[i].upper()
		catalog = course.split(' ')
		if len(catalog) > 1:
			if catalog[0] in courses.keys() and courses[catalog[0]] != None:
				if "-" not in catalog[1]:
					catalog[1] += ("-0")
				courses[catalog[0]].append(catalog[1])
			else:
				courses[catalog[0]] = [catalog[1]]


	# First, list all of the terms
	terms = client.terms()

	# The terms come sorted from most recent to least recent
	relevant_terms = terms[0:3]

	course_data = []
	program_subjects = []

	# print client.subjects()
	all_subjects = client.subjects()

	# Get the first class in the first subject for the most recent term
	for t in relevant_terms:
		subjects = client.subjects(term=t['id'])
		for sub in courses.keys():
			for c in courses[sub]:
				course_data.append(client.courses(term=t['id'],subject=sub, catalog_num=c))
			for s in all_subjects:
				# print s
				if s[u'symbol'] == sub and s[u'name'] not in program_subjects:
					program_subjects.append(s[u'name'])

	


	course_data = filter(None, course_data)
	course_data = [item for sublist in course_data for item in sublist]

	collection.update({"_id": program["_id"]}, {"$set": {"course_data": course_data}})
	collection.update({"_id": program["_id"]}, {"$set": {"subjects": program_subjects}})


#for program in collection.find():
#	pprint.pprint(program)

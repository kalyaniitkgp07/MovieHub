from .connection import dbConnection

def getPeopleInfo(peopleIdList = []):

	getPeopleQuery = 'SELECT * FROM People'
	db = dbConnection()
	if(len(peopleIdList)):
		idPlcHldr = ', '.join(list(map(lambda x: '%s', peopleIdList)))
		getPeopleQuery += ' WHERE peopleId IN (%s)' % idPlcHldr

		peopleInfo = {people.peopleId: people for people in db.query(getPeopleQuery, *peopleIdList)}
	else:
		peopleInfo = {people.peopleId: people for people in db.query(getPeopleQuery)}

	db.close()
	return peopleInfo

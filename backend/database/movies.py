from .connection import dbConnection

def getMoviesBasicInfo(movieIdList = []):

	getMoviesQuery = 'SELECT movieId, title, description FROM Movies'
	db = dbConnection()
	if(len(movieIdList)):
		idPlcHldr = ', '.join(list(map(lambda x: '%s', movieIdList)))
		getMoviesQuery += ' WHERE movieId IN (%s)' % idPlcHldr

		moviesInfo = {movie.movieId: movie for movie in db.query(getMoviesQuery, *movieIdList)}
	else:
		moviesInfo = {movie.movieId: movie for movie in db.query(getMoviesQuery)}

	db.close()
	return moviesInfo

def getMoviePeople(movieId):

	getMoviePeopleQuery = 'SELECT roleId, GROUP_CONCAT(peopleId SEPARATOR ",") \
		AS peopleIdList FROM MoviePeopleRole WHERE movieId=%s GROUP BY roleId'
	
	moviePeople = {}
	db = dbConnection()
	for mvPpl in db.query(getMoviePeopleQuery, movieId):
		moviePeople[mvPpl.roleId] = mvPpl
		moviePeople[mvPpl.roleId]['peopleIdList'] = mvPpl.peopleIdList.split(',');
		
	db.close()

	return moviePeople

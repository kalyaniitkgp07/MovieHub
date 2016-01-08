from .connection import dbConnection
from utils import validateMovieArgs


def getMoviesBasicInfo(movieIdList=[]):

    getMoviesQuery = 'SELECT movieId, title, description FROM Movies'
    db = dbConnection()
    if(len(movieIdList)):
        idPlcHldr = ', '.join(list(map(lambda x: '%s', movieIdList)))
        getMoviesQuery += ' WHERE movieId IN (%s)' % idPlcHldr

        moviesInfo = {str(int(movie.movieId)): movie for movie in db.query(
            getMoviesQuery, *movieIdList)}
    else:
        moviesInfo = {str(int(movie.movieId)): movie for movie in db.query(getMoviesQuery)}

    db.close()
    return moviesInfo


def getMoviePeople(movieId):

    getMoviePeopleQuery = 'SELECT roleId, GROUP_CONCAT(peopleId SEPARATOR ",") \
        AS peopleIdList FROM MoviePeopleRole WHERE movieId=%s GROUP BY roleId'

    moviePeople = {}
    db = dbConnection()
    for mvPpl in db.query(getMoviePeopleQuery, movieId):
        moviePeople[mvPpl.roleId] = mvPpl
        moviePeople[mvPpl.roleId][
            'peopleIdList'] = mvPpl.peopleIdList.split(',')

    db.close()

    return moviePeople


def getMovieDetails(movieId):
    tempInfo = getMoviesBasicInfo([movieId])
    status = False
    movieInfo = {}
    error = ''
    if movieId in tempInfo:
        status = True
        movieInfo = tempInfo[movieId]
    else:
        error = 'Movie not found'
    if status:
        movieInfo['people'] = getMoviePeople(movieId)

    return (status, movieInfo, error)


def insertMovieBasicInfo(movieArgs):
    queryStr = 'INSERT INTO Movies(title, description) VALUES(%s, %s)'
    db = dbConnection()
    newMovieId = db.execute(
        queryStr, movieArgs['title'], movieArgs['description'])
    db.close()

    return newMovieId


def insertMoviePeopleRole(movieArgs):
    moviePplRole = []
    for roleId in movieArgs['people']:
        for pplId in movieArgs['people'][roleId]['peopleIdList']:
            moviePplRole += [(movieArgs['movieId'], roleId, pplId)]

    insertMoviePplRoleQuery = 'INSERT INTO MoviePeopleRole(movieId, roleId, peopleId) VALUES(%s, %s, %s)'

    db = dbConnection()
    db.executemany(insertMoviePplRoleQuery, moviePplRole)
    db.close()


def addMovie(movieArgs):
    movieId = None
    (status, error) = validateMovieArgs(movieArgs)
    if status:
        movieId = insertMovieBasicInfo(movieArgs)
        movieArgs['movieId'] = movieId
        insertMoviePeopleRole(movieArgs)

    return (status, movieId, error)

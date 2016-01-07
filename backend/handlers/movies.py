import tornado
import jsonpickle
from database import getMoviesBasicInfo, getMovieDetails, addMovie

class MoviesInfoHandler(tornado.web.RequestHandler):
  def get(self):
    retVal = getMoviesBasicInfo()
    status = True
    error = ''
    if not retVal:
      status = False
      error = 'No movies found'

    self.write(jsonpickle.encode({
      'status' : status,
      'error'  : error,
      'result' : retVal
    }))

class MovieDetailsHandler(tornado.web.RequestHandler):
  def get(self, movieId):
    retVal = {}
    (status, movieInfo, error) = getMovieDetails(movieId)
    if status:
      retVal[movieId] = movieInfo

    self.write(jsonpickle.encode({
      'status' : status,
      'error'  : error,
      'result' : retVal
    }))


class AddMovieHandler(tornado.web.RequestHandler):
  def post(self):
    reqBody = jsonpickle.decode(self.request.body)
    status = False
    error = ''
    retVal = None

    if 'movieArgs' not in reqBody:
      status = False
      error = 'Missing argument "movieArgs"'
    else:
      (status, retVal, error) = addMovie(reqBody['movieArgs'])

    self.write(jsonpickle.encode({
      'status' : status,
      'error'  : error,
      'result' : retVal,
    }))

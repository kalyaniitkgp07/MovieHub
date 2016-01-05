import tornado
import jsonpickle
from database import getMoviesBasicInfo

class MoviesInfoHandler(tornado.web.RequestHandler):
  def get(self):
    self.write(jsonpickle.encode(getMoviesBasicInfo()))

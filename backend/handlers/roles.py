import tornado
import jsonpickle
from database import getRolesInfo

class RolesInfoHandler(tornado.web.RequestHandler):
  def get(self):
    retVal = getRolesInfo()
    status = True
    error = ''
    if not retVal:
      status = False
      error = 'No roles found'

    self.write(jsonpickle.encode({
      'status' : status,
      'error'  : error,
      'result' : retVal
    }))
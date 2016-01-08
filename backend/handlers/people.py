import tornado
import jsonpickle
from database import getPeopleInfo


class PeopleInfoHandler(tornado.web.RequestHandler):

    def get(self):
        retVal = getPeopleInfo()
        status = True
        error = ''
        if not retVal:
            status = False
            error = 'No people found'

        self.write(jsonpickle.encode({
            'status': status,
            'error': error,
            'result': retVal
        }))

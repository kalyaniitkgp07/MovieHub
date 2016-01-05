import tornado

class RootHandler(tornado.web.RequestHandler):
  def get(self):
  	self.render('index.html')
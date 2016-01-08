import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import os.path
from config import PORT
from urls import UrlHandlers


def appSettings():
    return dict(
        template_path=os.path.join(os.path.dirname(__file__), "templates"),
        static_path=os.path.join(os.path.dirname(__file__), "static"),
    )


def main():
    application = tornado.web.Application(UrlHandlers().all(), **appSettings())
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(PORT)
    print 'Starting server on port : ' + str(PORT)
    tornado.ioloop.IOLoop.current().start()

if __name__ == "__main__":
    main()

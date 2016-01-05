from handlers import RootHandler, MoviesInfoHandler

class UrlHandlers:

	rootHandler = [
		(r'/', RootHandler),
	]
	
	movieHandlers = [
	  (r'/moviesinfo', MoviesInfoHandler),
	]

	def all(self):
		handlers = []
		handlers += self.rootHandler
		handlers += self.movieHandlers

		return handlers

		
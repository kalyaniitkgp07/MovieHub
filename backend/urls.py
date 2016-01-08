from handlers import RootHandler
from handlers import MoviesInfoHandler, MovieDetailsHandler, AddMovieHandler
from handlers import PeopleInfoHandler
from handlers import RolesInfoHandler


class UrlHandlers:

    rootHandler = [
        (r'/', RootHandler),
    ]

    movieHandlers = [
        (r'/api/moviesinfo', MoviesInfoHandler),
        (r'/api/movie/(.+)', MovieDetailsHandler),
        (r'/api/addmovie', AddMovieHandler),
    ]

    peopleHandlers = [
        (r'/api/peopleinfo', PeopleInfoHandler),
    ]

    roleHandlers = [
        (r'/api/rolesinfo', RolesInfoHandler),
    ]

    def all(self):
        handlers = []
        handlers += self.rootHandler
        handlers += self.movieHandlers
        handlers += self.peopleHandlers
        handlers += self.roleHandlers

        return handlers

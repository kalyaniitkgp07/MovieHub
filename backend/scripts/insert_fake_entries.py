import argparse
import torndb
import random
from faker import Factory

def dbConnection():
	return torndb.Connection(
		'localhost',
		'MovieHub',
		user = 'trmhadmin',
		password = '123456'
	)

def insertPeople(numEntries):
	fake = Factory.create()
	db = dbConnection()
	names = []
	for i in range(numEntries):
		names += [(fake.first_name(), fake.last_name())]

	queryStr = 'INSERT INTO People(firstName, lastName) VALUES(%s, %s)'
	db.executemany(queryStr, names)
	db.close()
	print 'Generated ' + str(numEntries) + ' fake people.'
	return

def insertMovies(numEntries):
	fake = Factory.create()
	db = dbConnection()
	movies = []
	for i in range(numEntries):
		movies += [(fake.sentence(nb_words=random.randint(1, 5)), fake.text())]

	queryStr = 'INSERT INTO Movies(title, description) VALUES(%s, %s)'
	startRowId = db.executemany(queryStr, movies)

	getRolesQuery = 'SELECT roleId FROM Roles'
	getPeopleQuery = 'SELECT peopleId FROM People'
	allRoleId = [role.roleId for role in db.query(getRolesQuery)]
	allPeopleId = [people.peopleId for people in db.query(getPeopleQuery)]
	
	moviePplRole = []
	for i in range(numEntries):
		movieId = startRowId + i
		for roleId in allRoleId:
			if(random.random() < 0.9):
				numPpl = 1
				if(roleId in ['ACTOR']):
					numPpl = random.randint(5, 20)

				rolePplIds = random.sample(allPeopleId, numPpl)
				for pplId in rolePplIds:
					moviePplRole += [(movieId, roleId, pplId)]
	
	insertMoviePplRoleQuery = 'INSERT INTO MoviePeopleRole(movieId, roleId, peopleId) VALUES(%s, %s, %s)'
	db.executemany(insertMoviePplRoleQuery, moviePplRole)

	db.close()
	print 'Generated ' + str(numEntries) + ' fake movies.'
	return

def parseArgs():
	parser = argparse.ArgumentParser(description='Insert fake entries to spicified table')
	parser.add_argument('--movies', action='store_true', help='entries to Movies table')
	parser.add_argument('--people', action='store_true', help='entries to People table')
	parser.add_argument('-n', dest='numEntries', type=int, default=100, help='number of entries')

	return parser.parse_args()

def main():
	args = parseArgs()
	if(args.movies and args.people):
		print 'Specify only one option from [--movies, --people]'
	elif(args.movies):
		insertMovies(args.numEntries)
	elif(args.people):
		insertPeople(args.numEntries)
	else:
		print 'One of the options [--movies, --people] is required'
	return

if __name__ == "__main__":
   main()

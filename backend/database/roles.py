from .connection import dbConnection

def getRolesInfo():
	db = dbConnection()

	getRolesQuery = 'SELECT * FROM Roles'
	allRoles = {role.roleId:role for role in db.query(getRolesQuery)}

	db.close()
	return allRoles
from .connection import dbConnection

def getAllRoles():
	db = dbConnection()

	getRolesQuery = 'SELECT * FROM Roles'
	allRoles = {role.roleId:role for role in db.query(getRolesQuery)}

	db.close()
	return allRoles
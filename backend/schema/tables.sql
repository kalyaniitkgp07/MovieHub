CREATE TABLE Movies (
	movieId INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(80) NOT NULL,
	description BLOB NOT NULL,

	PRIMARY KEY(movieId)
);

CREATE TABLE Roles (
	roleId VARCHAR(20) NOT NULL,
	name VARCHAR(20) NOT NULL,

	PRIMARY KEY(roleId)
);

CREATE TABLE People (
	peopleId INT NOT NULL AUTO_INCREMENT,
	firstName VARCHAR(40) NOT NULL,
	lastName VARCHAR(40),

	PRIMARY KEY(peopleId)
);

CREATE TABLE MoviePeopleRole (
	movieId INT NOT NULL,
	roleId VARCHAR(20) NOT NULL,
	peopleId INT NOT NULL,

	FOREIGN KEY(movieId)
		REFERENCES Movies(movieId)
		ON DELETE CASCADE,

	FOREIGN KEY(roleId)
		REFERENCES Roles(roleId)
		ON DELETE CASCADE,

	FOREIGN KEY(peopleId)
		REFERENCES People(peopleId)
		ON DELETE CASCADE
);

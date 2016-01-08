** Installation **

1.  untar the project in <project_folder>
2.  Create database, <MovieDB> in mysql
3.  Create an user <movieAdmin> and grant access to <MovieDB>
4.  Save database credetials in <project_folder>/backend/config file
5.  Create tables according to <project_folder>/backend/schema/schema.sql
6.  cd <project_folder>/backend/
7.  Create a virtualenv
8.  Install required modules: pip install -r requirements.txt
9.  cd <project_folder>/frontend/
10. Install packages: npm install
11. cd <project_folder>
12. run boot.sh


** Testing **

1.  To create fake data, run following commands in sequence
      a) cd <project_folder>/backend/
      b) python scripts/insert_fake_entries.py --roles
      c) python scripts/insert_fake_entries.py --people -n 100
      d) python scripts/insert_fake_entries.py --movies -n 10
2.  Navigate to localhost:8888/


** Tachnical Notes **

  The project is an simple example to view, create movies for a movie database. The server is written in tornado(python language) backed by MySQL database engine. While the frontend is written in React framework. The frontend architecture is FLUX. To implement this, redux have been used along with react-redux. Keeping the technology and methodology cutting edge, the app has been built as single page application and api based data fetching. For the same reason the choice of tornado server feels apt, as it is light weight and well capabale to serve api calls. Using Redux(with react) make the whole frontend codebase very modular, easy to add features and well understandable. The backend codebase is aligned PEP8 specification and checked with flake8 module. I am happe to discuss any technical details in person or over the phone.

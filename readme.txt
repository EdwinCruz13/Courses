Test project created by a apprentice in nodejs
for developing this api you must follow these steps:

1 - Create a folder
2 - Using VSCode, create a nodejs project using the command 'npm unit -y' then the 'package.json' is created.
3 - Install through command line the following packages:
    * express :             web server package
    * express-handlebars    layout engine package
    * express-session       session manager than allow us keep session file on server
    * mssql                 SqlServer node created in order to connect a Microsoft Sql Server database
    * morgan                Log manager than allow to know about request from client application, saving them on log file
    * bcryptjs              allow to encrypt sent password from client application
    * passport              allow autenticate all the user to database
    * passport-local        allow us to autenticate all the local user to database
    * timeago.js            allow us toformat dates
    * connect-flash         allow us to send many success messages or failed messages
    * express-validator     allow us to validate users sending data 
    * nodemon               a developing node than allow us keep the web server online, without refreshing our file and server

    use this command
        npm i express express-handlebars express-session mssql morgan bcryptjs passport passport-local timeago.js connect-flash express-validator
    then install nodemon, use the next command
        npm i nodemon -D

4 - Create the next folders in order to create the project structure
        * src
            * lib
            * public
            * routes
            * views

5 - Create the following files in javascript on src folder 
        * database.js
        * keys.js   
        * index.js

6 - in package.json file, add the next code on "scripts":
    ....
        "scripts": {
            "dev": "nodemon src/index.js"
        },
    ----
    allow to execute the main file located on src

    use git as repository file systems


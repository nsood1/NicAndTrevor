For this project, we created a small express application to reflect the parking database we created for project one. 

To run this project, you are going to begin by pulling the repo (or in this case, opening the zip file where this was all nicely created for you :) )

Once you are ready to get up and running you want to open up a terminal and navigate to the file path where this project is stored. Run `npm install` to install all necessary packages needed for this project to work. From there you want to run `node [filename].js` to start the project.

The next thing you need to proceed forward, is you need to be authenticated as a user. Once you are signed as an employee, you will be given a token that can be used to run all the API calls we created for this project. When using insomnia you need to make sure you include this as a header when you try to run all of the API calls. 

So... what exactly can you do with this app?

1. POST /account - this will accept a username & password and if successful will return with a success code, or tell you if you are missing the username/password
2. POST /session - this will provide you with a session token if there is an account with your credentials.

The rest will need an authentification header:
3. GET /session - this will respond with the full employee account record ties with the token provided
4. GET /spots?stadium=[stadium_id]&lot=[lot_id]&available=[boolean] - will take in the parameters and filter results as needed.
5. POST /allocation - which will accept vehicle information and a spotID. This will allow you to create a new allocation in the table.
6. PUT /allocation[allocation_id] - this accepts vehicle information and then will create a new record with it 
7. DELETE /allocation/[allocation_id] - This will delete an allocation identified by a specific allocation_id

The thing to note: A thing to note, is for our delete. Because of the way we originally set up our database out vehicle was an allocation ID. Henceforth - in our implementation, it does get deleted. 


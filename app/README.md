See: https://github.com/nsood1/NicAndTrevor

# General Project Information

**Title:** Project Two - Creating An API</br>
**Department:** Computer Science</br>
**Professor:** Professor Ayala</br>
**Course:** Database Concepts</br>

**Name:** Trevor Dohm</br>
**Name:** Nicole Sood</br>
**Date:** 4 / 13 / 2022</br>

# Project Description

For this project, we created a small express application to reflect the parking database we created for project one. This API will allow the user to interact with some of the generated tables from said project. 

## Running The Project

- Begin by pulling the repo (or in this case, opening the zip file where this was all nicely created for you!)
- Once you are ready to get it up and running you want to open up a terminal and navigate to the file path where this project is stored (ending in /app).
- Run `npm install` to install all necessary packages needed for this project to work. 
- Then, run `node index.js` to start the project.

## Working In Project

- Now that the project is (hopefully) running on your computer, you must first run a post account and a post session in your REST client (we use Insomnia) with the same username and password for each. This is the process of creating an account and getting a token, or login, for the account. See Pictures Below:

<img src="https://github.com/nsood1/NicAndTrevor/blob/TestBranch/app/pictures/Screenshot%20(56).png"></br>
<img src="https://github.com/nsood1/NicAndTrevor/blob/TestBranch/app/pictures/Screenshot%20(57).png"></br>

- So... what exactly can you do with this app? We already discussed these two:

1. POST /account - This will accept a username & password and if successful will return with a newly created record, or tell you if you are missing the username/password. It will specify which.
2. POST /session - This will provide you with a session token if there is an account with your credentials. Use the same credentials as in 1.

- But let's look at the rest! These will need an authentification header:

3. GET /session - This will respond with the full employee account record tied with the token provided.
4. GET /spots?stadium=[stadium_id]&lot=[lot_id]&available=[boolean] - This will take in the parameters and filter results as wanted.
5. POST /allocation - This will accept vehicle information and a spot_num. This will allow you to create a new allocation in the table (or update an old one).
6. PUT /allocation[allocation_id] - This accepts vehicle information and then will create a new record with it (see more specifications below).
7. DELETE /allocation/[allocation_id] - This will delete an allocation identified by a specific spot_num (allocation).

- <b>Important:</b> In our first project, we had the spot_num inside the vehicle table so it wasn't necessary to have an allocation table. Due to that, the proceses for the last three allocation routes are a bit different than required in the handout. In our completed project, both the POST and PUT allocation are able to create new allocations and update old allocations. Since it is a little bit complicated, the overall process is as stated below: </br>

Accepts License, Spot_Num</br> 
-> Null Existing Spot_Num</br>
-> Creates Vehicle if Doesn't Exist</br>
-> Updates Existing Vehicle</br>
-> If None, Throw Exception</br>

- Overall, it allows all the required processes in the project description to be carried out, so no potential is lost.

- Here are the pictures of 3 - 7! (Btw I took one of these pictures at a later time, see if you can find which one!)

<img src="https://github.com/nsood1/NicAndTrevor/blob/TestBranch/app/pictures/Screenshot%20(58).png"></br>
<img src="https://github.com/nsood1/NicAndTrevor/blob/TestBranch/app/pictures/Screenshot%20(62).png"></br>
<img src="https://github.com/nsood1/NicAndTrevor/blob/TestBranch/app/pictures/Screenshot%20(59).png"></br>
<img src="https://github.com/nsood1/NicAndTrevor/blob/TestBranch/app/pictures/Screenshot%20(60).png"></br>
<img src="https://github.com/nsood1/NicAndTrevor/blob/TestBranch/app/pictures/Screenshot%20(61).png"></br>

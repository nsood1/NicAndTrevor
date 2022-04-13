For this project, we created a small express application to reflect the parking database we created for project one. 

In order to run this project, you are going to begin by pulling thre repo (or in this case, opening the zip file where this was all nicely created for you :) )

Once you are ready to get up and running you want to open up terminal and navigate to the filepath where this project is stored. 
Run `npm install` in order to install all neccessary packages needed for this project to work 
From there you want to run `node [filename].js` in order to start the project.

The next thing you need in order to proceed forward, is you need to be authicated as a user. Once you are signed as an employee, you in you will be given a token which can be used to run all the API calls we created for this project. When using insomnia you need to make sure you include this as a header when you try to run all of the API calls. 

So... what exactly can you do with this app?

1. Post /account - this will accept a username & password and if succesful will return with a successcode, or tell you if you are missing the username/password
2. Post /session - this will provide you with a session token if there is an account with your credentials.

The rest will need an authethification header:
3. 
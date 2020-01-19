# API Health Services

I'm reinventing the wheel with this because i'm stubborn and it's an excuse to practice with two new technologies. 

This microservice system uses prisma, postgress and nodejs to create a health monitor for the most commonly used API endpoints at ek Wholesale. 

If something goes wrong, it's sent to a slack channel.


There are a bunch of little nuances in this that are specifically because i'm using this. It's not exactly user friendly but can easilly be sorted out for any other things people wanna try.

## There are three major parts to this. EVENTUALLY BOTH FOLDERS WILL BE DOCKERISED

#### First:
The postgress and prisma docker things. Just use `docker-compose up -d` in the main directory. This'll launch a postgress container and a prisma container. You don't need to do anything with these except know that they are up.

#### Second:
The backend directory will require:

- Install prisma-cli: `npm install -g prisma`

- Deploy using prisma: `prisma deploy`

- Install Packages: `npm install`

- Add your slack channel webhook in a .env in the root directory

- Start: `npm start`

#### Third:
your `.env` will include any of your important API credentials. 

In the case of this project, i've also made it so that once you post an endpoint to the backend, you will need to add the ID of it into the .env. this is then called in the app.js. You can see examples of this.

To make it simpler, ive also added a folder called "jobs" which will allow you to put your api calls. For each new one, just add it to the app.js

The cron directory will only need a classic `npm install` and an `npm start` after setting the above. 

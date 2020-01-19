# API Health Services

I'm reinventing the wheel with this because i'm stubborn and it's an excuse to practice with two new technologies. 

This microservice system uses prisma, postgress and nodejs to create a health monitor for the most commonly used API endpoints at ek Wholesale. 

If something goes wrong, it's stored and a message is sent straight to slack.

Remember: `docker-compose up` will be used to launch postgres and prisma

After which, you'll just have to use a seperate terminal to run the node applications until they are perfected and ready for production.

Once it's ready the docker-compose file will be updated to deploy as intended with little to no effort.
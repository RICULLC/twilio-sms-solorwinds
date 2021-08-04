### set Environment variables
* for local testing create a .env file and add the variables
* for Heroku add the env variables in setting (PORT=80 for heroku)
TWILIO_ACCOUNT_SID=A######################3
TWILIO_AUTH_TOKEN=8######################
TWILIO_NUMBER=+1#######
PORT=####

### Heroku deployment 

* in command line 

```bash
> git init
> heroku login
> heroku git:remote -a `repo name`
> git add .
> git commit -am "initial commit"
> git push heroku master

```

* to check the logs 
> heroku logs --tail
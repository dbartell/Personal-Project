# MOTO BETS
###General Info

Live @ http://moto-bets.herokuapp.com/
-------------------------------------------
MOTO BETS is a fantasy motocross app made for AMA Supercross and Motocross Series fans.

###Purpose
-------------------------------------------
Fun way to compete against other fans and predicting each race win.

### User Experience
-------------------------------------------
User can easily Login with facebook and pick a race that they would like to predict. Moto Bets has a list of riders that the user can pick from and submit their picks. It automatically sends your picks to the data base and redirects you to another page where you can see all the other fans' predictions. You can then click on your user page and see all your picks so far for that season.

|Technologies|Used|
|-------|-------|
|Mongo|Mongo was used for our database|
|Express|Express made writing our server easier by doing the hard stuff|
|Angular|Angular was used to create front end web application as well getting data with $http, moving that data around and providing functionality to the html.|
|Node|Node was used as for the web server.|
|Mongoose|Mongoose was used to help model Schema's|
|bady-parser|Body parser is used as middleware that returns objects in req.body or returns an error to the callbacks.|
|cors|Allows for http requests from different domain than the one that served the request.|
|express-sessions|Used to save the user info to the session in server once logged in.|
|passport-facebook|Passport was used to authenticate the user.|

### Things I learned
-------------------------------------------
Mongoose queries make it so you can nest ObjectID's I was surprised how deep you can nest those Id's and how you can display those in any fashion you would like. It is sort of difficult to use resolves to grab a users data from mongo's database but if you read the docs carefully it will tell you the most current ways to nest things to reduce headaches in the future.

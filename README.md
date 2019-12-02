# PlayStation Time Tracker
A web application to track how much time you sent on gaming.

## Check out the app on Heroku
https://playstationtimetracker.herokuapp.com/

Please enable CORS to use the search function of the app.
I recommend the Moesif CORS extension for Chrome.

## What is this
This is a demo project I made to get familiar with React, frondend development and the usage of APIs.
The purpose of the app is to track your gaming process by registering ow many hours you spend on gaming and save this data  into your database. Also, the remainging time to finish a game is also calculating accordingly.

Currently there's no backand added to the application and it works with a **preloaded database**.\

## How to use

On the homepage the user gets the trending games with the estimated time it takes to finish them.


![homepage](https://user-images.githubusercontent.com/35307122/69966337-6ec3a200-1516-11ea-906c-2337f844d253.png)


If he/she wants the game can be added to the user's game list by clicking on the chosen game.


![searchfunction](https://user-images.githubusercontent.com/35307122/69966512-d843b080-1516-11ea-82df-7b3087aa835b.png)


Under 'My Games' the user can see his/her saved games and additional data.\
Games can be starred, marked as completed, reopened and deleted from the list.\
The starred games are filtered on the 'Starred' tab and the completed ones on the 'Completed' tab.\
If the timer is started it counts the gaming time and if paused, the interval gets added to 'My Time' field and the new 'Remaing Time' is calculated.

![full2](https://user-images.githubusercontent.com/35307122/69967429-a59ab780-1518-11ea-85ee-e90c36b7e510.png)












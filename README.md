# work-day-scheduler

# html- bootstrap
time setup- use jsquery "moment()" function to get the  current time and date.
to create the table i needed to get code from bootstrap and added text area, so the user can input whatever they need. To the right of the table if you click the emoji it will save the inpu to the loal storage. 

# script.js 
- current time: needed to use the moment().format("MMM Do, YYYY HH:mm:ss ") to get current time. the time was static, so in order to have a running clock i had to run it thru a setintert().

- changing colors: to change the colors of each row base on what time it is, i need to use jquary to get the "tr" element from the index.html. Then i convert the variables into intergers to a conditional statement. Base on the result of the condition the color changes.

- local storage: save user input to local storage. Then retrive with getitem.

# deployed link

https://rob49157.github.io/work-day-scheduler/


# screenshot 
https://github.com/rob49157/work-day-scheduler/issues/1#issue-1010389803 

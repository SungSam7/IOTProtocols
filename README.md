Sea Sensor Marine Monitor
The overall project is to take data from a buoy station off Tramore bay and to use this data aid the locals to decide whether it is safe to swim/surf. The project was intended to be done as a team, with the workload split among the members. 
Sea Sensor Website - https://sungsam7.github.io/IOTProtocols/
Video Link - https://www.youtube.com/watch?v=te4P52xgphM&feature=youtu.be

Initial Proposal – Application
My input towards this project is to implement a LPWAN (Low Power Wide Area Network) into a buoy off the coast of the south of Ireland. My plan is to design a wireless communication that uses low amount of battery uses to feed data to other members in a different department in the team. This would mean LPWAN would need to use small amounts of power and at the same time would need to offer data a great distance from its source. I plan to look at Sigfox’s SiPY hardware to move forward with my proposal. Updates will be given weekly on my progress with this project.

First entry – 2/3/2020
This was the first practical class working with LPWAN, our project leader unfortunately notified us that the materials on LPWAN were out of date. However, I was given the SiPY (Pycom) hardware for the first time to look and use to see where I can move forward using it. Just googling SiPY showed that this small piece of hardware had many uses in many projects, something I was amazed by. I continued to mess around and see the designs and how people implemented the SiPY into various projects.




Update – 9/3/2020
There has not been much movement going forward this week, I have not managed to sign up to Sigfox to be able to use the SiPY. This week has been a quiet one and not much to report on, I plan to move forward with greater success with my next weekly update. Still looking at what direction to take moving forward. 

Update – 16/3/2020
This week has been a disaster, project is under threat of being put on the back burner due to COVID-19. Schools/Colleges have been told to close due to the pandemic, there is no access to any materials within the college to continue working with the SiPY. All I have on me currently is the SiPY and nothing else. I will be contacting the project leader on how to move forward with the project in the next week or so. 

Update – 4/4/2020
I have not updated my progress for a few weeks now due to not having any new details regarding the project. Our project leader emailed me asking if I still wanted to proceed with the LPWAN base station (2/2/2020). After looking around and double checking did I have what I needed to continue with my end of the project, I have decided to go in another direction as I don’t have what is needed to continue, disappointing but nothing more can be done (SenseHat). I have replied to him with some good news, I share a house a friend who is also working on the project but in another area of it.  I can get data from his side of the project and display the data received on graphs using ThingSpeak (www.ThingSpeak.com). Project looks promising again, hopefully it will come together near the end. 

Update – 16/4/2020
Another speed bump has hit, I have no idea how it happened but somehow, I did not actually send the reply to the project leader. Why it took me so long to find out I had was due to it being Easter Holidays, I just thought that the project leader may not reply during that time. Kevin (friend/housemate) sent an email to our project leader regarding the project, I was confused as to why I had not received a reply myself only to find out I had no record of any email being sent! I sent an apology on my mistake; I have a lot of work to catch up on. Frank (project leader) said it was fine to work with Kevin going forward. 

Update (no date) 
Unfortunately me and Kevin can’t proceed further with the new proposed project, due to personal reasons with Kevin, he’s had to defer part of the project so for the 3rd and hopefully final time this new direction will get me to my end goal. My new goal is to take information provided by the M5 Buoy off the coast of Waterford, south of Ireland and display selected data and display them on ThingSpeak. May not come across as exciting as the initial proposal but at least it will be a learning experience using external sources of data and displaying them.
Update – 27/4/2020
Finally, some good news! I have managed to retrieve the data from the M5 Buoy using software called “Postman”. At first it was not easy to read but as you look further into it, you get the drift on how you gather what you need from it. I have messed around with ThingSpeak but have only been able to update graphs manually with a browser tab and changing the field to equal different numerical values. To proceed further, I must be able to get a JavaScript file and have that take the data sent from the M5 and update the graphs on ThingSpeak. How I go to do this has me slightly stumped. Next update is due the 4th of May. 

Update – 4/5/2020
My new update has been slightly promising, I have managed to write a JavaScript (JS) that updates the sea temperature to the graphs using the URL retrieved from M5 Buoy. Main problem is, I want to wrap the function in a while loop so it can consistently update with the use of a “wait function”. I am trying to get the JS to update hourly with new data, but I am not sure if it is the Ubuntu Shell (a Windows app) is the problem here as it crashes on me. The app does not seem to like to use infinite loops! It gives me FATAL ERROR messages (fatal error ineffective mark-compacts near heap limit), no idea how to fix that so for now in order to update the graphs new data, the JS’s must be run manually. 

 

Update – 11/5/2020
This will be my second to last update as this is the final week for the project to be completed. I still have not been able to figure out even with the help with www.StackOverflow.com why my infinite loop will not work, I have tried a for loop and yet again just can not get it to work, its been infuriating to say the least! I have managed to write more code to retrieve more than just sea temperature data, I now have 6 graphs in total ready to go. Need to finally be able update all graphs at the same time to ThingSpeak. My next step also is to use GitHub to submit this project, something I should have been doing the whole time during the project. A valuable lesson learned here, I also plan to video my journey to how I got to the end of my goal and submit it as part of the project. Now, back to getting the final touches done. 

Final Update – 16/5/2020
It has been a tiring week, I have many problems with the JS, a lot of playing around with the code was had to be done and some silly mistakes along the way made it take a lot longer than it should have been. 
1.	Could not figure out why that every time I ran the script, only 1 piece of data would be updated (the last in the list). I tried to fix it by separating it into separate functions but still it only sent the last function, even still, I don’t know why so I can’t answer that. The way around it was to put all the data into the same function and concatenate all the data into a single string before sending it { code } 
2.	The infinite loops and for loops still did not work by the end of it all, I had to give up and accept defeat but still put in way too much time into it with little outcome, along with the multiple functions problem, I have no explanation as to why it would not work for me. 
3.	Another route I took was to put all the functions into separate script files and have them be called by one single script. i.e., seaTemp.js, airTemp.js etc. run by runAll.js. With the time constraints, I had could not achieved what I wanted to do so that plan had to be abandoned.
At the end, I successfully managed to be able to run JavaScript’s to update the graphs on ThingSpeak but only manually, I would have loved to get it to be run constantly using an infinite loop but I couldn’t figure out how to stop the Ubuntu Shell from crashing. 



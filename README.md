# water-releaf
Using Ionic, I created an application that can inform the user of the water levels in their pot plant, so that they can stay on top of watering their plants.  

Tech and Stack used: 
+ Ionic framework to develop the mobile application
+ Raspberry Pi and Arduino Moisture Sensor  
+ Python script hosted on the Raspberry Pi, to detect Moisture Sensor changes
+ PHP API that is hosted on a Plesk Server + Data is stored in a MySQL Database   

1. I used the Ionic framework to create the application. Given time constraints, I used an Ionic theme that I repurposed, this is the theme that I used (https://ionicthemes.com/product/ion2fullapp-full-ionic2-app-template-elite-version). It was a lot of work stripping back this theme. I think starting from scratch would have been easier! But I did learn a lot about Saas and TypeScript from this theme. Also seeing how this theme handled data using JSON was helpful.  

2. Raspberry Pi and Moisture Sensor: I followed this tutorial (https://www.mathworks.com/help/thingspeak/MoistureMonitor.html) for setting up the Raspberry Pi and Moisture Sensor. This tutorial helped me with the setup of the Raspberry Pi and Sensor and also taught me how an API would work. The tutorial asks the user to use a third party system called ThingSpeak to create the API key. Instead of using ThingSpeak, I built an API that is hosted on a Plesk server. I was able to reference this tutorial to get the basic idea of what I needed to do to build the API - like connecting to a database to receive and retrieve the sensor data and get the API command from the Raspberry Pi. The Raspberry Pi hosts a Python Script that detects sensor changes. I copied this code from a tutorial, and only altered it slightly so that it accesses the API URL, rather than the URL for ThingSpeak.   

3. Database: I used MySQL to store data from the Moisture Sensor.

FoodTrucksATX
Designed for users of all ages to determine the available food trucks in the user’s desired area of Austin, TX then allowing them to choose to walk, bike, take public transit, or personal car based on their desired time to arrival.

User Stories
Ask a friend/relative to give us feedback to answer user type, goal of app effectiveness, and benefit (1 video clip or words – need 2-3)

Acceptance Criteria
• Given I am within the City of Austin in search of a food truck, I am able to find options in the area of town that I wish to target.
• If I desire a particular cuisine, the FoodTrucksATX app allows me to search by cuisine with results provided for desired mode of transportation.
• Given options to walk, bike, take public transit, or personal car, I am able to select the desired food trucks in that vacinity.
• When I select the option to walk or bike, weather conditions presented.
• Then I expect the address, directions, map, duration of the trip, and short bio on the food truck I select.

Bugs and Rabbit Holes

- Began defining “destinATX, a transportation application but after several days were not able to gain access to Uber and Lyft APIs so redirected efforts to focus on FoodTrucksATX
- Used proxy to fix CORS error which was blocking data from Google Direction API
  3 Ways to Fix the CORS Error — and How Access-Control-Allow-Origin works
- Found work around for Geo-location, need approval for Alert to user requesting permission

audit trail information would be helpful, diagrams, screen shots, notes, etc.

Resources and Tech Stack
GitHub used to leverage project management, work flow, and application storage.
Frontend: HTML. CSS, JavaScript, JQuery, AJAX, JSON
APIs: Google Maps JavaScript, Google Directions, CORS Anywhere Yelp, OpenWeather, CityBikes
Sample code of CSS, etc.

Team Management

Adrian Palacios
Full-Stack Engineer
linkedin.com/in/adrian-palacios-centraltexas/
adrianpalacios33@yahoo.com (956) 252-7270

Changyeon (Daniel) Hong
Full-Stack Engineer
linkedin.com/in/changyeon-hong-centraltexas/
hongchangyeon@gmail.com (737)218-3825
Diane Candler
Full-Stack Engineer
linkedin.com/in/diane-candler-centraltexas/
dianedcandler@gmail.com (512)964-9473

Marlon Mora
Full-Stack Engineer
linkedin.com/in/dmarlon-mora-centraltexas/
marlonmora.ndr@gmail.com (929)2296136

Review the team’s work on our GitHub https://github.com/DestinATX/Project-1

Value Add Proposal
TBD

Demo
Screen Shots – use Zoom to video

MVP
Phase One - select APIs and high-level product description
Phase Two – Psuedo Code, StoryBoard, Set Project Goals and Responsibilities
Phase Three - get data flowing and filtered
Phase Four – Build HTML and CSS infrastructure using available data
Phase Five – Develop user interface
Phase Six – Finalize deliverables including readme, screen shots, user stories, etc.

Projects
[x] Set-up Materialize framework - Wed 6/3  Adrian & Diane
[x] search bar - Fri 6/5 
[x] Yelp API - Wed 6/3 Marlon lead
[x] Google API - Thu 6/4 Daniel lead
[x]  Put markers and show directions on map Sat 6/6
[x]  Logo, name, color palette - Fri 6/5
[x]  Food input request - Fri 6/5
[x]  Food search - Fri 6/5
[x]  Weather - Sat 6/6
[x]  Trans - Walk - Sat 6/6
[x]  Trans - Bike - Sat 6/6
[x]  Trans - public - Sat 6/6
[x]  Trans - Car - Sat 6/6
[x] Geo Location - Sun 6/7
[x]  Look and Feel UI - Sun 6/7
[x]  Readme work - Sun 6/7
[x]  Presentation and Clean-up - Mon 6/8 




UI Design

images - storyboarding

Google Maps API
The Maps JavaScript API lets you customize maps with your own content and imagery for display on web pages and mobile devices.

Google Directions API
With the Directions API, it is possible to access driving, cycling, walking and public transportation routing by using an HTTP request.

Yelps API
Short description

cors-anywhere
This API enables cross-origin requests to anywhere.

Release 2.0
Enhancements we want to see in the next version:
• Add API links to enhance bike data
• Add GEO Location
• Add Food Truck attributes such as rating, reviews, menus, etc.

5/30/20 Met from 1-4pm worked on APIs to determine
5/28/20 - Met 6:30-10:00pm
Met with class to review project expectation with instructor then split into teams at 7pm.
Adrian and Diane worked on readme while Marlon and Daniel worked on APIs.

---

> > > > > > > a81647d211cb24fe33abb56ab40178a8dfd49a48
> > > > > > > NEXT STEPS:
> > > > > > > 5/26/20 - Met 7:30-10:30pm, reviewed APIs, acquired keys, developed next steps, recorded data
> > > > > > > Decisions: Google Maps & Distance Matrix + OpenWeather APIs; Bootstrap replacement will be Materialize https://materializecss.com/
> > > > > > > Next Meeting: Agile Update at 8pm Wednesday (5/27)
> > > > > > > Assignments - return API how-to for cost, duration, distance for Google APIs

1.  Google Maps API - Daniel & Adrian
2.  Google Distance Matrix - Marlon & Diane (hint: shortest vs quickest route) + OpenWeather
    https://developers.google.com/maps/documentation/distance-matrix/start
3.  All to review OpenWeather and come with ideas for storyboarding

- Note: use google to scrape this data instead of using Lyft and Uber APIs or use Google APIs to get their data.

Other Research Projects - slack if you are working on any of theses projects

- Method for calculating cost, duration, distance for bikes
- Modals - research as replacement for alerts
- Review Project Plan guidelines found in Antonio's Presentation

Goal: Target MVP on Monday (Jun1), Final Presentation Tuesday (Jun9)

\***\*\*\*\*\*\*\***\_\_\_\_\***\*\*\*\*\*\*\***API DATA\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***\_\_\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***
[x] Google Maps & Distance Matrix API - AIzaSyAHeXe0OoBIReOvCuEJq5cnU3LhVahYTAk
https://cloud.google.com/maps-platform/pricing/?_ga=2.155047547.279856015.1590455942-678168021.1590455942
(\$300 credit for 1 year to trial)
[] Uber API same key as Lyft - all from Rapid - REQUIRES TOKEN
(product info, est price range, missing duration)
(https://developer.uber.com/docs/riders/references/api)
[] Lyft API 422d5dfd16mshf1d3696de0ce7f2p15e944jsn410117f8544f
https://rapidapi.com/volodimir.kudriachenko/api/Lyft? endpoint=apiendpoint_d6a90130-f966-11e7-aa9e-7fdbe96fd9e9estimateRideCost
(estimateRideCost)(free API but requires join Dev Group)
(https://rapidapi.com/volodimir.kudriachenko/api/Lyft)
[] Socrata (bikes) API
https://dev.socrata.com/foundry/data.edmonton.ca/vq44-ni9f/embed
[] (BBikeRadar API (MM requested 5/25/20) - no updates 5/28
[x](Back-up) CityBikes 422d5dfd16mshf1d3696de0ce7f2p15e944jsn410117f8544f
(https://rapidapi.com/eskerda/api/citybikes)(free, unlimited) (#bikes/city)
[x] Open Weather API - b71526ae83f488d396f36bb43cb91ffb
(https://home.openweathermap.org/api_keys)
(DC gen w/name destinATX, free 1,000,000 calls/mo)

[x] (Back-up API for Maps) Here API ID “GXUq1dnJm5xYLW7Gksmj”
API Key 9KP26Lrxitj2R0Hj_fEmFwn5ftZtatAENiYP2nEuOyc
ACCESS KEY ID 3M0Ddq9m9sa6NaHS4DdhTg
ACCESS KEY SECRET \_cctW6WTyrCzgk3ZTD3LCrkAIYoUI8jhGGff5HKy3BLSvNBDQ5OWHi5HTM5lNLxaP74TYa9AaGJ_rzcKQp92fQ
(Here is a Google Maps alternate, directions API from Google, uses Waypoints) -
(https://developer.here.com/projects/PROD-fbe8199f-2fc7-431d-8c81-cd9e4d993b2a)
(MM gen w/gmail, free 250,000 transactions, 5,000 active users)

[x] (Tom Tom) Tom Tom for Developers API Key Diane: "XtB6o1P3oK26pkTlsOCQelb1GGQuynnX"

[x] (Transit App API Key) Transit Feeds API KEY Marlon "f1d3b41e-a4aa-4d0f-87e2-377e33994b1d"
API KEY Adrian "ac61515c-ef4d-4016-af3b-4c297d46812f"
API KEY Diane "9d384e5c-a97e-4251-8836-5a03c1f05ed1"
How to use: Get to the Documentation and you will have access to API LOCATIONS & API FEED

[x] (CapMetro Austin) Service Alerts, Trip Updates, Vehicle Positions "https://data.austintexas.gov/browse?q=json&sortBy=relevance"

[x](YELP) Yelp API - FUSION API

        API KEY Marlon
        "LWQKKIC6WZLlwyI7-Pg9pE02R0wCWEQtyFS7Y3hPAu-PEbUHgvd9P9munA-Ozw5qz4XsU-RlmxcW9o8bzippVqsR-MUSpI5ZOeEs4J25asF8SJYQZZNbZFefcZPSXnYx"

        Client ID Marlon
        "DRXtVwhPGS5-Fc2NONIkQA"

        Example Business ID: vLKgesyq-yEfpzeAFgPorQ

        How to use: Once you have the key there is an instruction on how to obtain all the information by authenticating on postman using the Authentication tab next to parameters in MEDIUM.COM Article.
        How to Guide here: https://medium.com/@schulte.robert/testing-yelp-api-requests-with-postman-f51450bbac83

        Example used: To get data using the url I got the business ID from the Chrome INSPECT tool in the The Picnic Austin which is a food truck.
        I pasted the Business Id: vLKgesyq-yEfpzeAFgPorQ to Postman after the Url https://api.yelp.com/v3/businesses/
        got a response with all the information for selected food truck in JSON.

        Remember to ADD parameters*** in our case it would be KEY : 'term' VALUE : 'foodtrucks' KEY : 'location' VALUE : 'austin'

        Yelp Fusion API - "https://python.gotrained.com/yelp-fusion-api-tutorial/"



        https://www.yelp.com/developers/documentation/v3/business

<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. list 
  2. list
     * With some
     * Sub bullets
</details>

Username : GitHub
Password : Github

GitHub URL: https://destinatx.github.io/Project-1/
GitHub: https://github.com/DestinATX/Project-1/settings

- - - - - - - End of 5/26 Update \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*

With these APIs user will be able to find the most affordable way to get to a desired destination in Austin.
We recommend the user to use environmentally friendly vehicles on sunny days.
The bike rates are estimated with google map data and the rates provided by the scooter rental companies.

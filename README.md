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

Lessons Learned
Valuable lessons: Planning out our project was instrumental in our success. We decided to create a food truck search for the city of Austin. This decision was based on two objectives. One, to capture the food truck spirit in the Austin community and second, to secure well rounded understanding of the data that we would display based on the time given to complete this Project. This course of action proved beneficial to our goal of creating a straightforward practical product that would benefit our userbase in Austin while creating enough time to evaluate our data for public use.

General Lessons:
- Time Management:  working in a group with varied schedules requires more planning, flexibility, and extra time.  Dividing tasks and defining roles is critical.  
- Resolving Conflicts:  Best to solve conflicts on Zoom/Meet instead of through Slack.
- Pair Coding:  Talking through pair coding requires practice and is more challenging to get into the coding zone.  Working through functions then coming together worked better than trying to co-create.
- Creative Challenges:  Luckily there weren't many creative challenges.  Demonstrating pros and cons to various approaches meant more work upfront but better results while minimizing group stress.
- Dividing Projects Upfront:  Fortunately early in the project a lead was defined for the primary deliverables.  Daily meetings helped all stay involved and feel like they were contributing to the project, regardless their depth of involvement in all of the areas.
- Packaging the Project:  Leaving a day to finalize the deliverables, collect user input, dress up the presentation, polish the readme files, update code to ensure formatting proved very helpful.  They may not have been possible had the university not given the groups an extra class day.  Project due dates moved from Monday to Thursday.
- Next time?  Add more lessons learned to the presentation. Work on creating a more dynamic Readme file.  Captured more input and make better use of the project matrix and phase review process.


START HERE


GitHub URL: https://destinatx.github.io/Project-1/
GitHub: https://github.com/DestinATX/Project-1/settings

**FoodTrucksATX**

Designed for users of all ages to determine the available food trucks in the user&#39;s desired area of Austin, TX then allowing them to choose to walk, bike, take public transit, or drive based on their desired time to arrival.

**User Stories**

22 year old college student used this application on his laptop to find a food truck nearby. His first remark was, &quot;Oh wow, this looks more like a third project instead of a first project.&quot; He ended up driving to Yummy Thai on Rainey Street.

**Acceptance Criteria**

- Given I am within the City of Austin in search of a food truck, this application allows me to find options around town that I wish to target.
- If I desire a particular type of food or cuisine, the FoodTrucksATX application allows me to search by food type with all results provided. If I desire to see all food trucks, regardless of food type, that should also be an option.
- Given options to walk, bicycle, take public transit, or drive, I am able access directions that let me know how long my trip to the desired food truck will take and directions to find my way there.
- Having an up to date weather report available allows me to make the best travel decision.
- Then I expect the address, directions, map, duration of the trip, and few facts about the food truck I select.
- After determining this application is helpful, having Linked-In information on the development team allows me to contact the group to find out what other applications may be available.

**Bugs and Rabbit Holes**

- Began defining &quot;destinATX, a transportation application but after several days were not able to gain access to Uber and Lyft APIs so redirected efforts to focus on FoodTrucksATX.
- ![](RackMultipart20200613-4-1by8p4k_html_e9ad276f938936f.png)
- Used geo-location API from the Google API library, because of the CORS error which forced using anywhere cors API; however, this did not yield the correct location but resolved the CORS error. To accomplish the intended goal, instead used the browser&#39;s HTML5 Geolocation feature along with the Maps JavaScript API.

-

- While Materialize offered some incredible tools for the project, it is challenging to work with when manipulating text and image alignment within themes and containers
-

![](RackMultipart20200613-4-1by8p4k_html_794ed694e0ae6991.png)Team had planned to have users search on how they wanted to travel, how long or distance to their destination, and what type of food. Time or duration required data storage and the team agreed this should be added to the nice to have. Alternatively, the &quot;time available&quot; section of the Search Screen became more of a flashy carousel of food choice ideas.

 ![](RackMultipart20200613-4-1by8p4k_html_36ac53e2aed6a9c9.gif)

![](RackMultipart20200613-4-1by8p4k_html_eb6fd6316291aa52.png)

- T ![](RackMultipart20200613-4-1by8p4k_html_55595ceea2e63e5.png) he template literal was crucial to transferring food truck data to our cards. We transferred all data to our results div on the index.html page. The template literal allowed us to comfortably implement a for loop for all rendered food trucks dynamically displayed upon pressing search. Our data used on each card came from the Yelp Fusion API consisting of Name, Address, URL link, and Rating for each food truck. There is also a Direction button that combines with the Google Directions API to display steps to find routes for the user.

**Resources and Tech Stack**

Frontend:  _HTML, CSS, JavaScript, JQuery, AJAX, JSON_

Tools_: Postman_

APIs: _Google Maps JavaScript, Google Directions, CORS Anywhere Yelp, OpenWeather, CityBikes_

_GitHub_ used to leverage project management, workflow, and application/file storage.

**Team Management**

![](RackMultipart20200613-4-1by8p4k_html_d40a1aed82bca68d.gif) ![](RackMultipart20200613-4-1by8p4k_html_69f4a4e3414ef099.jpg) **Adrian Palacios**

_Full-Stack Engineer_

![](RackMultipart20200613-4-1by8p4k_html_1bd476007cfd8b79.gif)linkedin.com/in/adrian-palacios-centraltexas/

[![](RackMultipart20200613-4-1by8p4k_html_fa5cf0c4a598c685.jpg)](mailto:adrianpalacios33@yahoo.com)adrianpalacios33@yahoo.com [![](RackMultipart20200613-4-1by8p4k_html_1c5d5f1fcf0821b2.jpg)](/C:%5CUsers%5Cdiane%5COneDrive%5CDocuments%5CUT%5CProject-1%5C(956)%20252-7270)(956) 252-7270

![](RackMultipart20200613-4-1by8p4k_html_da23e1470fcb6ecf.jpg)

![](RackMultipart20200613-4-1by8p4k_html_1a893e42ad17e71.jpg)Changyeon (Daniel) Hong

_Full-Stack Engineer_

![](RackMultipart20200613-4-1by8p4k_html_1bd476007cfd8b79.gif)linkedin.com/in/changyeon-hong-centraltexas/

[![](RackMultipart20200613-4-1by8p4k_html_fa5cf0c4a598c685.jpg)](mailto:hongchangyeon@gmail.com)hongchangyeon@gmail.com[![](RackMultipart20200613-4-1by8p4k_html_1c5d5f1fcf0821b2.jpg)](/C:%5CUsers%5Cdiane%5COneDrive%5CDocuments%5CUT%5CProject-1%5C(737)%20218-3825)(737)218-3825

**Diane Candler**

_Full-Stack Engineer_

![](RackMultipart20200613-4-1by8p4k_html_1bd476007cfd8b79.gif)linkedin.com/in/diane-candler-centraltexas/

[![](RackMultipart20200613-4-1by8p4k_html_fa5cf0c4a598c685.jpg)](mailto:dianedcandler@gmail.com)[dianedcandler@gmail.com](mailto:dianedcandler@gmail.com)[![](RackMultipart20200613-4-1by8p4k_html_1c5d5f1fcf0821b2.jpg)](/C:%5CUsers%5Cdiane%5COneDrive%5CDocuments%5CUT%5CProject-1%5C(512)%20964-9473) (512)964-9473

**Marlon Mora**

_Full-Stack Engineer_

![](RackMultipart20200613-4-1by8p4k_html_1bd476007cfd8b79.gif)linkedin.com/in/dmarlon-mora-centraltexas/

![](RackMultipart20200613-4-1by8p4k_html_ab3ef628e8fb2c92.gif)[marlonmora.ndr@gmail.com](mailto:marlonmora.ndr@gmail.com)[![](RackMultipart20200613-4-1by8p4k_html_1c5d5f1fcf0821b2.jpg)](/C:%5CUsers%5Cdiane%5COneDrive%5CDocuments%5CUT%5CProject-1%5C(737)-218-3825)(929)2296136

Review the team&#39;s work on our GitHub [https://github.com/DestinATX/Project-1](https://github.com/DestinATX/Project-1)

Or URL [https://destinatx.github.io/Project-1/](https://destinatx.github.io/Project-1/)

**Demo**

Screen Shots – use Zoom to video

**Phase Review**

|
 | Description | Status |
 |
| --- | --- | --- | --- |
| Phase 1 | Select APIs and high-level product description | Green | 5/28/20 |
|
 | Select new APIs and re-defined product | Moved out | 5/30/20 |
|
 | Psuedo Code, StoryBoard, FlowChart, Set Project Goals &amp; Responsibilities | Moved out complete 6/1 | 6/2 |
|
 | Define Welcome Page | Green | 6/1 |
|
 | Define Results and Selection Pages | Green | 6/1 |
|
 | Materialize Theme selection | Green | 6/2 |
| Phase 2 | Psuedo Code – each API but divide into Yelp &amp; Directions – assign roles/responsibilities | Green | 6/4 |
|
 | Basic Materialize framework for project | Green | 6/4 |
| Phase 3 | Get data flowing and filtered, | Moved due to UT, riots Yelp worked 6/46/7 complete | 6/4 |
|
 | Yelp API – target food truck by nameGoogle &amp; CORS – target map with Yelp API and load on map (radius, custom setting?) | 6/7 |
| Phase 4 | Build HTML and CSS infrastructure using available data | Most finished 6/7 | 6/9 |
| Phase 5 | Finalize user interface, tweak code to work as desired, work on Nice-to-Have | Delayed some due to time off | 6/10 |
| Phase 6 | Package product, finalize deliverables, work on | Green | 6/11 |
| Phase 7 | Work on final presentation, launch product | Green | 6/11 |

**UI Design**

Materialize inspiration

![](RackMultipart20200613-4-1by8p4k_html_9e9c542689293f54.png)

Storyboard

Welcome Page

![](RackMultipart20200613-4-1by8p4k_html_2cb201c2a12f710f.png)

Results Page

![](RackMultipart20200613-4-1by8p4k_html_3d25ddf8a0dd00d0.png)

Solutions Page

![](RackMultipart20200613-4-1by8p4k_html_8c912ee5b416df33.png)

**Initial Flow Chart**

![](RackMultipart20200613-4-1by8p4k_html_49ac0cb03196381.gif) ![](RackMultipart20200613-4-1by8p4k_html_4e58457414ee48b.png)

Product FlowChart after modifications

![](RackMultipart20200613-4-1by8p4k_html_4507b5cce3eb078d.png)

**Google Maps API**

_The Maps JavaScript API lets you customize maps with your own content and imagery for display on web pages and mobile devices._

Google Directions API

_With the Directions API, it is possible to access driving, cycling, walking and public transportation routing by using an HTTP request._

**Yelps API**

Short description

**cors-anywhere**

This API enables cross-origin requests to anywhere.

**Release 2.0**

Enhancements we want to see in the next version:

- Add API links to enhance bike data
- Add GEO Location
- Add Food Truck attributes such as rating, reviews, menus, etc.

**Lessons Learned**

**Time Management:** working in a group with varied schedules requires more planning, flexibility, and extra time. Dividing tasks and defining roles is critical.

**Resolving Conflicts:** Best to solve conflicts using Zoom/Meet instead of through Slack.

**Pair Coding:** Talking through pair coding requires practice and is more challenging to get into the coding zone. Working through different functions then coming together to pull them together worked better than trying to co-create.

**Creative Challenges:** Luckily these were easily managed. Demonstrating pros and cons to various approaches meant more work upfront for the design team but better results while minimizing group stress. Feature creep seemed to pop up as the program came closer to working as intended. For example a discussion to add a second page versus pushing data into another area on the same page came up with 2-3 days left in the project and would have pushed design to the final day while leaving very little time to package the product.

**Defining Roles &amp; Responsibilities:** Fortunately, early in the project a lead was defined or emerges for the primary deliverables. Daily meetings helped all stay involved and feeling like they were contributing to the whole project, regardless their depth of involvement in any one area.

**Packaging the Project:** Leaving a day to finalize the deliverables, collect user input, dress up the presentation, polish the readme files, update code to ensure formatting, etc. proved immensely helpful. This may not have been possible had UT moved the delivery date from Monday to Thursday. Having a flowchart and storyboard proved extremely helpful and kept feature creep at bay.

**Valuable lessons:** Planning out our project was instrumental in our success. We decided to create a food truck search for the city of Austin. This decision was based on two objectives. One, to capture the food truck spirit in the Austin community and second, to secure well rounded understanding of the data that we would display based on the time given to complete this Project. This course of action proved beneficial to our goal of creating a straightforward practical product that would benefit our userbase in Austin while creating enough time to evaluate our data for public use.

**Next time:** Add more lessons learned to the presentation. Work on creating a more dynamic Readme.md file. Capture more input and make better use of the project matrix and formally document the phase review.

![](RackMultipart20200613-4-1by8p4k_html_96bb7782cea657c0.png)
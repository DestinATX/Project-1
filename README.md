**FoodTrucksATX**

Designed for users of all ages to determine available food trucks in the user&#39;s desired area of Austin, TX then allowing them to choose to walk, bike, take public transit, or drive based on their desired time to arrival.  Application to be freely downloadable with mobile responsiveness.

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
- ![](RackMultipart20200611-4-1xf9zn0_html_e9ad276f938936f.png)
- Used geo-location API from the Google API library, because of the CORS error which forced using anywhere cors API; however, this did not yield the correct location but resolved the CORS error. To accomplish the intended goal, instead used the browser&#39;s HTML5 Geolocation feature along with the Maps JavaScript API.

-

- While Materialize offered some incredible tools for the project, it is challenging to work with when manipulating text and image alignment within themes and containers
-

![](RackMultipart20200611-4-1xf9zn0_html_794ed694e0ae6991.png)Team had planned to have users search on how they wanted to travel, how long or distance to their destination, and what type of food. Time or duration required data storage and the team agreed this should be added to the nice to have. Alternatively, the &quot;time available&quot; section of the Search Screen became more of a flashy carousel of food choice ideas.

 ![](RackMultipart20200611-4-1xf9zn0_html_36ac53e2aed6a9c9.gif)

![](RackMultipart20200611-4-1xf9zn0_html_eb6fd6316291aa52.png)

- T ![](RackMultipart20200611-4-1xf9zn0_html_55595ceea2e63e5.png) he template literal was crucial to transferring food truck data to our cards. We transferred all data to our results div on the index.html page. The template literal allowed us to comfortably implement a for loop for all rendered food trucks dynamically displayed upon pressing search. Our data used on each card came from the Yelp Fusion API consisting of Name, Address, URL link, and Rating for each food truck. There is also a Direction button that combines with the Google Directions API to display steps to find routes for the user.

**Resources and Tech Stack**

Frontend:  _HTML, CSS, JavaScript, JQuery, AJAX, JSON_

Tools_: Postman_

APIs: _Google Maps JavaScript, Google Directions, CORS Anywhere Yelp, OpenWeather, CityBikes_

_GitHub_ used to leverage project management, workflow, and application/file storage.

**Team Management**

![](RackMultipart20200611-4-1xf9zn0_html_d40a1aed82bca68d.gif) ![](RackMultipart20200611-4-1xf9zn0_html_69f4a4e3414ef099.jpg) **Adrian Palacios**

_Full-Stack Engineer_

![](RackMultipart20200611-4-1xf9zn0_html_1bd476007cfd8b79.gif)linkedin.com/in/adrian-palacios-centraltexas/

[![](RackMultipart20200611-4-1xf9zn0_html_fa5cf0c4a598c685.jpg)](mailto:adrianpalacios33@yahoo.com)adrianpalacios33@yahoo.com [![](RackMultipart20200611-4-1xf9zn0_html_1c5d5f1fcf0821b2.jpg)](/C:%5CUsers%5Cdiane%5COneDrive%5CDocuments%5CUT%5CProject-1%5C(956)%20252-7270)(956) 252-7270

![](RackMultipart20200611-4-1xf9zn0_html_da23e1470fcb6ecf.jpg)

![](RackMultipart20200611-4-1xf9zn0_html_1a893e42ad17e71.jpg)Changyeon (Daniel) Hong

_Full-Stack Engineer_

![](RackMultipart20200611-4-1xf9zn0_html_1bd476007cfd8b79.gif)linkedin.com/in/changyeon-hong-centraltexas/

[![](RackMultipart20200611-4-1xf9zn0_html_fa5cf0c4a598c685.jpg)](mailto:hongchangyeon@gmail.com)hongchangyeon@gmail.com[![](RackMultipart20200611-4-1xf9zn0_html_1c5d5f1fcf0821b2.jpg)](/C:%5CUsers%5Cdiane%5COneDrive%5CDocuments%5CUT%5CProject-1%5C(737)%20218-3825)(737)218-3825

**Diane Candler**

_Full-Stack Engineer_

![](RackMultipart20200611-4-1xf9zn0_html_1bd476007cfd8b79.gif)linkedin.com/in/diane-candler-centraltexas/

[![](RackMultipart20200611-4-1xf9zn0_html_fa5cf0c4a598c685.jpg)](mailto:dianedcandler@gmail.com)[dianedcandler@gmail.com](mailto:dianedcandler@gmail.com)[![](RackMultipart20200611-4-1xf9zn0_html_1c5d5f1fcf0821b2.jpg)](/C:%5CUsers%5Cdiane%5COneDrive%5CDocuments%5CUT%5CProject-1%5C(512)%20964-9473) (512)964-9473

**Marlon Mora**

_Full-Stack Engineer_

![](RackMultipart20200611-4-1xf9zn0_html_1bd476007cfd8b79.gif)linkedin.com/in/dmarlon-mora-centraltexas/

![](RackMultipart20200611-4-1xf9zn0_html_ab3ef628e8fb2c92.gif)[marlonmora.ndr@gmail.com](mailto:marlonmora.ndr@gmail.com)[![](RackMultipart20200611-4-1xf9zn0_html_1c5d5f1fcf0821b2.jpg)](/C:%5CUsers%5Cdiane%5COneDrive%5CDocuments%5CUT%5CProject-1%5C(737)-218-3825)(929)2296136

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

![](RackMultipart20200611-4-1xf9zn0_html_9e9c542689293f54.png)

Storyboard

Welcome Page

![](RackMultipart20200611-4-1xf9zn0_html_2cb201c2a12f710f.png)

Results Page

![](RackMultipart20200611-4-1xf9zn0_html_3d25ddf8a0dd00d0.png)

Solutions Page

![](RackMultipart20200611-4-1xf9zn0_html_8c912ee5b416df33.png)

**Initial Flow Chart**

![](RackMultipart20200611-4-1xf9zn0_html_49ac0cb03196381.gif) ![](RackMultipart20200611-4-1xf9zn0_html_4e58457414ee48b.png)

Product FlowChart after modifications

![](RackMultipart20200611-4-1xf9zn0_html_4507b5cce3eb078d.png)

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
GitHub URL: https://destinatx.github.io/Project-1/
GitHub: https://github.com/DestinATX/Project-1/settings


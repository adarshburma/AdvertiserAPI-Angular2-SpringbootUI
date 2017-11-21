# AdvertiserAPI-Angular2-SpringbootUI
Angular 2 CRUD UI for Advertiser API
Url : http://localhost:4200/#

"Services" :  src/app/services
"Components" : [app.component.ts, user.component.ts]
"Routes" : [
    "/#" <Show Advertisers and panel to delete advertiser based on view selection button>,
    "/router/user" <Add New User>,
    "/router/index" <Angular2 Reference - added for my reference> 
]

Added proxy so that requests goto http://localhost:8080 so CORS extension might be required on chrome.

Note: @cors annotation needs to be added to AdvertiserController in SpringBoot project. 

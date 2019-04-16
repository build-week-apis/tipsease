# build-tipsease-be

```https://buildtipease.herokuapp.com```

## ENDPOINTS
        GET: /auth/users

get a list of users, will be usefull for checking out what a users data should roughly look like.

        GET: /auth/serviceWorkers:

get a list of service workers, will be usefull for checking out what sw data should roughly look like.
**^^^^^dont use above stylings in production code, theyre just a reference^^^^^**

**-----------------------------**
**-----------------------------**




**registration endpoints**

        POST: /auth/users/register

pass a new user with fullName, password, photoUrl, username to create a new user account. all datapoints are manditory.

        POST:  /auth/serviceWorkers/register:

pass a new user with 
- [ ] mandatory: (fullName, password, photoUrl, username, serviceType) 
- [ ] optional: (timeAtJob, tagline, bio, workplace) 
to create a new sw account. accountBalance is auto set to 0, and rating is auto set to 5.



**login endpoint for both types of users**

        POST: /auth/user/login 

for ALL LOGINS!! BOTH USERS AND SERVICE WORKERS. include a 'type' property on the object being sent to the backend with either 'users' for 'serviceWorkers' to dictate what type of account youre logging in with. 

example user account login:

        ```js
        {
        "username": "username1",
        "password": "password",
        "type": "users"
        }
        ```

example SW account login:

        ```js
        {
        "username": "anotherNewUsername",
        "password": "password",
        "type": "serviceWorkers"
        }
        ```

your response will include a JSON web token. save this token to local storage and send it as a header named "authorization" on every new response to the backend in order to validate credentials. on logout, delete the token from local storage. Your response will also include a userInfo object which will include all of your users information, should you want to use this to set initial state for your application.


**get ALL service worker information**

        GET: /serviceWorkers
will return an array with ALL serviceWorkers. this IS a restricted enpoint, unlike the first endpoint listed, and CAN be used for final development purposes/most likely for search. We can implement fuzzy search etc. when we get to that point.




**get specific users information**

        GET: /users/${id}
will return a specific users information on a GET request, and is where you will send all of your PUT requests for updating users information.


        GET: /serviceWorkers/${id}
will return a specific users information on a GET request, and is where you will send all of your PUT requests for updating users information.




**update specific users information**

        PUT: /users/${id}
Update a users information. Simply send an object with the corresponding key/value pair for whatever you want updated. This includes password. This endpoint will handel any and all 'users' related updates

        PUT: /serviceWorkers/${id}
Update a serviceWorkers information. Simply send an object with the corresponding key/value pair for whatever you want updated. This includes password. This endpoint will handel any and all 'serviceWorkers' related updates



**rate a service worker**

        PUT: /serviceWorkers/rate/${id}
allows you to rate a specific service worker by that service workers ID. send the backend a message with the format:

        ```js
        {
        rating: 'any number 1 through 5 float'
        } 
        ```

a response of 1 will entail a successful request. 


**Tip a Service Worker**

        PUT: /serviceWorkers/pay/:id
send an object with the payment ammount in the form of: 
        {
                payment: 10 (or whatever the ammount is)
        }


**transfer money to bank**

        PUT: /serviceWorkers/transferToBank/:id
no body needs to be sent with this request, only the id in the query so the backend can look up which user is requesting a transfer.
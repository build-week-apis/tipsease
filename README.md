# build-tipsease-be

        /auth/users:

get a list of users, will be usefull for checking out what a users data should roughly look like.

        /auth/serviceWorkers:

get a list of service workers, will be usefull for checking out what sw data should roughly look like.





        /auth/users/register:

pass a new user with fullName, password, photoUrl, username to create a new user account. all datapoints are manditory.

        /auth/serviceWorkers/register:

pass a new user with 
        mandatory: (fullName, password, photoUrl, username, serviceType) 
        optional: (timeAtJob, tagline) 
to create a new sw account. accountBalance is auto set to 0, and rating is auto set to 5.



use /auth/user/login for ALL LOGINS!! BOTH USERS AND SERVICE WORKERS. include a 'type' property on the object being sent to the backend with either 'users' for 'serviceWorkers' to dictate what type of account youre logging in with. 

example user account login:
                {
                "username": "username1",
                "password": "password",
                "type": "user"
                }

example SW account login:
                {
                "username": "anotherNewUsername",
                "password": "password",
                "type": "serviceWorkers"
                }

you your response will include a JSON web token. save this token to local storage and send it as a header on every new response to the backend in order to validate credentials.
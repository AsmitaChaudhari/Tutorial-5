This repository contains work for Tutorial 5 of course CSCI 5709.

- [Source Code](https://github.com/ssamkit108/Tutorial-5)
- [App Link](https://userdetails-api.herokuapp.com/)

*LAST MODIFIED:* 23 JUNE 2020


# Tutorial 6

Tutorial 6 is about understanding and creating REST APIs using Node Js and Express Js. The created as part of tutorial contains list of users. Various operations like getting list of users, getting specific user, adding new user and updating user, can be done using different APIs created. 

Following is the list of APIs created for the application:

### Get Users

#### List of All users
- [https://userdetails-api.herokuapp.com/getuser](https://userdetails-api.herokuapp.com/getuser): It returns JSON array of all the users.

#### Get User by ID
- [https://userdetails-api.herokuapp.com/getuser/:id](https://userdetails-api.herokuapp.com/getuser): Enter ID of the user in the place of `:id`. It will return details of user if user exists, otherwise a message will be returned stating '**user not exists.**'.

### Add New User

- [https://userdetails-api.herokuapp.com/adduser](https://userdetails-api.herokuapp.com/adduser): It takes JSON object of user in the body of the request and adds new user with id and returns newly created user. The structure of JSON object is as below:

```json
{
    "username": string,
    "email": string
}
```

### Update Existing User

- [https://userdetails-api.herokuapp.com/updateuser](https://userdetails-api.herokuapp.com/updateuser): This API also takes JSON object of user in the body of the request and updates the details of the user if the id in the request matches with any existing user. If user data is updated, API returns updated user, otherwise a error message. The structure of JSON object is as below:

```json
{
    "uid": int,
    "username": string,
    "email": string
}
```
---
## Authors

* [Asmita B. Chaudhari - B00835062](as320435@dal.ca)
* [Malav Jani - B00851408](ml805403@dal.ca)
* [Siddharth Kapania - B00848946](sd242115@dal.ca)
* [Parth Parmar - B00853913](parth.parmar@dal.ca)
* [Tapan K. Prajapati - B00851820](Tapan.Prajapati@dal.ca)
* [Samkit Sandipbhai Shah - B00852292](sm611862@dal.ca)


---
## References
1. [Node Js](https://nodejs.org/en/)
2. [Express](https://expressjs.com/)
3. [Joi](https://www.npmjs.com/package/@hapi/joi)
4. [Visual Studio Code](https://code.visualstudio.com/)
5. [Heroku: Cloud Application Platform](https://www.heroku.com/)
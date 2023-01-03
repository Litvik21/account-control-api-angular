<div id="header" align="center">
  <img src="api/src/main/resources/images-for-readme/secure-social-media-password-credential-account-management.png" width="500"/>
</div>

## 📖 Description
This app look like a simple visualisation of account control system.
You can see difference between USER and ADMIN roles, access to different endpoints.


## 📋 Project structure
**The project has an 3-Tier Architecture**
- Controller - This level allows the user to work with this application.
- Service - This level of architecture is responsible for processing the data received from the DAO level.
- Repository - This level of architecture is responsible for communicating with the database.

## 🎯 Features
- LogIn
- Admin can add new account to system
- Save to DB user's account
- Update accounts
- Admin can change status of users

## 🖥️ Technologies
- Java 17
- Maven
- MySQL
- Tomcat
- Swagger
- Spring Web/Boot/MVC
- Docker

## ⚡️Quickstart
1. Clone project
2. Open project in IDE
3. Edit resources/application.properties - set the necessary parameters
``` java
    spring.datasource.driver-class-name=YOUR_DRIVER
    spring.datasource.url=YOUR_URL
    spring.datasource.username=YOUR_USERNAME
    spring.datasource.password=YOUR_PASSWORD
```
4. Do not forget set this param on "create" for first project run. Like this:
``` java
    spring.jpa.hibernate.ddl-auto=create
```
5. Create the necessary name of DB
6. Run project
7. this command "docker pull litvik/account-control:latest" for using docker

## 👀 Example of parameters for db.properties
``` java
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.datasource.url=jdbc:mysql://localhost:3306/NameOfDataBase?useUnicode=true&serverTimezone=UTC
    spring.datasource.username=root
    spring.datasource.password=123456
```

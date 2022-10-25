# Experis Academy Case: Alumni Network

![logo](./src/assets/Logo/LogoAlumni.png)

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

The final project for Experis Academy fall 2022.

## Table of Contents

- [Contributors](#contributors)
- [License](#license)
- [Install](#install)
- [Usage](#usage)
- [API](#api)

## Contributors

[Johanna Haarseth](mailto:johanna.haarseth@no.experis.com), [Knut Formo Buene](mailto:knut.formo.buene@no.experis.com), [Kristian Sørum](mailto:kristian.sorum@no.experis.com), [Fanni Finheim](mailto:fanni.finheim@no.experis.com)

## License

[MIT © Haarseth, F.Buene, Sørum, Finheim](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Install

The project result can be interacted with [here](#link)

API docs can be viewed [here](#link)

If you wish to run the project locally:

1. Backend and Database
   1. Clone repo from azure
   2. Initiate MS SQL Server (on an ARM architecture run a [docker image](https://hub.docker.com/_/microsoft-mssql-server) 
   and use Azure Data Studio to connect) and connect to db using the data found in the string "ConnectionStrings" at appsettings.json.
   Update the connection string if needed.
   3. `dotnet ef migrations add InitialCreate`
   4. play / `dotnet run`
2. Frontend
   1. Clone repo from azure
   2. `npm i`
   3. `npm start`


If you should need to delete the local db, run the following script in MS SQL Server / Azure Data Studio:
```
-- Drop the database 'AlumniNetworkDb'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Uncomment the ALTER DATABASE statement below to set the database to SINGLE_USER mode if the drop database command fails because the database is in use.
ALTER DATABASE AlumniNetworkDb SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
-- Drop the database if it exists
IF EXISTS (
    SELECT [name]
        FROM sys.databases
        WHERE [name] = N'AlumniNetworkDb'
)
DROP DATABASE AlumniNetworkDb
GO
```

## Usage

The app is responsive and works fine on most screen sizes.

1. Log in using either one of the SSO services (Google, FB..) or make an account with email and password.
2. After logging in, the user will reach what we call the dashboard (`/dashboard`). 
From here the user can get a complete overview of all post (or filtered by given criteria).
The user can view groups, topics and events at a glance or click on see more to see all available.
The user can create new groups, topics and/or events,
can view their profile and create new posts. All from the dashboard :smiley:.
3. If the user clicks on one of the see more buttons, they are taken to the corresponding view (`/groups`, `/topics` or `/events`)
4. It exists a post detail view at `/group/post`, `/topic/post` and `/event/post`
5. It exists a calendar view at `/events` or a more advanced at `/calendar`
6. The user can view their profile by clicking the profile card on the dashboard and will be taken to `/profile` or on another user's username.

## API

API docs can be viewed [here](#link)

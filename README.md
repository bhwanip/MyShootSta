# My ShootSta App

## Quick Overview

This is a Single Page App built with React using NodeJS as the API backend. It allows you to upload videos and then stream them. The app has two routes:

###List Videos
This is the home page for the app

###Upload Videos
This is a Responsive Web form which to upload videos

## NPM Commands Overview

```sh
npm run client
```
Above command would start the client React would on port 3001, You can access the typically app at [http://localhost:3001](http://localhost:3001)

```sh
npm run server
``
Above command would start the NodeJS API server on port 3000, You can access the API's typically at [http://localhost:3000](http://localhost:3000)
The sever exposes below api's.

- **GET /api/videos** To fetch the list of all the videos as JSON Array.
- **POST /api/videos** To upload a video, save it to the disk and add it to the aboev list of videos
- **GET /video/uuid** To server the uploaded videos as a static resource for streaming and viewing

```sh
npm run start:dev
```
Above command would start the app in dev mode, React would generally come up on port 3001, and NodeJS API server on port 3000. You can access the app typically at [http://localhost:3001](http://localhost:3001)



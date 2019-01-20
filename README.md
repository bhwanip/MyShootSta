# My ShootSta App

## Quick Overview

This is a Single Page App built with React using NodeJS as the API backend. It allows you to upload videos and then stream them. The app has two routes:

### List Videos
This is the Responsive home page for the app.

### Upload Videos
This is a Responsive Web form which is used to upload videos.

## NPM Commands Overview

```sh
npm run client
```
Above command would start the client React  on port 3001, You can access the typically app at [http://localhost:3001](http://localhost:3001)

```sh
npm run server
```
Above command would start the NodeJS API server on port 3000, You can access the API's typically at [http://localhost:3000](http://localhost:3000)
The sever exposes below api's.

- **GET /api/videos** To fetch the list of all the videos as JSON Array.
- **POST /api/videos** To upload a video, save it to the disk and add it to the above list of videos
- **GET /video/:uuid** To server the uploaded videos as a static resource for streaming and viewing

```sh
npm run start:dev
```
Above command would start the app in dev mode, React would generally come up on port 3001, and NodeJS API server on port 3000. You can access the app typically at [http://localhost:3001](http://localhost:3001)

```sh
npm run build
```
Above commad would use the Create React App Scripts to build and optimize client side assets for our application.

```sh
npm run start:prod
```
Above command would start the app in Production mode (NODE_ENV=PRODUCTION), it would use Node as the the web server, serving client side assets from `client\build`. The API's for upload and listing of videos would also be provided by Node Server.

```sh
npm test
```
Above command would trigger the test suites for both client and server side.

```sh
npm run coverage
```
Above command would trigger the code coverage report for both client and server side.

## Demo Images

Refer to `images` directory at the project root for images of List and Upload views.

## Persistence Strategy

Each video upload is assigned a unique UUID and stored in a configurable directory location (process.env.UPLOAD_PATH) default value being `.\video_uploads`. This list of videos access url's along with other details like UUID, Title and Editor Name are stored as a JSON Array in `db.json` file, the file name can be overiden by process.env.DB_FILE property.

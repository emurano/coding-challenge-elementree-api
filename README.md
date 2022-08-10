# Elementree coding challenge - API - Eric Murano

This application is the frontend component of my submission to the Elementree coding challenge.

The application serves a single endpoint - `/locations`, which takes the south-west and north-east coordinates of a bounding box for a map, and generates 10 random locations within that bound box and sends it to the client.

Validations are performed on the bounding box coordinates, making sure the coordinates are numbers and are within the correct range for lat/lng.

## Assumptions about your system

For the purposes of the instructions in this readme, it's assumed that:

1. the system you are running the application on uses NVM to manage different versions of Node, and
2. you are running in some sort of unix like shell like bash or zsh

## Running the application

After checking out the codebase, follow these instructions to run the application.

1. In a terminal, change to the directory that you checked the code out in (the directory this readme file is in)
2. (optional) Create the `.env.local` file and set the port that you wish the application to listen on
   ```shell
   echo "LOCATIONS_APP_PORT=XXXX" > .env.local
   ```
   Change `XXXX` to the port you want the application to listen on for requests.
3. Switch your version of node to the one the project was built on. This will use the `.nvmrc` file to determine which version of node to switch to.
   ```shell
   nvm use
   ```
4. Run the application
   ```shell
   npm run dev
   ```

## Running the tests

1. Switch your version of node to the one the project was built on. This will use the `.nvmrc` file to determine which version of node to switch to.
   ```shell
   nvm use
   ```
2. Run the react-scripts test command
   ```shell
   npm run test
   ```


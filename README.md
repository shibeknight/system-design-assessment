# Video-sharing design

This repo contains the React application that will serve as the client for the prototype of the video-sharing application. Here is also an outline of the system design including a diagram with technologies, a high-level explanation, and a link to a repo with a prototype API connected to a MongoDB that is currently being fetched by the client to serve as a mockup for the database service. 

## System Diagram

The system diagram found here, [Diagram](https://drive.google.com/file/d/1iKK8QjxlUR86aitEV-ggVAIYHHaApl0B/view?usp=sharing), outlines the way the services will interact with each other and with the client, as well as a user path for the two core functionalities of the application.

## Prototype API

The repository found [Here](https://github.com/shibeknight/database-service) is a very basic example of the API that the client will fetch video metadata from the database service to display on the front page.

## API Specification and documentation

Aside from the specifications provided in the diagram, here is a link to prototype documentation created in Postman with example requests/responses for the services to be included in the system: [Documentation](https://documenter.getpostman.com/view/6474050/2sA3s9DTub)

## React application

The deployed React application can be found [Here](https://notyoutubeagain.netlify.app/), it contains the basic functionality requested with video thumbnails rendered and fetching data from the prototype API. It also includes a feature to favorite videos and save them in localStorage (this is for testing purposes), and a toggle to switch between light and dark mode.

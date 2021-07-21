# Express App to handle requests from Alexa Skills and Google Actions

## An app for children to learn through conversations with Alexa and Google Assistant

Initialize project by installing dependencies

This is an express app that has two different routes /alexa to handle Alexa Skills Post requests and /actions to handle Google Actions Handler post Requests.

# The folder structure:
# Files: 
          index.js - Initializes the express server in the given port
          Procfile - Heroku deployement file
          package.json - npm packages and details
          .gitignore - Git ignore instructions.
          
# Folders:
## routes - 
          Contains the routes that are to be handled by the express app
          It has three files, one for Alexa, one for Google Actions and the other one for a rest API that can be developed to be the common API for Alexa and Google Actions
## controller: 
          Contains the handlers for Alexa and Google functions in their respective files and also the API file containing the common function calls
          

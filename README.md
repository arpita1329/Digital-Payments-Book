
## Requirements
- Ensure you have Node.js installed on your system. It is recommended to have `Node.js version 20.x` or higher. You can check your Node.js version by running the command node -v in your terminal.
- Make sure you have npm (Node Package Manager) installed. It is recommended to have `npm version 9` or higher. You can check your npm version by running the command npm -v in your terminal.
- If you don't have npm installed or need to update it, you can install or update it by downloading the latest Node.js version from the official website: https://nodejs.org
- Once you have Node.js and npm set up, navigate to your project directory using the terminal.


## Getting started
### Frontend
- Run the following command to install the project dependencies: `npm install` or if you prefer using yarn: `yarn install`
- This will download and install all the necessary packages and libraries specified in the project's package.json file.
- After the dependencies are installed successfully, you can start the project by running the following command: `npm start` or with yarn: `yarn start`
- This command will start the project and typically launch a development server. You can access your project in a web browser using the provided URL (usually http://localhost:3000 or similar).
- The specific details of running the project may vary depending on the project setup and configuration, so make sure to refer to any documentation or instructions provided here.

### Backend
- Change the directory to the server directory of your project. You can do this by running the following command:
`cd server`
This command will navigate to the server directory.
- Once you are inside the server directory, you can now start the server. Run the following command to start the server:
`npm start`
This command will execute the start script defined in the package.json file inside the server directory.
- `MONGO_URI` and `PORT` are determined by .env file inside the server directory.
- Make sure that the server dependencies are installed correctly. If not, you may need to run npm install or yarn install inside the server directory before starting the server.
- After executing the npm start command, your server should start running and listening for incoming requests on the specified port. The specific details and port may vary depending on your server implementation.
- If everything goes well, you should see log messages indicating that the server has started successfully.
- That's it! You have now started the server for your project. You can proceed to use your application by accessing the appropriate URL or interacting with it based on the server's functionality.

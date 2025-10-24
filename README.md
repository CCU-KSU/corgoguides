# Getting started
1. clone repo
2. Open a terminal
2. `cd` into project directory
3. `cd client` then `npm install`
4. `cd ..\server` then `npm install`

# Prior to running application
1. Ensure you have `nodemon` and `concurrently` installed.
    * See [here](https://www.npmjs.com/package/nodemon) and [here](https://www.npmjs.com/package/concurrently)
2. Setup `.\client\.env` as shown
    * Obtain Firebase SDK Config values via `Firebase > Project Settings > General`
    * Replace `<Port>` with the port used for the server (next step).
    ```
    # Firebase
    REACT_APP_FIREBASE_API_KEY=~
    REACT_APP_FIREBASE_AUTH_DOMAIN=~
    REACT_APP_FIREBASE_PROJECT_ID=~
    REACT_APP_FIREBASE_STORAGE_BUCKET=~
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=~
    REACT_APP_FIREBASE_APP_ID=~

    # API
    REACT_APP_BASE_URL=http://localhost:<Port>/api
    ```
3. Setup `.\server\.env` as shown
    * `<Port>` can be whatever, but is typically `5000`
    ```
    PORT=<Port>
    GCLOUD_PROJECT=corgo-tech
    ```
4. Install Google Cloud CLI and run the following in a terminal
    * `gcloud auth application-default login`
        * Use the account connected to the project 


# To run application
1. At the root of the project, run the following:
    * `npm start`
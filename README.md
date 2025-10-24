# Getting started
1. clone repo
2. `cd` into project directory.
3. `cd client` then `npm install`
4. `cd ..\server` then `npm install`

# Prior to running application
1. Ensure you have `nodemon` installed.
    * See [here](https://www.npmjs.com/package/nodemon)
2. Setup `.\client\.env` as shown
    * You will need values from the Firebae SDK Config panel
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
    ```
4. Obtain Firebase Service Account key (its a JSON file), name it `serviceAccountKey.json`, then place it in `.\server\configs`


# To run application
1. `cd server` then `npm start`
2. `cd ..\client` then `npm start`
    * Should auto open a broser Window.
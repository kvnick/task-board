# Task board ReactJS project

## [Demo](https://react-trello-9ecc7.web.app)
Login **test@test.ru** <br />
Password **testtest**

## Project uses
* create-react-app [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)
* react-router-dom [https://reacttraining.com/react-router](https://reacttraining.com/react-router/)
* Firebase [https://firebase.google.com](https://firebase.google.com)
* Material-UI [https://material-ui.com](https://material-ui.com)


## Prerequirements
1. Node [https://nodejs.org](http://nodejs.org)
2. Yarn [install Yarn](https://yarnpkg.com/lang/en/docs/install) (optional)

### Firebase configuration
You need create a project in [Firebase site](http://firebase.google.com)

#### Authentication
1. Go to Authentication section and choose **email provider**
2. Create user with email and password **need for authentication**

#### Database
1. Go to Databases section and create database
2. Go to Database/Rules section and paste the code below (**only for demo!!!**)
```javascript
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
````

Create ```.env``` file and paste data with **your firebase credentials**:
```javascript
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
````

## Start
You can start the project in development or production mode.<br />
Before you start open the terminal and

### Production
1. Go to the project directory ```cd task-board```
2. Install dependencies ```npm install```
3. Build the app `npm run build`
4. Run the app on local machine `npx serve -s build`
5. Open [http://localhost:5000](http://localhost:5000) in the browser

### Development
1. Go to the project directory ```cd task-board```
2. Install dependencies ```npm install```
3. Run the app  `npm start` or `yarn start`
4. Open [http://localhost:3000](http://localhost:3000) in the browser
5. Make changes


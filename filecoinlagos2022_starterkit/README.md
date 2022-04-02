# Build With FIlecoin Starter Kit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using Moralis

- create a [Moralis](https://moralis.io) account at [https://admin.moralis.io/register](https://admin.moralis.io/register)
- create a [Moralis](https://moralis.io) server at [https://admin.moralis.io/servers](https://admin.moralis.io/servers)
- copy .env.example to .env.local.
- click on view details on your new server to see Server URL and Application ID
  ![Screenshot - Moralis server View Details page](https://693457552-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVStbACGLCycg7J5WQ2%2Fuploads%2Fgit-blob-5ff561a93a779cdbf95ef2b1330cd0a257a1565f%2FScreenshot%202022-03-16%20at%2012.03.37%20PM.png?alt=media "Moralis server View Details page")\

![Screenshot - Moralis server View Details page](<https://693457552-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVStbACGLCycg7J5WQ2%2Fuploads%2Fgit-blob-3633edd71c9f7c8549117b39898d797b7386bd12%2FScreenshot%202022-03-16%20at%2012.05.32%20PM%20(1).png?alt=media> "Moralis server View Details page")

- Replace REACT_APP_MORALIS_SERVER_URL and REACT_APP_MORALIS_APP_ID with your new server's Server URL and Application ID.
- check the src/utils/web3User.js module for utilities you want to integrate, e.g (connectWallet, AuthenticationState, logOut, contractWithSigner).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

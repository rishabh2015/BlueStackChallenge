


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Code is deployed at heroku at:
https://bluestacks-challenge.herokuapp.com/

TestCases of the App are as follows:

| Description   | Executed Steps                |Expected Output                                           |
| ------------- | ----------------------------- | -------------------------------------------------------- |
| Localization  | Select French language from Language selector dropdown                  | Header data,x days ago,x days ahead,Tabs text should be shown in french                                            |
| Campaign Date change  | Select today's date in Past Campaign tab for any campaign                  | The campaign should be removed from Past campaign tab and appear in Live Campaign tab                                          |
| View Pricing Popup  | Click on any View Pricing tab on any campaign                  | Popup will Open Up on the page showing the pricing details                                          |
| Page Responsiveness  | Switch from desktop to mobile page will be responsive and every thing will look fine                  | Page will be responsive in both mobile and desktop                                          |
| Campaign Date Changes   | On date change the campaigns will be shift tabs based on the date                   |   On date change the time mentioned on the date column for each campaign(for eg: 9 days ago) will also change                                        | 

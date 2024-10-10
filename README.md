# React Challenge - Rendering and Filtering

This React coding challenge prepared by Tesserent RAD is for candidates applying to roles which include frontend developer responsibilities.

## Technologies used

* Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* [Tailwind CSS](https://tailwindcss.com/docs) is used for CSS. This includes using [craco](https://github.com/gsoft-inc/craco) to customise how postcss is handled by `create-react-app`.

* The [classnames](https://www.npmjs.com/package/classnames) module is used to help toggle Tailwind CSS class names.

* Code is formatted using [prettier](https://prettier.io/) using default settings.

## Installing dependencies
Install Node v16

Within the project directory install all npm dependencies using:

`npm install`

## Development

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Production build

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

# Challenge Details

The project comes with a UI that is pre-built using Tailwind CSS but that is entirely static. The challenge is to process data in `src/data/npm-advisories.json`, render it in the UI, and hook up the various filters in the sidebar. Any filters which a user applies should be re-applied if they close and re-open the app at a later date (not just page refresh). You may use whichever React-based conventions or libraries you are most comfortable with. Candidates are welcome to use TypeScript but it is by no means a requirement. Your solution should be optimised for the latest versions of Chrome and Firefox.

Key requirements:

1. Read data from src/data/npm-advisories.json and render it in the <Vulnerabilities /> component
2. Hook up the following UI filters in the <Filters /> component:
    1. Keyword search (this should search module name and advisory title)
    2. Order by oldest / newest first
    3. Show / hide advisories based on severity
    4. Show / hide advisories based on status
    5. Preserve the user's current UI filter selections in their browser so their most recent selections will be re-applied if they close and re-open their browser tab
3. Build an "Advisory detail" template and output additional detail about an advisory which can be accessed via the advisory list

For bonus points, you can optionally add unit tests for any functions or components you create.

You are not required to complete the following:

1. Paginate results
2. Ensure your solution is compatible with non-current browsers

The file `SOLUTION.md` has been provided to allow you to include extra details about your solution such as:

1. Any issues you found in the app which you needed to fix
2. The reasoning behind the approach you took
3. Things you would ordinarily do in your day-to-day work do but didn't do here
4. General comments about the challenge
5. Any compromises you had to make.

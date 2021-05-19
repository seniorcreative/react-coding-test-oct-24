# Seer Security React coding challenge

This repository contains a React coding challenge prepared by Seer Security for candidates applying to roles which include front end developer responsibilities.

## About the challenge

This is a take-home test and can be completed in your own time. You may be asked how long you took to complete the challenge but there is no time limit. The project comes with UI pre-built using Tailwind CSS but it is entirely static.

The challenge is to process data in `src/data/npm-advisories.json`, render it in the UI and hook up the various filters in the sidebar. In addition to this, any filters which a user applies should be re-applied if they close and re-open the app at a later date (not just page refresh).

The challenge should use whichever React-based conventions or libraries you are most comfortable with. Candidates are welcome to use TypeScript but it is by no means a requirement.

### Key requirements

* Pull this repo and commit your work so the steps you take are obvious from your commit history
* Read data from `src/data/npm-advisories.json` and render it in the `<Vulnerabilities />` component
* Hook up the following UI filters in the `<Filters />` component:
  * Keyword search (this should search module name and advisory title)
  * Order by oldest / newest first
  * Show / hide advisories based on severity
  * Show / hide advisories based on status
* Preserve the user's current UI selections in their browser so their most recent selections will be re-applied if they close and re-open their browser tab
* Add any relevant info about your approach to the challenge to `SOLUTION.md`
* Return the completed solution as a `.zip` archive

### Things you aren't required to do

- Paginate results
- Write tests for your solution
- Ensure your solution is cross-browser compatible

### Additional notes

- If you find anything in the app which you needed to fix, add it as a note to `SOLUTION.md`
- How will a user know which filters are currently applied?
- If you had to retrieve NPM advisory data from an API endpoint, how might you go about it?
- What steps would you take to create an "Advisory detail" template and output additional detail about an advisory?

### SOLUTION.md

Things you might include in `SOLUTION.md`:

- The reasoning behind the approach you took
- Things you would ordinarily do in your day-to-day work do but didn't do here
- General comments about the challenge
- Any compromises you had to make.


## About the repo

### Technologies used

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [Tailwind CSS](https://tailwindcss.com/docs) is used for CSS. This includes using [craco](https://github.com/gsoft-inc/craco) to customise how postcss is handled by create-react-app.

- The [classnames](https://www.npmjs.com/package/classnames) module is used to help toggle Tailwind CSS class names.

- Code is formatted using [prettier](https://prettier.io/) using default settings.

## Using this repo

### Installing dependencies

Within the project directory install all npm dependencies using:

`npm install`

### Development

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Production build

`npm run start`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
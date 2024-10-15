### SOLUTION (Steve)

### Notes

In your README you've got node 16. Node 16 was end of support Sep 2023, so with that comes risk of compatibility vulnerabilities. 

I would recommend updating Node plus question the general strategy for keeping npm dependencies updated on a regular basis (As is done with dependabot reviews, typically for a SOC2-type 1/2 certification). 

I used `nvm` to swap down to the old version of node to run the required version stated in your README.

In terms of upgrading packages and node versions, this as it is something I do regularly in my current position, typically by editing package locks and re-running `npm install` though I have much of a preference for using `yarn` and it's plugins like `yarn upgrade-interactive`.
 

## Reasoning

I wanted to use localstorage, and React's useContext hook as I prefer it to props-drilling. It has been a long time since I have not worked outside of ts/tsx. I decided to spend time coding the features rather than convering this project to typescript.

## Issues

Incorrect prop types, missing className attributes.
Not clear how to differentiate when a vulnerability item from the JSON data source is "patched", so had to make an assumption. Normally this would be questioned as part of a kick-off meeting just to try and eradicate any unknowns.

Have had to try a couple of different ways to load the JSON data - fetch, import, require etc. Assuming this is going to be coming from a real API, would try to code the async method to load this for if/when it needs to switch over. Could then use an .env var for the basePath of that API. Ended up moving the data into /public and fetching it.


## Testing

In my day to day work ALL code has to meet minimum 80% test coverage. That would have meant mocking / spy functions. It can be quite long winded. I just added a couple of simple tests and fixed up `app.test.js`


## Compromises
I will say I have done 90% of this completely offline in about 4hrs on a plane to London. I've got some issues out of the box getting this running offline in Linux when running `npm run start`:

```
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

Therefore, I resorted to TDD - which has been very helpful in terms of being able to test seperate self contained parts of the app and fix bugs/issues with those.

SOLUTION is to upgrade node or run: `NODE_OPTIONS=--openssl-legacy-provider npm run start`




### Summary 
A fun challenge. Not being able to search for solutions using online resources is something that you really notice when it's not there, however it's a good reminder of what I don't know. 


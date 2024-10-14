### SOLUTION (Steve)

### Notes

Noting that in your README you've got node 16. Node 16 was end of support Sep 2023, so with that comes issues with compatibility and therefore vulnerabilities. 
I would recommend updating Node and also I would ask about the general strategy for keeping node package dependencies up to date on a regular basis
(This can be done with dependabot reviews for example, typically done as per a SOC2-type 1 or 2 certification). 

I used nvm to swap down to the old version of node.

In terms of upgrading packages and node versions I'm going to consider that out of the scope of this test but I am happy to discuss how I would go about doing this as it is something  I do regularly in my current position.
 

## Issues

Incorrect prop types , and missing className attributes.
Not clear to me how to differentiate when a vulnerability item from the JSON list is "patched", so had to make an assumption. Normally this would be questioned as part of a kick-off meeting just to try and eradicate any unknowns.


## Reasoning

I wanted to use localstorage, and react.context / contextProvider as I prefer it to props-drilling. I will say that it has been a long time since I have not worked outside of ts/tsx set up. I didn't want to spend time converting this project to typescript just for the sake of that.

## Testing

In my day to day work ALL code has to meet minimum 80% test coverage. That would have meant mocking / spy functions.
It can be quite long winded. I just added a couple of simple tests and fixed up the app.test.


## Compromises
I will say I have done 90% of this completely offline in about 4hrs with no code resources as I am on a plane to London. I've got some issues getting this running offline in Linux, such as 
```library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
  ```
Therefore, I resorted to TDD - which has been very helpful in terms of being able to test seperate self contained parts of the app and fix bugs/issues with those.

### Summary 
It's a fun challenge. I appreciated the opportunity to do this. Not being able to search for solutions using online resources or even asking AI is something that you really notice when it's not there, however it's a good reminder of what I don't know. 


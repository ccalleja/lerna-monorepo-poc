##NOTES

Using jest from the root tests run and show coverage and log info.
`npm run test`
We can also keep all mocks at the top thus avoid duplicates


If we want to use lerna to run all jest tests package by package, we need to move the mocks in each package then run
`lerna run test`

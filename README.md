## NOTES

Install lerna globally in order to run this project
`npm i -g lerna`

Using jest from the root tests run and show coverage and log info.
`npm run test`
We can also keep all mocks at the top thus avoid duplicates


If we want to use lerna to run all jest tests package by package, we need to move the mocks in each package then run
`lerna run test`


## USEFUL COMMANDS

`lerna init` 
Initialise a folder as a lerna monorepo

`lerna bootstrap --hoist`
Go trough all apps and install dependencies in the root node modules

`lerna add {package@version} --scope={existingPackage}` 
Add a dependency to a package (if --scope specified) or to all packages

`lerna run {command}`
Execute scripts found in package.json, skips the modules which do not contain this script

`lerna publish --cd-version={part} --yes`
Run publish using the patch version and answering yes to confirm the changes

`lerna import {path-to-single-repo-module}`
Import an older standalone module into the monorepo and keep the history
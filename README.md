# Plovr as a node package

You can now include plovr as a devDependency and run it as part of your build
script.

In the package.json. See example
```cmd
"scripts": {
  ...
  "test": "mocha test"
  "build-closure": "plovr build plovr-config.js > assets/closure.js",
  "build": "npm run test & npm run build-closure"
  ...
}
...
"devDependencies": {
    ...
    "node-plovr": "*"
    ...
}
```
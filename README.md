# redux-elm-router

Sample app which integrates [redux-elm](https://github.com/salsita/redux-elm) with [react-router-redux](https://github.com/reactjs/react-router-redux).

It contains two independent counters each one has it's own route. Current route can be changed by links at the top of the page.

Template component now supports elm architecture.

Application model doesn't map routing structure. Template doesn't wrap routes, it is separate component on the same level as routes.

This project now supports HMR, see commit `22b0262`.

## Usage

```
npm install
npm start
open http://localhost:3000
```

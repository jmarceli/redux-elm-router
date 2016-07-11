import { Updater, Matchers } from 'redux-elm';

export const init = initialValue => ({
  test: initialValue
});

export default new Updater(init(-1))
  // each case should contain one of the action identifiers defined in src/routing.js
  .case('Test', (model, action) => ({ ...model, test: model.test + 100 }))
  .toReducer();

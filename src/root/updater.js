import { Updater, Matchers } from 'redux-elm';
import counterUpdater, { init as counterInit } from '../counter/updater';

export const initialModel = {
  // models are keyed by modelKey defined in src/routing.js
  counter1: counterInit('Counter 1'),
  counter2: counterInit('Counter 2')
};

export default new Updater(initialModel)
  // each case should contain one of the action identifiers defined in src/routing.js
  .case('Counter1', (model, action) => ({ ...model, counter1: counterUpdater(model.counter1, action) }))
  .case('Counter2', (model, action) => ({ ...model, counter2: counterUpdater(model.counter2, action) }))
  .toReducer();

import { Updater, Matchers } from 'redux-elm';
import counterUpdater, { init as counterInit } from '../counter/updater';

export const initialModel = {
  counter1: counterInit('Counter 1'),
  counter2: counterInit('Counter 2')
};

export default new Updater(initialModel)
  .case('Counter1', (model, action) => ({ ...model, counter1: counterUpdater(model.counter1, action) }))
  .case('Counter2', (model, action) => ({ ...model, counter2: counterUpdater(model.counter2, action) }))
  .toReducer();

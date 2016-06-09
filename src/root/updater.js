import { Updater, Matchers } from 'redux-elm';
import { routerReducer } from 'react-router-redux';
import counterUpdater, { init as counterInit } from '../counter/updater';

export const initialModel = {
  routing: routerReducer(),
  root: {
    counter1: counterInit('Counter 1'),
    counter2: counterInit('Counter 2'),
  }
};

export default new Updater(initialModel)
  .case('Counter1', (model, action) => ({ ...model, root: { ...model.root, counter1: counterUpdater(model.root.counter1, action) } }))
  .case('Counter2', (model, action) => ({ ...model, root: { ...model.root, counter2: counterUpdater(model.root.counter2, action) } }))
  .toReducer();

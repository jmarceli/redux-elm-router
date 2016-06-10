import { Updater } from 'redux-elm';

export const increment = () => ({ type: 'Increment' });

export const init = title => ({
  title: title, // just for distinction if there are more counter instances
  count: 0
});

export default new Updater(init('Uninitialized'))
  .case('Increment', model => ({...model, count: model.count + 1}))
  .toReducer();

/**
 * Custom routerMiddleware which works with Elm action types.
 * It allows to use push('/yourpath') from reat-router-redux package
 * Example:
 *
 * dispatch(push('/'))
 *
 * You may also use it with saga generator functions:
 *
 * yield put(push('/somewhere'));
 *
 */
import { CALL_HISTORY_METHOD } from 'react-router-redux';

export default function routerMiddleware(history) {
  return () => next => action => {
    if (!action.type.endsWith(CALL_HISTORY_METHOD)) {
      return next(action);
    }

    const { payload: { method, args } } = action;
    history[method](...args);
    return action;
  };
}



import { view } from 'redux-elm';

import buildRouting from '../routing';

export default view(({ history }) => buildRouting(history));

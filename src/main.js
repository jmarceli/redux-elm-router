import boot from './boilerplate';

const run = boot('app');

const start = () => run(
  require('./root/view').default,
  require('./root/updater').default
);

if (module.hot) {
  module.hot.accept('./root/view', start);
  module.hot.accept('./root/updater', start);
}

start();

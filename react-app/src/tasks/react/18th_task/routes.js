const host = 'https://web-js-react-component-lifecycle-5641830.evaluator1-5.hexlet.io/api';

export default {
  tasksPath: () => [host, 'tasks'].join('/'),
  finishTaskPath: (id) => [host, 'tasks', id, 'finish'].join('/'),
  activateTaskPath: (id) => [host, 'tasks', id, 'activate'].join('/'),
};

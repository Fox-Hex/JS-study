const solution = (path) => {
  // window.location.href = href;
  const { userAgent } = window.navigator;
  const [agentName] = userAgent.split(' ');
  return `${agentName} ${window.location.href}`;
};


console.log(solution('https://hexlet.io')) // => 'Mozilla/5.0 https://hexlet.io'
// Версия браузера может отличаться, тесты не проверяют версию
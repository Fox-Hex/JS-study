const make = (url) => {
    return new URL(url)
}

// setProtocol(data, protocol) - Сеттер. Меняет схему.
// getProtocol(data) - Селектор (геттер). Извлекает схему.
// setHost(data, host) - Сеттер. Меняет хост.
// getHost(data) - Геттер. Извлекает хост.
// setPath(data, path) - Сеттер. Меняет строку запроса.
// getPath(data) - Геттер. Извлекает строку запроса.
// setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
// getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса. Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда, когда в запросе не было такого параметра
// toString(data) - Геттер. Преобразует урл в строковой вид.

const url = make('https://hexlet.io/community?q=low&star=10');

// setProtocol(url, 'http:');
// toString(url); // 'http://hexlet.io/community?q=low'
 
// setPath(url, '/404');
// toString(url); // 'http://hexlet.io/404?q=low'
 
// setQueryParam(url, 'page', 5);
// toString(url); // 'http://hexlet.io/404?q=low&page=5'
 
// setQueryParam(url, 'q', 'high');
// toString(url); // 'http://hexlet.io/404?q=high&page=5'

console.log(url.href);
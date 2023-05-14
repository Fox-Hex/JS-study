class AppError extends Error {}
class AppNetworkError extends AppError {}
class NetworkError extends Error {}

const anyErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof errorInstance) {
    return errorHandler(error)
  }
  throw error
};

const appErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof errorInstance && error instanceof AppError) {
    return errorHandler(error)
  }
  throw error
};

const customErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error.isCustomError === true && !errorInstance) {
    return errorHandler(error)
  }
  throw error
};



const runCode = (action, catcher) => {
  try {
    const act = action()
    return act
  } catch(e) {
    if (catcher) {
      return catcher(e)
    } else {
      throw e
    }
  }
}



// const successAction = () => 'Hello, Hexlet!';
// const failedAction = () => {
//   throw new AppNetworkError('Hexlet is unavailable!');
// };
// const errorHandler = (err) => `"Hello, Hexlet" failed with error: "${err.message}"`;
// const catcher1 = appErrorCatcher(errorHandler, AppNetworkError);
 
// console.log(runCode(successAction, catcher1)); // 'Hello, Hexlet!';
 
// // Выброшена ошибка AppNetworkError, но перенаправлена в errorHandler
// console.log(runCode(failedAction, catcher1)); // '"Hello, Hexlet" failed with error: "Hexlet is unavailable!"';
 
// const catcher2 = appErrorCatcher(errorHandler, NetworkError);
// // Выброшена ошибка AppNetworkError, но она не соответствует NetworkError
// console.log(runCode(failedAction, catcher2)); // Error: 'Hexlet is unavailable!'

const reject = () => {
  throw new NetworkError('Rejected with NetworkError');
};
const defaultCatcher = (err) => `Catched ${err.name}: ${err.message}`;
const catcher3 = appErrorCatcher(defaultCatcher, NetworkError);
console.log(runCode(reject, catcher3)); // Rejected with NetworkError
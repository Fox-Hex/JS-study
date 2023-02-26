// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import camelCase from 'lodash/camelCase';

const normalize = (doc) => {
  const allElements = doc.body.getElementsByTagName("*");

  Array.from(allElements).forEach((elem) => {
    const elemClass = elem.classList;
    elemClass.forEach((value) => {
      elemClass.replace(value, _.camelCase(value));
    });
  });
};

normalize(document);

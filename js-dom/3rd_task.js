const extractData = (object) => {
  const result = Array.from(object.parentNode.body.childNodes);

  return result
    .filter((elem) => elem.tagName === "P")
    .map((elem) => elem.textContent.trim());
};
const data = extractData(document.documentElement);
console.log(data);

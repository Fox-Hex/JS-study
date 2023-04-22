import i18next from 'https://deno.land/x/i18next/index.js'
import onChange from "./src/on-change.js"
import resources from './locales/index.js';

const app = async () => {
  const newInstance = i18next.createInstance()
  await newInstance.init({
    lng: "en",
    debug: true,
    resources: { ...resources },
  });

  // Model
  const state = {
    language: newInstance.language,
    clickCount: 0,
  };

  const container = document.querySelector(".container");

  // Group for buttons
  const btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group");
  btnGroup.setAttribute("role", "group");

  // Button English
  const buttonEnglish = document.createElement("button");
  buttonEnglish.classList.add("btn", "mb-3", "btn-primary");
  buttonEnglish.setAttribute("type", "button");
  buttonEnglish.append("English");

  // Button Russian
  const buttonRussian = document.createElement("button");
  buttonRussian.classList.add("btn", "mb-3", "btn-outline-primary");
  buttonRussian.setAttribute("type", "button");
  buttonRussian.append("Русский");

  // Button Click
  const buttonClick = document.createElement("button");
  buttonClick.classList.add("btn", "btn-info", "mb-3", "align-self-center");
  buttonClick.setAttribute("type", "button");
  buttonClick.append(newInstance.t("count.key", { count: state.clickCount }));

  // Button Reset
  const buttonReset = document.createElement("button");
  buttonReset.classList.add("btn", "btn-warning");
  buttonReset.setAttribute("type", "button");
  buttonReset.append(newInstance.t("reset"));

  // Combine all buttons
  btnGroup.append(buttonEnglish, buttonRussian);
  container.append(btnGroup, buttonClick, buttonReset);

  // View
  const watchedState = onChange(state, (path, curr, prev) => {
    buttonClick.innerHTML = ''
    buttonClick.append(newInstance.t("count.key", { count: state.clickCount }));

    if (curr !== prev) {
      buttonReset.innerHTML = newInstance.t("reset")
      if (curr === 'en') {
        buttonEnglish.classList.remove('btn-outline-primary')
        buttonEnglish.classList.add('btn-primary')
        buttonRussian.classList.remove('btn-primary')
        buttonRussian.classList.add('btn-outline-primary')
      }
      if (curr === 'ru') {
        buttonRussian.classList.remove('btn-outline-primary')
        buttonRussian.classList.add('btn-primary')
        buttonEnglish.classList.remove('btn-primary')
        buttonEnglish.classList.add('btn-outline-primary')
      }
    }
  })

  // Control
  buttonClick.addEventListener('click', () => {
    watchedState.clickCount += 1
  })

  buttonEnglish.addEventListener('click', () => {
    newInstance
      .changeLanguage('en')
      .then(() => watchedState.language = newInstance.language)
  })

  buttonRussian.addEventListener('click', () => {
    newInstance
    .changeLanguage('ru')
    .then(() => watchedState.language = newInstance.language)
  })

  buttonReset.addEventListener('click', () => {
    watchedState.clickCount = 0
  })
}

app()




// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// </head>

// <body>
//   <div class="container card w-25 p-3 m-3">
//   </div>
//   <script type="module" src="9th_task.js"></script>
// </body>

// </html>
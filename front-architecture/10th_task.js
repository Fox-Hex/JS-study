import i18n from 'https://deno.land/x/i18next/index.js'
import onChange from "./src/on-change.js"
import resources from './locales2/index.js';

const languages = ['en', 'ru'];

const handleSwitchLanguage = (state) => (evt) => {
  const { lng } = evt.target.dataset;

  state.lng = lng;
};

const render = (container, watchedState, i18nInstance) => {
  const lngToggler = document.createElement('div');
  lngToggler.classList.add('btn-group');
  lngToggler.setAttribute('role', 'group');

  languages.forEach((lng) => {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    const className = watchedState.lng === lng ? 'btn-primary' : 'btn-outline-primary';
    btn.classList.add('btn', 'mb-3', className);
    btn.setAttribute('data-lng', lng);
    btn.textContent = i18nInstance.t(`languages.${lng}`);
    btn.addEventListener('click', handleSwitchLanguage(watchedState));
    lngToggler.appendChild(btn);
  });

  const counter = document.createElement('button');
  counter.setAttribute('type', 'button');
  counter.classList.add('btn', 'btn-info', 'btn-lg', 'mb-3', 'align-self-center');
  counter.textContent = i18nInstance.t('buttons.counter.count', { count: watchedState.clicksCount });
  counter.addEventListener('click', () => {
    watchedState.clicksCount += 1;
  });

  const reset = document.createElement('button');
  reset.setAttribute('type', 'button');
  reset.classList.add('btn', 'btn-warning');
  reset.textContent = i18nInstance.t('buttons.reset');
  reset.addEventListener('click', () => {
    watchedState.clicksCount = 0;
  });

  container.innerHTML = '';
  container.append(lngToggler, counter, reset);
};

const app = async (container, initialState = {}) => {
  // BEGIN (write your solution here)
  const i18nInstance = i18n.createInstance()
  await i18nInstance.init({
    lng: initialState.lng ? initialState.lng : 'en',
    debug: true,
    resources: { ...resources },
  })

  const state = {
    lng: initialState.lng ? initialState.lng : 'en',
    clicksCount: initialState.clicksCount ? initialState.clicksCount : 0
  }
  // END
  
  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'lng': i18nInstance.changeLanguage(value).then(() => render(container, watchedState, i18nInstance));
        break;
        
        case 'clicksCount': render(container, watchedState, i18nInstance);
        break;
      
      default:
        break;
      }
    });
    
  render(container, watchedState, i18nInstance);
};





const state1 = {
  lng: 'en',
  clicksCount: 0,
}
const state2 = {
  lng: '',
  clicksCount: 0,
}

const container1 = document.querySelector('.container-1')
const container2 = document.querySelector('.container-2')

app(container1, state1)
app(container2, state2)






// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// </head>

// <body>
//   <div class="d-flex">
//     <div class="container-1 card w-25 p-3 m-3">
//     </div>
//     <div class="container-2 card w-25 p-3 m-3">
//     </div>
//   </div>
//   <script type="module" src="10th_task.js"></script>
// </body>

// </html>
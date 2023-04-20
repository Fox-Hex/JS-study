import i18next from 'https://deno.land/x/i18next/index.js'
import onChange from "./src/on-change.js"
import resources from './locales/index.js';

const app = async () => {  
  
  await i18next.init({
    lng: 'en',
    debug: true,
    resources: {...resources}
  })
  
  const state = {
    clickCount: 0
  }

  const container = document.querySelector('.container')
  const btnGroup = document.createElement('div')
  btnGroup.classList.add('btn-group')
  btnGroup.setAttribute('role', 'group')
  
  const buttonEnglish = document.createElement('button')
  buttonEnglish.classList.add('btn', 'mb-3', 'btn-primary')
  buttonEnglish.setAttribute('type', 'button')
  buttonEnglish.append('English')
  
  const buttonRussian = document.createElement('button')
  buttonRussian.classList.add('btn', 'mb-3', 'btn-outline-primary')
  buttonRussian.setAttribute('type', 'button')
  buttonRussian.append('Русский')
  
  const buttonClick = document.createElement('button')
  buttonClick.classList.add('btn', 'btn-info', 'mb-3', 'align-self-center')
  buttonClick.setAttribute('type', 'button')
  buttonClick.append(i18next.t('count.key', { count: state.clickCount }))
  
  const buttonReset = document.createElement('button')
  buttonReset.classList.add('btn', 'btn-warning')
  buttonReset.setAttribute('type', 'button')
  buttonReset.append(i18next.t('reset'))

  btnGroup.append(buttonEnglish, buttonRussian)
  container.append(btnGroup,buttonClick, buttonReset)

}

app()

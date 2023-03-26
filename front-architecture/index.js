// const app = () => {
//   const result = document.getElementById('result')
//   const button = document.querySelector('#increment')

//   button.addEventListener('click', () => {
//     result.textContent = parseInt(result.textContent, 10) +1
//   })
// }

// const articleCount = () => {
//   const articles = document.querySelectorAll('.article')
//   return articles.length
// }


// app()
// document.querySelector('#articleCount').innerHTML = `count of articles: ${articleCount()}`


const app = () => {
  const state = {
    registrationForm: {
      valid: null,
      errors: [],
    },
  };
  
  const input = document.querySelector(".phone");
  const submit = document.querySelector(".submit");
  
  input.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
  
    state.registrationForm.value = inputValue;
  
    if (inputValue.match(/^\d+$/)) {
      state.registrationForm.valid = true;
      state.registrationForm.errors = [];
    } else {
      state.registrationForm.valid = false;
      state.registrationForm.errors.push("wrong format");
    }
  
    submit.disabled = !state.registrationForm.valid;
  
    if (state.registrationForm.valid) {
      input.style.border = null;
    } else {
      input.style.border = "thick solid red";
    }
  });  
}

app()
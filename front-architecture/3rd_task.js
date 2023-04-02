const laptops = [
  {
    model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
  },
  {
    model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
  },
  {
    model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
  },
];



const app = (laptops) => {

  const state = {
    goods: laptops,
    change(proc, mem, fMin, fMax) {
      this.goods = laptops.filter((elem) => {
        if (
          (proc === elem.processor || proc === '') &&
          (Number(mem) === elem.memory || mem === '') &&
          (Number(fMin) <= elem.frequency && (Number(fMax) >= elem.frequency || fMax === ''))
          )
        {return true}
      })
    }
  }

  const input = document.querySelectorAll('input')
  const select = document.querySelectorAll('select')

  const proc = document.querySelector('[name="processor_eq"]')
  const mem = document.querySelector('[name="memory_eq"]')
  const fMin = document.querySelector('[name="frequency_gte"]')
  const fMax = document.querySelector('[name="frequency_lte"]')

  class View {
    init() {
      this.resultField = document.querySelector('.result')
      this.ul = document.createElement('ul')
    }
    render(state) {
      this.resultField.innerHTML = ''
      this.ul.innerHTML = ''
      if (state.goods.length > 0) {
        state.goods.forEach((elem) => {
            const li = document.createElement('li')
            li.append(elem.model)
            this.ul.append(li)
        })
        this.resultField.append(this.ul)
      }
    }
  }

  const view = new View()
  view.init()
  view.render(state)

  select.forEach((elem) => elem.addEventListener('change', () => {
    state.change(proc.value, mem.value, fMin.value, fMax.value)
    view.render(state)
  }))

  input.forEach((elem) => elem.addEventListener('input', () => {
    state.change(proc.value, mem.value, fMin.value, fMax.value)
    view.render(state)
  }))

}

app(laptops)



// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//   <!-- Bootstrap CSS -->
//   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
// </head>

// <body>
//   <div class="container m-3">
//     <div class="row">
//       <div class="col-6">
//         <form>
//           <div>
//             <label>
//               Processor
//               <select name="processor_eq">
//                 <option value="">Select</option>
//                 <option value="intel">Intel</option>
//                 <option value="amd">AMD</option>
//               </select>
//             </label>
//           </div>
//           <div>
//             <label>
//               Memory
//               <select name="memory_eq">
//                 <option value="">Select</option>
//                 <option value="8">8</option>
//                 <option value="16">16</option>
//                 <option value="32">32</option>
//               </select>
//             </label>
//           </div>
//           <div>
//             <label>
//               Frequency Min
//               <input type="number" name="frequency_gte" min="1" max="5" value="">
//             </label>
//           </div>
//           <div>
//             <label>
//               Frequency Max
//               <input type="number" name="frequency_lte" min="1" max="5" value="">
//             </label>
//           </div>
//         </form>
//       </div>
//       <div class="col-6">
//         <div class="result"></div>
//       </div>
//     </div>
//   </div>
//   <script type="module" src="3rd_task.js" defer></script>
// </body>

// </html>

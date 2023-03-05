const generateField = () => {
  const tableEl = document.createElement("table");

  tableEl.className = "table-bordered";
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = "py-2 px-3";
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

const div = document.querySelector(".root");
div.append(generateField());

let counter = 0;
const table = document.querySelector(".table-bordered");
table.addEventListener("click", (e) => {
  
  if (counter % 2 === 0 && e.target.textContent !== "o") {
    e.target.innerHTML = "x";
  }

  if (counter % 2 !== 0 && e.target.textContent !== "x") {
    e.target.innerHTML = "o";
  }
  counter += 1;
});



// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
//   </head>
//   <body>
//     <div class="container m-3">
//       <div class="root"></div>
//     </div>
//     <script type="module" src="10th_task.js" ></script>
//   </body>
// </html>
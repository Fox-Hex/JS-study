const server = new URL(
  "https://web-js-dom-ajax-5127456.evaluator7-5.hexlet.io/"
);

const inputs = document.querySelectorAll("input");
inputs.forEach((elem) => {
  elem.addEventListener("input", (event) => {
    server.pathname = event.target.getAttribute("data-autocomplete");
    server.search = `search=${event.target.value}`;

    const name = event.target.getAttribute("data-autocomplete-name");
    const field = document.querySelector(
      `ul[data-autocomplete-name="${name}"]`
    );

    fetch(server).then((response) => {
      response.json().then((arr) => {
        if (arr.length === 0) {
          field.innerHTML = "<li>Nothing</li>";
        } else {
          field.innerHTML = "";
          arr.forEach((elem) => {
            const li = document.createElement("li");
            li.innerHTML = elem;
            field.append(li);
          });
        }
      });
    });
  });
});


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
//   </head>
//   <body>
//     <div class="container">
//       <div class="row">
//         <div class="col-6">
//           <form class="form-inline">
//             <div class="form-group">
//               <label>Capital</label>
//               <input class="ml-2 form-control" type="text" data-autocomplete-name="capital" data-autocomplete="/capitals.json">
//             </div>
//           </form>
//         </div>
//         <div class="col-6">
//           <ul data-autocomplete-name="capital">
//             <li>Nothing</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div class="container">
//       <div class="row">
//         <div class="col-6">
//           <div class="form-inline">
//             <div class="form-group">
//               <label>Country</label>
//               <input class="ml-2 form-control" type="text" data-autocomplete-name="country" data-autocomplete="/countries.json">
//             </div>
//           </div>
//         </div>
//         <div class="col-6">
//           <ul data-autocomplete-name="country">
//             <li>Nothing</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <script type="module" src="11th_task.js" ></script>
//   </body>
// </html>

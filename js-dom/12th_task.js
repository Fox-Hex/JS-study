$('.carousel-control-prev').click((event) => {
  const list = $(event.currentTarget).siblings('.carousel-inner').children()
  const active = $(event.currentTarget).siblings('.carousel-inner').children('.active')
  const prev = (list[0] !== active[0] ? active.prev() : list.last())
  
  active.removeClass('active')
  prev.addClass('active')
})

$('.carousel-control-next').click((event) => {
  const list = $(event.currentTarget).siblings('.carousel-inner').children()
  const active = $(event.currentTarget).siblings('.carousel-inner').children('.active')
  const next = (list[list.length - 1] !== active[0] ? active.next() : list.first())

  active.removeClass('active')
  next.addClass('active')
})



// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.4/holder.min.js" crossorigin="anonymous"></script>
//     <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
//   </head>
//   <body>
//     <div class="container m-3">
//       <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//         <div class="carousel-inner" role="listbox">
//           <div class="carousel-item active">
//             <img class="d-block w-100" src="" data-src="holder.js/1000x400?auto=yes&bg=555&fg=333&text=First slide" alt="First slide">
//           </div>
//           <div class="carousel-item">
//             <img class="d-block w-100" src="" data-src="holder.js/1000x400?auto=yes&bg=555&fg=333&text=Second slide" alt="Second slide">
//           </div>
//           <div class="carousel-item">
//             <img class="d-block w-100" src="" data-src="holder.js/1000x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
//           </div>
//         </div>
//         <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="sr-only">Previous</span>
//         </a>
//         <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="sr-only">Next</span>
//         </a>
//       </div>

//       <div id="carouselExampleControls2" class="carousel slide mt-3" data-ride="carousel">
//         <div class="carousel-inner" role="listbox">
//           <div class="carousel-item active">
//             <img class="d-block w-100" src="" data-src="holder.js/1000x400?auto=yes&bg=555&fg=333&text=First slide 2" alt="First slide">
//           </div>
//           <div class="carousel-item">
//             <img class="d-block w-100" src="" data-src="holder.js/1000x400?auto=yes&bg=555&fg=333&text=Second slide 2" alt="Second slide">
//           </div>
//           <div class="carousel-item">
//             <img class="d-block w-100" src="" data-src="holder.js/1000x400?auto=yes&bg=555&fg=333&text=Third slide 2" alt="Third slide">
//           </div>
//         </div>
//         <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="sr-only">Previous</span>
//         </a>
//         <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//     <script type="module" src="./src/index.js" ></script>
//   </body>
// </html>

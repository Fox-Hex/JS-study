const each = (objects, callback) => {
  objects.forEach(element => callback.call(element));
};

const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];
each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});
 
console.table(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];

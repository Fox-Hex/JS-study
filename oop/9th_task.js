class Cart {
  items = []
  addItem(item, count) {
    this.items.push({item, count})
  }
  getItems() {
    return this.items
  }
  getCost() {
    return this.items.reduce((sum, elem) =>sum + elem.item.price * elem.count, 0)
  }
  getCount() {
    return this.items.reduce((sum, elem) => sum + elem.count, 0)
  }
}


const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart);
console.log(cart.getItems().length)
console.log(cart.getCost()) 
console.log(cart.getCount()) 
console.table(cart.getItems())
// [
//   { item: { name: 'car', price: 3 }, count: 5 },
//   { item: { name: 'house', price: 10 }, count: 2 },
// ]

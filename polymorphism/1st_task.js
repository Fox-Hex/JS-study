class Node {
  constructor(value, node = null) {
    this.next = node;
    this.value = value;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}

const list = new Node(1, new Node(2, new Node(3)))
console.log(list.getNext().getNext().getValue());

const reverse = (list) => {
  return new Node(
    list.getNext() ? reverse(list.getNext()) : list.getValue(),
    reverse(list.getNext())
  )
}

console.log(reverse(list));
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

const list1 = new Node(1)
const list2 = new Node(1, new Node(2, new Node(3)))

const reverse = (list) => {
  let reversedList = null
  let currentList = list

  while (currentList) {
    reversedList = new Node(currentList.getValue(), reversedList)
    currentList = currentList.getNext()
  }

  return reversedList
}

console.log(reverse(list1));
console.log(reverse(list2));
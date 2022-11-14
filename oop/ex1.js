class Node {
  constructor(key, left, right) {
    this.key = key
    this.left = left
    this.right = right
  }
  getKey() {
    if (!this.key) return null
    return this.key
  }
  getLeft() {
    if (!this.left) return null
    return this.left
  }
  getRight() {
    if (!this.right) return null
    return this.right
  }  
  search(key, node = this) {
    if (key === node.getKey()) {
      return node
    }
    if (key > node.getKey()) {
      if (!node.getRight()) return null
      return this.search(key, node.getRight())
    }
    if (key < node.getKey()) {
      if (!node.getLeft()) return null
      return this.search(key, node.getLeft())
    }
  }
}

const tree = new Node(9,
  new Node(4,
    new Node(3),
    new Node(6,
      new Node(5),
      new Node(7))),
  new Node(17,
    null,
    new Node(22,
      new Node(20),
      null)));

const node = tree.search(20);
console.log(node);
console.log(node.getKey()) // 6
console.log(node.getLeft().getKey()) // 5
console.log(node.getRight().getKey()) // 7
 
console.log(tree.search(35)) // null
console.log(tree.search(3).getLeft()) // null

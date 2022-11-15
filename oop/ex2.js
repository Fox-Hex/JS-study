class Node {
  constructor(key = null, left = null, right = null) {
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

  insert(key) {

    if (this.getKey() === null) {
      this.key = key
    } else {

      if (key > this.getKey()) {
        if (this.getRight() === null) {
          this.right = new Node(key)
        } else {
          this.right.insert(key)
        }
      }

      if (key < this.getKey()) {
        if (this.getLeft() === null) {
          this.left = new Node(key)
        } else {
          this.left.insert(key)
        }
      }

    }

  }
}

const tree = new Node();
tree.insert(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);
console.log(tree);
console.log(tree.getKey()); // 9
console.log(tree.getLeft().getKey()); // 4
console.log(tree.getRight().getKey()); // 17
console.log(tree.getLeft().getLeft().getKey()); // 3
console.log(tree.getLeft().getRight().getKey()); // 6

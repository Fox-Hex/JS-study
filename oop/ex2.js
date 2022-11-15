class Node {
  constructor(key, left = null, right = null) {
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
  insert(key, node = this) {
    if (!node.key) {
      this.key = key
    }
    if (key > node.getKey()) {}
    
  }
}

const tree = new Node();
tree.insert(9);

console.log(tree);
// tree.insert(17);
// tree.insert(4);
// tree.insert(3);
// tree.insert(6);
 
// tree.getKey(); // 9
// tree.getLeft().getKey(); // 4
// tree.getRight().getKey(); // 17
// tree.getLeft().getLeft().getKey(); // 3
// tree.getLeft().getRight().getKey(); // 6

const tree = {
    name: 'div',
    type: 'tag-internal',
    className: 'hexlet-community',
    children: [
      {
        name: 'div',
        type: 'tag-internal',
        className: 'old-class',
        children: [],
      },
      {
        name: 'div',
        type: 'tag-internal',
        className: 'old-class',
        children: [],
      },
    ],
  };

  const changeClass = (tree, oldClassName, newClassName) => {
    const newTree = structuredClone(tree)

    const changed = (tree) => {
        if (tree.className === oldClassName) {
            tree.className = newClassName
        }
        if (tree.children) {
            tree.children.map((node) => changed(node, oldClassName, newClassName))
        }
        return tree
    }

    return changed(newTree)
  }

  const tree2 = changeClass(tree, 'old-class', 'new-class');
  console.log(tree2);
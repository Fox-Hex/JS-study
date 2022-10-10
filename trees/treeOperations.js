const changeOwner = (tree, newOwner) => {
    const newName = getName(tree)
    const newMeta = _.cloneDeep(getMeta(tree))
    newMeta.owner = newOwner

    if (isFile(tree)) {
        return mkfile(newName, newMeta)
    }

    const newChildren = getChildren(tree).map((child) => changeOwner(child, newOwner))

    return mkdir(newName, newChildren, newMeta)
}



const getNodesCount = (tree) => {
    if (isFile(tree)) {
        return 1
    }
    const descendantCount = getChildren(tree).map((child) => getNodesCount(child))
    return 1 + _.sum(descendantCount)
}



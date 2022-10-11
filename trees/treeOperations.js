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






const getFilesCount = (node) => {
    if (isFile(node)) {
        return 1
    }
    const agro = getChildren(node).map(getFilesCount)
    return _.sum(agro)
}

const getSubdirectoriesInfo = (tree) => {
    const result = getChildren(tree)
        .filter(isDirectory)
        .map((child) => [getName(child), getFilesCount(child)])
    return result
}




const getEmptyDirs = (tree) => {
    const name = getName(tree)
    const children = getChildren(tree)

    if (children.length ===0) {
        return name
    }

    const checkDir = children
        .filter((child) => !isFile(child))
        .flatMap(getEmptyDirs)
    
    return checkDir
}
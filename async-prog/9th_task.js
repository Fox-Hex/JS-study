import fsp from 'fs/promises'

const getTypes = (paths) => {
    const initPromise = Promise.resolve([])

    const result = paths.reduce((acc, path) => {
        const newAcc = acc.then((content) => fsp.stat(path)
            .then((stat) => stat.isDirectory() ? content.concat('directory') : content.concat('file'))
            .catch(() => content.concat(null)))

        return newAcc
    }, initPromise)

    return result
}

getTypes(['./files/file1', './files/', 'undef']).then(console.log);
// ['directory', 'file', null]
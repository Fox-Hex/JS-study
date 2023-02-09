import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';

const getDirectorySize = (filePaths) => {
    const promises = fsp.readdir(filePaths)
        .then((files) => files.map((elem) => fsp.stat(path.join(filePaths, elem))))
        .then((prom) => Promise.all(prom))
        .then((stats) => _.sumBy(stats
            .filter((elem) => !elem.isDirectory())
            .map((elem) => elem.size)))
    return promises
}

getDirectorySize('./files').then(console.log);
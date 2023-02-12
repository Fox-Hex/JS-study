import fsp from 'fs/promises';

const exchange = async (path1, path2) => {
    const data1 = await fsp.readFile(path1)
    const data2 = await fsp.readFile(path2)
    await fsp.writeFile(path1, data2)
    await fsp.writeFile(path2, data1)
}

exchange('./files/file1', './files/file2');
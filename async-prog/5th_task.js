import fs from 'fs'
import async from 'async'
import _ from 'lodash'
import path from 'path'


const getDirectorySize = (filePaths, cb) => {
  fs.access(filePaths, (_err0) => {
    if (_err0) {
      cb(_err0)
      return;
    }

    fs.readdir(filePaths, { withFileTypes: true }, (_err1, data) => {
      if (_err1) {
        console.log(_err1);
        return;
      }

      const files = data
        .filter((elem) => elem.isFile())
        .map((elem) => elem.name)
        .map((elem) => path.join(filePaths, elem));

      async.map(files, fs.stat, (_err2, result) => {
        cb(_err2, _.sumBy(result.map((elem) => elem.size)));
      });
    });
  });
};


getDirectorySize('./files', (err, size) => {
  console.log(size);
});
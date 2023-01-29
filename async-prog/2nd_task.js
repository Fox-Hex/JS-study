import fs from 'fs'

const writer = (filepath, data, callback) => {
  fs.writeFile(filepath, data, (err) => {
    if (err) throw err;
    callback();
  });
};



writer('./files/myfile', 'some data', () => {
  console.log('success');
});
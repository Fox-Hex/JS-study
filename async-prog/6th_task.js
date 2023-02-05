import fs from 'fs'

const watch = (filepath, time, cb) => {
  let curent = Date.now();

  const id = setInterval(() => {
    fs.stat(filepath, (_err2, newState) => {
      if (_err2) {
        clearInterval(id)
        cb(_err2);
        return;
      }

      if (curent < newState.mtimeMs) {
        cb(null);
        curent = Date.now();
      }
    });
  }, time);

  return id;
};

const id = watch('./files/file1', 500, (err) => {
  console.log('Wow!');
});
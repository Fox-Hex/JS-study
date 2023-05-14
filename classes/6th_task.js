import fs from 'fs';

class FileError extends Error {}
class NotExistsError extends FileError {}
class NotReadableError extends FileError {}

class File {
  constructor(path) {
    this.path = path
  }

  read() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8')
      return data
    }
    catch {
      if (!fs.existsSync(this.path)) {
        throw new NotExistsError
      } else if (!fs.accessSync(this.path)) {
        throw new NotReadableError
      } else {
        throw FileError
      }
    }
  }
}

const readFiles = (filepaths) => {
  const result = filepaths.map((elem) => {
    try {
      return fs.readFileSync(elem, 'utf-8')
    } catch {
      return null
    }
  })
  return result
};

const values = readFiles(['/etc/fstab', '/etc/unknown']);
console.table(values); // => ["какие-то данные", null]

// const file1 = new File('/etc/fstab');
// console.log(file1.read()); // "какие-то данные"
 
// const file2 = new File('/etc/nonexists');
// file2.read(); // NotExistsError
 
// const file3 = new File('/etc/shadow');
// file3.read(); // NotReadableError

import fs from 'fs';

class FileInfo {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileStat = fs.statSync(filePath);
  }

  getSize() {
    return this.fileStat.size;
  }
}

class SmartFileInfo extends FileInfo {
  getSize(unit = 'b') {
    const measureUnits = {
      b: (bits) => bits,
      kb: (bits) => bits/1024,
    }
    try {
      const size = super.getSize()
      return measureUnits[unit](size)
    } catch(e) {
      throw new Error(`unknown unit type: ${unit}`)
    }
  }
}

const file = new SmartFileInfo('/etc/hosts');
console.log(file.getSize()); // 19
console.log(file.getSize('b')); // 19
console.log(file.getSize('kb')); // 0.0185546875
console.log(file.getSize('udav')); // Error
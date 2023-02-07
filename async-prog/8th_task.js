import fsp from 'fs/promises'


const touch = (filepath) => {
   fsp.access(filepath)
    .catch(() => {fsp.writeFile(filepath, '')})
}


touch('./files/file3').then(() => console.log('created!'));
// Повторный вызов успешно завершается
touch('./files/myfile').then(() => console.log('created!'));

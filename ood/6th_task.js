const protect = (obj) => {

  const handlers = {

    get: (target, prop) => {
      if (prop.startsWith('_')) {
        throw 'Error'
      }
      if (prop in target) {
        if (typeof target[prop] === 'function') {
          return target[prop].bind(target)
        }
        return target[prop]
      } else {
        throw 'Error'
      }
    },
    
    set: (target, prop, value, receiver) => {
      if (prop.startsWith('_')) {
        throw 'Error'
      }
      if (prop in target) {
        target[prop] = value
        return true
      }
    }
  }

  return new Proxy(obj, handlers)
}



class Course {
  constructor(name) {
    this._name = name;
  }
 
  getName() {
    return this._name;
  }
}
 
const course = new Course('Object-oriented design');
const protectedCourse = protect(course);
 
console.log(course.getName()); // "Object-oriented design"
console.log(protectedCourse.getName()); // "Object-oriented design"
console.log(course._name); // "Object-oriented design"
console.log(course._nonExists); // undefined
 
console.log(protectedCourse._name); // Error
protectedCourse._name = 'OOD'; // Error
console.log(protectedCourse._nonExists); // Error
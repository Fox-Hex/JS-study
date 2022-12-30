const protect = (obj) => {
  return new Proxy(obj)
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
 
course.getName(); // "Object-oriented design"
protectedCourse.getName(); // "Object-oriented design"
course._name; // "Object-oriented design"
course._nonExists; // undefined
 
protectedCourse._name; // Error
protectedCourse._name = 'OOD'; // Error
protectedCourse._nonExists; // Error
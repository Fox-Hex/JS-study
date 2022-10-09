const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};
const getX = (point) => point.x;
const getY = (point) => point.y;
const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

const makeRectangle = (point, width, height) => {
    const point1 = point
    const point2 = {x: point.x + width, y: point.y}
    const point3 = {x: point.x + width, y: point.y - height}
    const point4 = {x: point.x, y: point.y - height}

    return {point1, point2, point3, point4}
}

const getStartPoint = (rectangle) => makeDecartPoint(getX(rectangle), getX(rectangle))

const getWidth = (rectangle) => {
    const start = makeDecartPoint(getX(rectangle.point1), getY(rectangle.point1))
    const end = makeDecartPoint(getX(rectangle.point2), getY(rectangle.point2))
    return end - start
}

const getHeight = (rectangle) => {
    const start = makeDecartPoint(getX(rectangle.point4), getY(rectangle.point4))
    const end = makeDecartPoint(getX(rectangle.point1), getY(rectangle.point1))
    return end - start
}

const containsOrigin = (rectangle) => {
    if (
        getQuadrant(rectangle.point1) === 2 &&
        getQuadrant(rectangle.point2) === 1 &&
        getQuadrant(rectangle.point3) === 4 &&
        getQuadrant(rectangle.point4) === 3
    ) {
        return true
    }
    return false
}


p = makeDecartPoint(0, 1);

rectangle = makeRectangle(p, 4, 5);
console.log(containsOrigin(rectangle)); // false

rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
console.log(containsOrigin(rectangle2)); // true

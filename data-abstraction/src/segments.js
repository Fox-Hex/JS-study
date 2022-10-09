const makeDecartPoint = (x, y) => {
    const point = { x, y };
    return point;
  };
  const getX = (point) => point.x;
  const getY = (point) => point.y;



const makeSegment = (point1, point2) => {
    return {beginPoint: point1, endPoint: point2}
}

const getMidpointOfSegment = (segment) => {
    const beginPoint = getBeginPoint(segment)
    const endPoint = getEndPoint(segment)
    const x = (getX(beginPoint) + getX(endPoint)) / 2
    const y = (getY(beginPoint) + getY(endPoint)) / 2
    return makeDecartPoint(x, y)
}

const getBeginPoint = (segment) => segment.beginPoint

const getEndPoint = (segment) => segment.endPoint



const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(2, 3);
segment = makeSegment(beginPoint, endPoint);
console.log(segment);
console.log(getMidpointOfSegment(segment)) // (1.5, 1)
console.log(getBeginPoint(segment)) // (3, 2)
console.log(getEndPoint(segment)) // (0, 0)
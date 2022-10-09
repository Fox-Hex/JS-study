const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };

  return point;
};

const getX = (point) => {
    const x = point.radius * Math.cos(point.angle)
    return Math.round(x)
}

const getY = (point) => {
    const y = point.radius * Math.sin(point.angle)
    return Math.round(y)
}

const x = 4;
const y = 8;

// point хранит в себе данные в полярной системе координат
const point = makePoint(x, y);

// Здесь происходит преобразование из полярной в декартову
console.log(getX(point))
console.log(getY(point))
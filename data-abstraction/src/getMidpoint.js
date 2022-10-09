const getMidpoint = (point1, point2) => {
    const x = (point1.x + point2.x) / 2
    const y = (point1.y + point2.y) / 2
    return {x, y}
}

const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
console.log(getMidpoint(point1, point2));
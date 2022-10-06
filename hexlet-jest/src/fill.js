const fill = (coll, value, start = 0, end = coll.length) => {
  for (let i = 0; i < coll.length; i++) {
    if (i >= start && i < end) {
      coll[i] = value;
    }
  }
  return coll;
};
export default fill;

function calcOffset(outer, inner) {
  return (outer - inner) / 2;
}
function scale(scale, width) {
  return scale * width;
}

module.exports = {
  calcOffset,
  scale,
};
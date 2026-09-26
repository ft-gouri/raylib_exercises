function sqr(value) {
  return value * value;
}

function isIntersecting(x1, y1, r1, x2, y2, r2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const dr = r1 + r2;
  return sqr(dx) + sqr(dy) <= sqr(dr);
}

module.exports = {
  sqr,
  isIntersecting
};
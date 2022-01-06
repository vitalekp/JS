function compareSums(a, b, c, d) {
  return Boolean(sum(a, b) > sum(c, d))
}

function sum(from, to) {
  return from + to;
}
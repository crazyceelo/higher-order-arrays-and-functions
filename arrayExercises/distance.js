function foldTo(distance) {
  let width = 0.0001;

  if (distance <= 0) return null;

  if (distance < width) return 0;

  return Math.log2((distance / width) * 2) | 0;
}

console.log(foldTo(31));

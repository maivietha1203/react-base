export function calculateWinner(cells) {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c, d] = lines[index];
    if (
      cells[a] &&
      cells[a] === cells[b] &&
      cells[a] === cells[c] &&
      cells[a] === cells[d]
    ) {
      return cells[a];
    }
  }
  return null;
}

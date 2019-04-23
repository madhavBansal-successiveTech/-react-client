export const getRandomNumber = max => Math.floor(Math.random() * max)
export const getNextRoundRobin = (total, current) => {
  if (total - 1 === current) return 0;
  current += 1;
  return current;
}

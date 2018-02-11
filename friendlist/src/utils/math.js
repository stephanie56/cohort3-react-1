export const calAvergeAge = list => {
  const sumOfAges = list.reduce((acc, friend) => acc += friend.age, 0);
  return Math.round(sumOfAges / list.length);
}

// 881. Boats to Save People

var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  let boatCount = 0;
  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      if (people[j] <= limit) {
        j--;
      } else {
        i++;
      }
    }
    boatCount++;
  }
  return boatCount;
};

const people = [1, 2];
const limit = 3;
const result = numRescueBoats(people, limit);
console.log(result);

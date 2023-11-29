var intersect = function (nums1, nums2) {
  const array = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        array.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }
    }
  }
  return array;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const output = intersect(nums1, nums2);
console.log(output);

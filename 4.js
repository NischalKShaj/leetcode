var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let totalLength = m + n;
  let mid = Math.floor(totalLength / 2);
  let isEven = totalLength % 2 === 0;

  let i = 0,
    j = 0,
    count = 0;
  let prev, curr;
  while (count <= mid) {
    prev = curr;
    if (i < m && (j >= n || nums1[i] <= nums2[j])) {
      curr = nums1[i];
      i++;
    } else {
      curr = nums2[j];
      j++;
    }
    count++;
  }
  if (isEven) {
    return (prev + curr) / 2;
  } else {
    return curr;
  }

  //   simple solution
  //   let newArr = [...nums1, ...nums2];
  //   newArr.sort((a, b) => a - b);
  //   let mid = Math.floor(newArr.length / 2);
  //   if (newArr.length % 2 === 0) {
  //     return newArr[mid - 1] + newArr[mid] / 2;
  //   } else {
  //     return newArr[mid];
  //   }
};

let nums1 = [1, 3];
let nums2 = [2];

let result = findMedianSortedArrays(nums1, nums2);
console.log("result", result);

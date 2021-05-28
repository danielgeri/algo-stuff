const assert = require('assert')

const array = [0,1,2,4,5,2,0]
// peak is a number where the left and right side is less than the value at i
// 5 is peak becuase 4 < 5 && 5 > 2
// assume that there is one peak
// goal: find the peak in the array. each array is guaranteed to have 1 and only 1 peak
// return the index of the peak

// iterative approach
// function findPeak(arr) {
//   for(let i = 1; i < ( arr.length - 1 ); i++) {
//     if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
//       return i
//     }
//   }
// }


function findPeak(arr) {
	findPeakHelper(a, 0, arr.length - 1)
}

function findPeakHelper(arr, startIdx, endIdx) {
	const pivotIndex = Math.floor( ((endIdx - startIdx) + startIdx) / 2 )

  // Base Case
  if (arr[pivotIndex - 1] < arr[pivotIndex] && arr[pivotIndex + 1] < arr[pivotIndex]) {
    return pivotIndex;
  }

  // We are on the incline
  if (arr[pivotIndex < arr[pivotIndex + 1]]) {
    findPeakHelper(arr, pivotIndex + 1, endIdx)
  }
}


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual(findPeak(array), 4)
    });
  });
});

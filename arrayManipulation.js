// TASK 1
function arrayManipulation(arr) {
    return arr.map((num) => {
      if (num % 2 === 0) {
        return num * num; // Square even numbers
      }
      return num * 3; // Triple odd numbers
    });
  }
  
  // Solution
  const inputArray = [9, 4, 0, 5];
  const results = arrayManipulation(inputArray);
  console.log(results);

// Task 2
function formatArrayStrings(strArr, numArr) {
    return strArr.map((str, index) => {
      const num = numArr[index];
      if (num % 2 === 0) {
        return str.toUpperCase(); // Capitalize if number is even
      }
      return str.toLowerCase(); // Convert to lowercase if number is odd
    });
  }
  
  //solution
  export const names = ["Fred", "Alberta", "Alice", "Cecil"];
  export const modifiedNames = formatArrayStrings(names, results);
  console.log(modifiedNames);

  
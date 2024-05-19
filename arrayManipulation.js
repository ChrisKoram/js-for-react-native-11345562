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
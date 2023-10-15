function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i= 0; i<array.length;i++){
    let num = array[i]

    for(let b= i+1; b<array.length;b++){
        if((num+array[b])=== target) return true

    }
}
return false
}

/* 
  Write the Big O time complexity of your function here
  O(n*n)
*/

/* 
  Add your pseudocode here
*/
function hasTargetSum(array,target){
  for(let i=0;i<array.length;i++){
    const number = target -array[i]
    for(let b =i+1;b<array.length; b++){
      if(number === array[b])return true
    }
  }
  return false

}

/*
  Add written explanation of your solution here
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

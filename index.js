
function sum(fN, tN) {
 
  
  if (fN === tN) {return fN}
  
  
  return fN + sum((fN+1), tN);

}


module.exports = sum;

/*

    Start by thinking of and writing out the base case: where the function does not 
    need to call itself.
    
    After writing out the base case, run the tests and make sure that the base 
    case tests pass before proceeding to solve the recursive case.
    
    Instead of writing your own driver/tester code for your function, use the 
    provided tests at each step to check how you are progressing.
    
    Make sure all the tests are passing before submitting the solution.
    Create a gist on GitHub with your function in order to submit your code.
    
    Do not use any loops like for or while.

Good luck! */
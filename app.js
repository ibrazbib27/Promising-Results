// ***************Promise.then() Chaining****************

// ***************OBJECTIVE #2****************
/*
let mathStuff = slowMath.add(2,6);
mathStuff.then((result) => {
    console.log(result);
    return slowMath.multiply(result, 2);
}).then((result) => {
    console.log(result);
    return slowMath.divide(result, 4);
}).then((result) => {
    console.log(result);
    return slowMath.subtract(result, 3);
}).then((result) => {
    console.log(result);
    return slowMath.add(result, 98);
}).then((result) => {
    console.log(result);
    return slowMath.remainder(result, 2);
}).then((result) => {
    console.log(result);
    return slowMath.multiply(result, 50);
}).then((result) => {
    console.log(result);
    return slowMath.remainder(result, 40);
}).then((result) => {
    console.log(result);
    return slowMath.add(result, 32);
}).then((result) => {
    console.log(`The final result is ${result}`);   
}).catch((e) => {
     console.log(e);
});
*/
// ***************OBJECTIVE #4****************
/*
When we change the first step of the Promise chain operation and pass 1 and 1 as parameters, instead of 6 and 2, to the slowMath add function (to be specific slowMath.add(a,b)) we end up having an error message displayed in the console log ('Error: Error adding values -2 and 98.') after returning slowMath.add(result, 98). Just to be specific all the results from the function call in the promise chain have their results logged up until the slowMath.add(result, 98) is rejected, which just skips the rest of the .then() operations, beacuse the .then() function calls that are present in the code only have success function calls in each of their respective parameters. After we retun a function within a .then() call and then add a .then() to that previous call  the result that is returned at the end of the .then() calls bind to the successbfunction parameter in the next .then() call. since we do not have any reject function calls as a parameter in any of the .then() calls we skip past the rest of .then() calls until we reach the .catch(e) call at the end of the chain which accepts a rejected function call as a paramter and then we have out error message logged and the promise chain operation ends. 
Passing any negative parameter value into any of the SlowMath functions results in rejection. In our case we passed the returned result of slowMath.subtract(result, 3), which yielded negative, into slowMath.add(result, 98) which initiated the proccess that I explained earlier.
*/






//**********************Async/Await**********************
/*
async function doMath(){
try{
  let result = await
  slowMath.add(6,2);
 
  console.log(result);
  
 result = await slowMath.multiply(result, 2);
  console.log(result);
    
result = await slowMath.divide(result, 4); 
 console.log(result);

result = await slowMath.subtract(result, 3);
  console.log(result);
    
result = await slowMath.add(result, 98);
 console.log(result);
    

result = await slowMath.remainder(result, 2);
  console.log(result);
    
result = await slowMath.multiply(result, 50);
 console.log(result);

result = await slowMath.remainder(result, 40);
  console.log(result);
    
result = await slowMath.add(result, 32);
 console.log(`The final result is ${result}`);
 
}
catch (e) {
        console.log(e);
    }
       
}
doMath(); 
*/

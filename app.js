//Promise.then()
/*
upon changing the parameters the first  callback methos in the promise chain to the following, slowMath.add(1,1) the chain eventually gets rejected and produces an error message when initaing the .then() after slowMath.add(result, 98) executes. the reason the chain SlowMath function was rejected was due to the fact that a negative value was passed in as a paramter into the function, and if eith parameter is negative then the promise returns an error message. It is important to not that a negative value was passed as a parameter as a result of the execution of the previous SlowMath function, slowMath.subtract(result, 3), returning a negative value and that negative value was passed in as a parameter into add function weeexecuted the following code, return slowMath.add(result, 98) the promise detects a negative paramter values and refects the promise and returns an error message. Once a promise rejected the next procuedure is to find an error handler and it does so by locating the .catch() method at the end, that's where our error was logged, and just to emphasise once an error was detetcted in our promise chain the rest of the .then() methods in the chain were skipped and not proccessed, due to the fact that there were no error handling callback methods passed in as parameters within the .then() method blocks. Due to the .then() method blocks only containing success callback method parameters they were disregarded and the error handling method at the end of the chain, .catch(), was proccessed, since it's callback function handles and error parameter.
*/
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


//async and wait promises
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
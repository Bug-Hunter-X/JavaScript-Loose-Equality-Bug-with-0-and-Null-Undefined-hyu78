function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x === undefined) {
    return 1;
  } else if (x === 0) {
    return 3; //Handle 0 explicitly
  } else {
    return 2; 
  }
}
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 1
console.log(foo(0)); // Output: 3
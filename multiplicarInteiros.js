function multiplicarInteiros(n){
  if(n === 1){
    n === 0
    return 1;
  }
  else
    return(n * multiplicarInteiros(n - 1));
}
console.log(multiplicarInteiros(5));

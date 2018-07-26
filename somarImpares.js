function somarImpares(n){
  if(n===1)
    return 1;
  else 
    return (2*n-1)+somarImpares(n-1);
}
console.log(somarImpares(5));

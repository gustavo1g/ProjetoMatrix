function somarInteiros(n){
  if(n===1)
    return 1;
  else
    return (n + somarInteiros(n-1));
}
console.log(somarInteiros(5));


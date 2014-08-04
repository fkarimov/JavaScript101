var a=1,b=1,c=0,d=0;
while(c<4e6){
  c=a+b;
  a=b;
  b=c;
  if(a%2===0){
    var d=d+a;
  }
}
console.log(d);
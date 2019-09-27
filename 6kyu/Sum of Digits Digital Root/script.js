function digital_root(n) {
  while(n > 9){
      n = String(n).split('');
      n = n.reduce((sum, item) => Number(sum) + Number(item));
  }
  return n;
}



console.log(digital_root(10));


/*
  https://www.codewars.com/kata/sum-of-digits-slash-digital-root/javascript
*/
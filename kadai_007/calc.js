//変数numに1以上のランダムな整数を代入する
let num = Math.floor(Math.random() * 15) + 1;

console.log(num);

if(num % 3 == 0 && num % 5 == 0){
  //numがの3と5の倍数のとき
  console.log('3と5の倍数です');
}else if(num % 5 == 0){
  //numがの5倍数のとき
  console.log('5の倍数です');
}else if(num % 3 == 0){
  //numが3の倍数のとき
  console.log('3の倍数です');
}else{
  //それ以外の場合
  console.log(num);
}
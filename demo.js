function demo (key) {
  if(key > 0 && key < 5){
    return key;
  }else if(key > 5 && key < 10){
    return 1
  }else if(key > 10 && key < 15) {
    for(let i = 10 ; i < 15; i ++){
      if(i === key){
        return true
      }
    }
  }else{
    return true
  }
  return false;
}

console.log(demo(12))
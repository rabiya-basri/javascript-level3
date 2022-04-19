function string(str){
    const newStr=str.split(' ')
    for(let i=0;i<newStr.length;i++){
      if(newStr[i].includes('y')){
        return 'yes'
      }
    }
    return `${newStr.join(' ')} :does not contain character y`
  }
  console.log(string('donot know why'))
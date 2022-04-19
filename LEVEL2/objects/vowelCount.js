//count the vowels in string and return obejct
function vowelCount(str) {
    const result={a:0,e:0,i:0,o:0,u:0}
    for(const char of str){
      if(result.hasOwnProperty(char)){
        result[char]+=1
      }
    }
    return result
  }
  console.log(vowelCount('javascript'))
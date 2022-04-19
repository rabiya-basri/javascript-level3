//function that counts the frequency of character and returns object
function freqCounter(str) {
    const result={}
    for(const char of str){
      if(result.hasOwnProperty(char)){
        result[char]+=1
      }else{
        result[char]=1
      }
    }
    return result
  }
  console.log(freqCounter('dctdcd'))
  console.log(freqCounter('abcdabb'))
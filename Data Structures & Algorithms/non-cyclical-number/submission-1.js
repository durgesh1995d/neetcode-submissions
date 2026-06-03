class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let set = new Set()
  while(n!=1){
  
  let data= n.toString().split("")
   
  let result =0
  for(let i of data){
    result += Math.pow(Number(i),2)
    
  }
  
  console.log(result,set.has(result))
  if(set.has(result)){
  return false
  }
  set.add(result)
  n=result
  
}
return true
  
    }
}

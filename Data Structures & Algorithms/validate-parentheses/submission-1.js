class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {"(":")","{":"}","[":"]"}
  let stack=[]
  for(let i of s){
  if(map[i]){
    stack.push(map[i])
  }else{
    if(stack.pop() != i)
return false
  }
    
  }
  return stack.length>0 ? false : true
    }
}

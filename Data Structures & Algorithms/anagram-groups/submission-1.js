class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
   let map = {}
    
   for(let i =0; i<strs.length;i++){
    let sorted = strs[i].split("").sort((a,b)=>{return a>b ?1 :-1}).join("")
      
      if(!map[sorted]){
        map[sorted]=[]
      }
      map[sorted].push(strs[i])
  }
    
   return Object.values(map).sort((a,b)=>a.length -b.length);

        
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
   let map =new Map()
   let result =[]
   for(let i =0; i<strs.length;i++){
    let sorted = strs[i].split("").sort((a,b)=>{return a>b ?1 :-1}).join("")
     if(!map.has(sorted)){
       map.set(sorted,[])
     }
    map.get(sorted).push(strs[i])
  }
   let sortedArs= [...map.values()].sort((a,b)=>a.length - b.length)
    
    
   return  sortedArs;

        
    }
}

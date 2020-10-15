
// You should implement your task here.

module.exports = function towelSort (matrix) {
if(!matrix || matrix.length === 0 ){return []};
 return  matrix.reduce((acc,current,idx)=>{
    return idx%2 == 1? acc.concat(current.reverse()) : acc.concat(current);
   },[]); 
  
}

function oddSquares(array){
       var squr=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2!==0){
        squr.push(array[i]*array[i]);
        } 
    }
 return squr;
}
oddSquares([1,2,3,4,5,6]);
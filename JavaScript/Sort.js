function sort(sortingAlgorithm,compareFunction,array){
  return sortingAlgorithm(array,compareFunction)
}
function insertionSort(unsortedList,compareFunction) {
  var len = unsortedList.length;

  for(var i = 0; i < len; i++) {
    var tmp = unsortedList[i];
    //Copy of the current element.
    /*Check through the sorted part and compare with the
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && compareFunction(unsortedList[j],tmp); j--) {
      //Shift the number
      unsortedList[j+1] = unsortedList[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    unsortedList[j+1] = tmp;
  }
  return unsortedList;
}
function crescente(a,b){
  return a>b?true:false;
}
function decrescente(a,b){
  return a>b?false:true;
}
function pareimpares(a,b){
  return a%2!=0 && b%2==0?true:false;
}
function ordemAlfabetica(a,b){
  return oA(a,b,0);
}
function oA(a,b,i){
  if (!a[i] && !b[i])
    return false;
  else if(a[i]>b[i])
    return true;
  else if (a[i]<b[i])
    return false;
  else
    return oA(a,b,i+1);
}
function maiorPalavra(a,b){
  return a.length > b.length?false:true;
}
num = [3,2,6,4,5,1];
words = ["carro","cachorro","gato","zaratustra","zap"];
console.log(sort(insertionSort,crescente,num));
console.log(sort(insertionSort,decrescente,num));
console.log(sort(insertionSort,pareimpares,num));
console.log(sort(insertionSort,ordemAlfabetica,words));
console.log(sort(insertionSort,maiorPalavra,words));

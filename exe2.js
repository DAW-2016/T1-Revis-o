function sort(sortingAlgorithm,compareFunction,array){
  return sortingAlgorithm(array,compareFunction)
}

function insertionSort(unsortedList,compareFunction) {
  var len = unsortedList.length;

  for(var i = 0; i < len; i++) {
    var tmp = unsortedList[i];
    for(var j = i - 1; j >= 0 && compareFunction(unsortedList[j],tmp); j--) {
      unsortedList[j+1] = unsortedList[j];
    }
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

num = [62,29,31,7,81];
words = ["Lorem","ipsum","dolor","sit","amet"];

console.log(sort(insertionSort,crescente,num));
console.log(sort(insertionSort,decrescente,num));
console.log(sort(insertionSort,pareimpares,num));
console.log(sort(insertionSort,ordemAlfabetica,words));
console.log(sort(insertionSort,maiorPalavra,words));

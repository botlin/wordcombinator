jQuery(document).ready(function(){
  jQuery('textarea').keyup(function(){
      combineWords();
  });
});


function combineWords(){
  jQuery('#listA').val(jQuery('#listA').val().replace(',','\n'));
  jQuery('#listB').val(jQuery('#listB').val().replace(',','\n'));
  jQuery('#listC').val(jQuery('#listC').val().replace(',','\n'));
  jQuery('#listRemoved').val(jQuery('#listRemoved').val().replace(',','\n'));

  var wordsFromListA = jQuery('#listA').val().split('\n');
  var wordsFromListB = jQuery('#listB').val().split('\n');
  var wordsFromListC = jQuery('#listC').val().split('\n');
  var wordsFromListRemoved = jQuery('#listRemoved').val().split('\n');
  var newWords = new Array(wordsFromListA.length*wordsFromListB.length*wordsFromListC.length);
  var index = 0;
  for(var i = 0; i<wordsFromListA.length; i++){
    for(var j = 0; j<wordsFromListB.length; j++){
       for(var k = 0; k<wordsFromListC.length; k++){
        newWords[index++] = wordsFromListA[i]+wordsFromListB[j]+wordsFromListC[k];
      }
    }
  }

  newWords = shuffle(newWords);
  var newContent = '';
  var resultCount= 0;
  for(var i = 0; i<newWords.length; i++){
    if(newWords[i]!=='' && wordsFromListRemoved.indexOf(newWords[i])===-1){
      newContent += newWords[i] +'\n';
      resultCount++;
    }
  }

  jQuery('#listResult').val(newContent);
  jQuery('lable[for=listResult]').text(resultCount+" Ergebnisse");
}

function shuffle(a){
  var x,y,b;
  for(i = 0; i<a.length; i++){
    x = Math.floor(Math.random()*a.length);
    y = Math.floor(Math.random()*a.length);
    b = a[x];
    a[x]=a[y];
    a[y] = b;
  }
  return a;
}

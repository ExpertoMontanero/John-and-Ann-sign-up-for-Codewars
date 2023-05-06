function john(n) {
    var john=[0,0];
  var ann=ann(n);
  var t;
  var ta;
    for(var index=2; index<n; index++){
      t=ann[index-1];
      ta=john[index-1];
      ann.push(index-john[t]);
      john.push(index-ann[ta]);
    }
  return john;
}
function ann(n) {
    var john=john(n);
  var ann=[1,1];
  var t;
  var ta;
    for(var index=2; index<n; index++){
      t=ann[index-1];
      ta=john[index-1];
      ann.push(index-john[t]);
      john.push(index-ann[ta]);
    }
  return ann;
}

function sumJohn(n) {
    array=john(n);
  sum = array.reduce((a, b) => a + b, 0);
  return sum;
}

function sumAnn(n) {
     array=ann(n);
  sum = array.reduce((a, b) => a + b, 0);
  return sum;
}

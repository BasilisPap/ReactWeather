function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      } else {
        reject('one or both of the factors are not numbers.')
      }
    }, 523);
  });
}

addPromise(6,'ffg').then(function (result){
  console.log('Success',result);
}, function (err) {
  console.log('Something went wrong,', err);
});

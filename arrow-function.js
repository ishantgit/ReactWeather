var names = ['fkjdn','jfdjfn','jnfjndf'];

names.forEach(function(name){
  console.log('forEach',name);
});

names.forEach((name) => {
  console.log('arrowfunc',name);
});

//or
names.forEach((name) => console.log(name));

var returnMe = (name) => name +'!';

names.forEach((name) => returnMe);

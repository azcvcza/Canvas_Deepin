var str = 'deep dark范特西';
var buf = new Buffer(str,'utf-8');
console.log(buf);
var buf1 = new Buffer(100);
console.log(buf1.length);
buf1[20] = -100;
//负数 +256 直到处于 0-255区间
console.log('buf1[20]:',buf1[20])
buf1[21] = 300;
// 大于256的要减256， 直到处于0-255区间
console.log('buf1[21]:', buf1[21]);
buf1[22] = 3.1415;
console.log('buf1[22]:', buf1[22]);
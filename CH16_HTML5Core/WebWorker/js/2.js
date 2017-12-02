console.log('脚本等待执行...');

function isPrime(num) {
  var result = true;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

onmessage = function (ev) {
  var o = JSON.parse(ev.data);
  if(o.command === 'start')
  {
    console.log('收到UI主线传来的命令：start');
    console.log('脚本开始执行...');
    // 质数，又称素数，指在大于1的自然数中，除了1和此整数自身外，无法被其他自然数整除的数。
    var n = o.num || 99, time = o.delay || 3000;
    var stamp = new Date().getTime();
    var dtime;
    do {
      dtime = new Date().getTime() - stamp;
    } while (dtime < time);
    console.log(n + ' 判断质数的结果为：' + isPrime(n));
    console.log('脚本执行完毕...');
  }
};
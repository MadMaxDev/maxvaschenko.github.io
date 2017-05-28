function pow(x, n) {
    var a = x;
    if (n == 0) {
        a = 1;
    } else {
        for (var i = 1; i < n; i++) {
            a *= x;
        }
    }

    return a;
}

var x = prompt('x=', '');
var n = prompt('n=', '');

console.log('result =', pow(x, n));


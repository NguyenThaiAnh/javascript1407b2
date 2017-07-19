/*
--------
n = 4; hinhA
*
**
***
****
--------

n = 4; hinhB
   *
  **
 ***
****
------


n = 4; hinhC
****
 ***
  **
   *
------

n = 4; hinhD
   *
  ***
 *****
*******
------


*/

function veHinhA(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dieuKien = j <= i;
            str += (dieuKien ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinhB(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dieuKien = j > n - i;
            str += (dieuKien ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinhC(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dieuKien = j >= i;
            str += (dieuKien ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinhD(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n * 2 - 1; j++) {
            const dieuKien = Math.abs(j - n) < i;
            str += (dieuKien ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinh(n, getColumn, checkPoint) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= getColumn(n); j++) {
            const dieuKien = checkPoint(i, j, n);
            str += (dieuKien ? '*' : ' ');
        }
        console.log(str);
    }
}

function hinhA(i, j, n) {
    return j <= i;
}

function hinhB(i, j, n) {
    return j > n - i;
}

function hinhD(i, j, n) {
    return Math.abs(j - n) < i
}

function columnB(n) {
    return n;
}

function columnD(n) {
    return 2 * n -1;
}

// veHinh(5, hinhA);
veHinh(5, columnB, hinhB);
veHinh(5, columnD, hinhD);

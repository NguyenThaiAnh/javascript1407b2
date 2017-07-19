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


veHinhD(5);
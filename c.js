function inSoChiaHetCho2() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = i % 2 === 0;
        if (dieuKien) console.log(i);
    }
}

function inSoChiaHetCho3() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = i % 3 === 0;
        if (dieuKien) console.log(i);
    }
}

function inSoChiaCho3Du1() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = i % 3 === 1;
        if (dieuKien) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = Math.sqrt(i) % 1 === 0;
        if (dieuKien) console.log(i);
    }
}

function inSoTheoDieuKien(checkNumber) {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = checkNumber(i);
        if (dieuKien) console.log(i);
    }
}

function kiemTraChiaHetCho2(num) {
    return num % 2 === 0;
}

function kiemTraSoChinhPhuong(n) {
    return Math.sqrt(n) % 1 === 0
}

inSoTheoDieuKien(kiemTraSoChinhPhuong);

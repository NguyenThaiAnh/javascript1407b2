function add(a, b) {
    return a + b;
}

function getAdd() {
    return add;
}

console.log(getAdd()(4, 5));

let array_of_numbers = [];
array_of_numbers = [1, 2, 3, 4, 7, 8, 9, 10, -1, -2];
console.log(array_of_numbers);
function max(array_) {
    let max = 0;
    array_.forEach((element, index) => {
        if (element > max) {
            max = element
        }
    });
    return max;
}
function min(array_) {
    let min = 0;
    array_.forEach((element, index) => {
        if (element < min) {
            min = element
        }
    });
    return min;
}
function minZero(array_) {
    let min = array_[0];
    array_.forEach((element, index) => {
        if (element < min && element >= 0) {
            min = element
        }
    });
    return min;
}
console.log(max(array_of_numbers));
console.log(min(array_of_numbers));
console.log(minZero(array_of_numbers));
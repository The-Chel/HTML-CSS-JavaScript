let array_of_fruits = [];
array_of_fruits = ['apple', 'orange', 'apple', 'banana', 'apple'];
console.log(array_of_fruits);
function pickApples(array, element_to_delete, number_of_delets) {
    let number = number_of_delets;
    let array_copy = array.reverse();
    let element_to_delete_ = element_to_delete;
    let result = [];
    result = array_copy.filter( function (element) {
        if (element == element_to_delete_ && number > 0) {
            number--
            return false
        } else {
            return true
        }
    })
    return result.reverse();

}
array_of_fruits = pickApples(array_of_fruits,'apple' , 2);

console.log(array_of_fruits);
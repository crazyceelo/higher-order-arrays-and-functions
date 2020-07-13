// write a javascript function to clone an array

var arr = [4, 3, 1, 2];

var clone = arr.slice(0);

// console.log(arr);
// console.log(clone);

function cloneArray(erray){
    let clone = erray.slice(0)
    return [erray, clone]

}

console.log(cloneArray(arr))

var addNumbers = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var p;
    var sum = 0;
    for (p = 0; p < nums.length; p++) {
        sum = sum + nums[p];
    }
    return sum;
};
console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30));
console.log(addNumbers(10, 20, 50, 10, 20));

exports.test = 0;

const { foo } = require('./third.js');

console.log(foo);

exports.test2 = function test() {
    require('./second.js', foo => {
        console.log(foo);
    })
};
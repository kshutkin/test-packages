const { foo } = require('@tstpkgs/dual-subpath-exports-cjs');
const { foo: foo2 } = require('@tstpkgs/dual-subpath-exports-esm');
const { foo: foo3, foo2: foo4 } = require('@tstpkgs/intermediate-cjs-lib');

exports.foo = foo;
exports.foo2 = foo2;
exports.foo3 = foo3;
exports.foo4 = foo4;
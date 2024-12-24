const { foo } = require('@tstpkgs/dual-subpath-exports-cjs/second');
const { foo: foo2 } = require('@tstpkgs/dual-subpath-exports-esm/second');

exports.foo = foo;
exports.foo2 = foo2;

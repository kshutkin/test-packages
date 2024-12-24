import { foo } from '@tstpkgs/dual-subpath-exports-cjs';
import { foo as foo2 } from '@tstpkgs/dual-subpath-exports-esm';
import { foo as foo3, foo2 as foo4 } from '@tstpkgs/intermediate-esm-lib';

export { foo, foo2, foo3, foo4 };
import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H+8BGIzEOIbynaEMJcEGHPqAxeNiL+k1Ti+NTWpchbdi5ZnuJf1+sVpJajWo/j+AFzBTCsipGjw+4WXL3gk+9q4Dh1L5L0cbYR9+nvD1okbLG2DYjZQIt/Prlgyr3Ruz8+vfYB1Cyb4jzwG6hAh0MCW6MEFFs5PTXhgJRoJmPLIuDUt0xkLiXXYZ9zKmiq2MxXba5r3owiRx3erZYKt5tygbXZZ5ETF5iIX/790Lgcyw2QYlvvEahlAacLaUFUoN7Mbn+6DVijcE3O6EOJQSXXBZY/75LdChRaDLHzPu0fBu4BrR8YnzOVXabZx6ER2WhXaLL2OE4fM4XgM=', 'base64')).toString());

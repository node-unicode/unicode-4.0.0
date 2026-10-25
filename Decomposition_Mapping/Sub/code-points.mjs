import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H3oA+MXsFuuq+o8gTNZ3TlqwwM0xTu9xWHgAWQCPAn7ehvRPpB8i3aJOVR99KyDcROmYhNBcBw==', 'base64')).toString());

import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H5oA+GVyXUybXxG+PsW3dXL6F4ZZRt+SMOTAsTjgTWMQdnc8+uGguoObfQh4+YnQLXrZPqvt4zNxM5Jt/kKFzno3O9JqXxWeAA==', 'base64')).toString());

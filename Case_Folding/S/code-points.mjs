import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H1QA+EUnp3r9DlIPKHrAwQacxh6ITROMdgpAwAnno1mKEY136UQuNA==', 'base64')).toString());

import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H08KAERNm+NcoFGv+vxQIHBSBPv+Ut13LftTxmP6OWU8ZlVbAckcYFoXjmBjq8rB0wDGgqVCzY0jSvopoIV5857Yz+2vWhqfQd36z8wuNfQ/LwSSOzeWRttzw/Ws0iSug+gYEaphhedygoNoTzYpG5HNzu2TgASIgDaLSINwm+iN1jskGgK997sMOHkGV6JGhEiHvYQj5SahUR2rULny3ld/lQSivkR9Zep4grv4OqxCc2IPyPgtoORJc6MEYYH8Rtxw7vvENAh3BztXXeHmCvTh2g37OYmb2w16bKR7PjJdE8Oa6giaeGrcAbajvlz+5TQCkXoVluLSAyFhHU2ireHc/erecximxXvuLLsuQ/MI+ih4QMjvjeJMeufgc1sF7T7+FidoLzG3pyxCfY32PY8d5b5/lg77P/Uasqv258N9rj6nNaxBAA==', 'base64')).toString());

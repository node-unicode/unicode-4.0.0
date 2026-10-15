import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03Qyw1FIQgE0IZcICKfWoj9t/GC3DFvozkocSRzsoiN2lhGrXpOccu6VbWquldVNxmPdOYAV3EyKJcT3CNjA/oPGykE+Eh5PVHPrk9ONws07xkhjHMbaXy1BZb2699ljtev7ddvbYW9bXBnIwQPaiN7fPkwjvjy4TdR83iXax7rnPMDvF0QO4QBAAA=', 'base64'))));

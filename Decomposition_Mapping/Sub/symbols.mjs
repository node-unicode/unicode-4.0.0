import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3HORLBAACF4bv8FeMV9qVwkkwOoDVDLUESa+EIdkrGNTiDnMTEvO77goDva48YEKrwATG0j4iRfUKM7TPi/XAuRZ7OFfGJnFuRxLkXSf/J4wmiakeImh0j6vYU0bBniKY9R7TsBNG2U0THzhBde4Ho2UtExV4h8mznrRF9e4Mo2VtEmTD8ATXDi0QoAQAA', 'base64'))));

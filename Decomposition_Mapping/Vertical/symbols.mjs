import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03POQoCQRCF4bu8SKFu1DQeRIS2R3Acd9TYyFwdlxnXu9gH8Ari4yFm/1dJVTmHFNcwpJinWMCbQ8qeHJQpyzl4V1sYXmEj7ailtKcWUglDS3346yMMDfUJhqb6DENbXcHQUdffE347LtRKulIz6UbNpTtVSA9qKPGtoJ/qQA2kLjWSIjWWMmoi9aip1IfBqXMYPLz/ALJOJ5xVAQAA', 'base64'))));

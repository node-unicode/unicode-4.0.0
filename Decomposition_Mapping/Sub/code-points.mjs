import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEzXOyw1EIQxD0Ya8IF+gFov+2xjlybO7Rwok5C530Fa9h0GAZinkYAs1OEKDN1vYg//YAW+bcAcaizX4xk74AvOoDcyrdrCWOsAydYLl6gIr1A1WqjdYpT5gtfqCpb1zROptGHi269dwsLUtAkxdEQmmvfd+OzfvEiwBAAA=', 'base64'))));

import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H+4CGIyUbuYk/1lOj9eKHtMXqTIiOidGKBUb2Y8W+CfmVv92b+oQLZQillXTMiE0jkaM6Nx2xkmM5p90JrN/d4LKrK7DiZl40f7jfjKh0G947E3iPC1bhloyadntTU/Z6wVptzPa1KBemDQEqHdNfAGoX5n4BJD5NnEHUN+bcKYfoDLRyrGpLLRqdRuVqSS/yVrGUN/0y1BwAiISMgoJ98hhcAIiEjIKiaFqSDA4AREJGYUh9AeDExCRkFFIDOU3VQxOQERCRiHhdhwGJyAiIaNwhSf7/QlQa/uZ8V+n3aoKNrQ/qtfOD4l/uEmYQz9z/HuaV+paNup6vDoHffVa8mNJljIPp6l6huZPOUhtXvSU88OUASRdLRw5ro7u5kp79Gih7lS7sIqayfftNS+ObClk8vVD6mYi8g0mTUwWEAy97vgA+zy1PPbm1gFYKyDV+O3Xj6UD/7tKn6tgtAZ/fOUy', 'base64')).toString());

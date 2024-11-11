module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))
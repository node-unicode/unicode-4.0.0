module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))
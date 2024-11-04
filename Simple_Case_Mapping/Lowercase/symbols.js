module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))
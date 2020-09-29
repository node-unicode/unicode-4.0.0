module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,93,152,75,178,36,39,22,68,247,82,227,30,188,8,190,119,8,56,108,66,234,73,239,161,247,175,148,21,39,205,188,52,144,57,245,34,19,63,55,46,56,228,95,191,254,254,255,207,231,191,95,255,249,45,30,196,139,72,136,140,40,136,138,104,255,138,255,49,154,136,141,56,87,60,204,243,48,207,195,60,15,243,60,204,243,48,207,195,60,79,67,116,68,32,6,130,217,159,133,16,2,63,15,126,26,162,99,172,99,172,99,172,99,172,99,172,227,167,227,167,227,167,227,167,227,167,227,167,227,167,227,167,227,167,99,35,176,17,216,8,108,4,54,2,27,65,125,2,63,129,159,192,79,224,39,240,19,248,9,252,4,126,2,63,113,253,36,250,34,209,23,137,190,72,244,69,162,47,18,125,145,232,139,244,211,16,29,17,136,129,152,136,133,16,98,35,240,67,255,36,250,39,209,63,137,254,73,244,79,162,127,18,253,147,232,159,68,255,36,250,39,209,63,137,254,73,244,79,162,127,18,253,147,232,159,244,226,231,197,207,139,159,23,63,47,126,94,252,188,248,121,241,243,226,231,197,207,139,159,23,63,47,126,94,252,188,248,121,241,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,240,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,147,241,83,240,83,240,83,240,83,240,83,240,83,240,83,240,83,240,83,152,162,48,69,97,138,202,20,149,41,42,83,84,166,168,76,81,153,162,50,69,101,138,10,114,5,185,130,92,65,174,32,87,252,84,252,212,235,39,179,125,101,182,175,220,11,162,34,58,226,206,85,216,127,10,251,79,97,255,41,236,63,133,253,167,176,255,20,246,159,194,254,83,226,251,133,3,49,17,11,33,196,70,92,243,101,252,32,240,51,176,49,176,49,176,49,176,49,176,49,176,49,176,49,176,49,176,49,176,49,176,49,176,49,176,49,177,49,177,49,41,203,196,207,196,207,196,207,196,207,196,207,196,207,196,207,196,198,196,198,196,198,100,246,197,164,139,73,215,157,171,178,31,86,246,195,202,126,88,217,15,235,243,125,248,26,171,44,153,202,146,169,44,153,202,146,169,44,153,202,146,169,44,153,202,146,169,44,153,202,146,169,44,153,202,146,169,44,153,90,46,123,109,124,161,120,70,60,35,158,81,32,6,2,207,194,179,176,42,172,110,190,121,99,117,99,117,99,117,99,117,51,233,102,210,205,92,155,185,54,115,237,91,159,70,157,27,59,109,75,223,127,121,17,9,145,17,5,81,17,13,209,17,129,24,136,137,88,8,108,176,211,54,118,218,198,78,219,216,105,27,59,109,99,167,109,236,180,141,157,182,177,211,54,118,218,198,78,219,216,105,27,59,109,99,125,53,214,87,99,125,53,214,87,27,223,135,49,207,250,106,172,175,198,250,106,172,175,198,250,10,142,25,193,49,35,56,102,4,69,8,216,3,246,128,61,96,15,216,3,246,128,61,96,15,216,3,246,128,61,96,15,216,131,37,19,44,153,96,201,4,235,34,88,23,193,186,8,214,69,16,1,65,4,4,231,204,224,156,25,108,212,193,86,16,19,82,182,130,88,144,178,39,4,123,66,44,62,206,230,16,11,174,5,215,130,98,49,197,130,130,53,24,44,153,96,201,12,94,202,224,165,12,94,202,224,165,12,94,202,224,165,12,94,202,224,165,12,94,202,160,224,131,130,15,202,59,40,239,160,188,131,237,98,52,190,167,127,5,95,72,233,6,165,27,148,110,80,186,65,233,6,165,27,148,110,80,186,65,233,198,42,8,172,82,195,177,2,129,103,138,57,40,230,160,134,131,26,78,106,56,169,225,164,134,147,26,78,106,56,169,225,164,134,147,26,78,106,56,105,236,73,49,39,197,156,20,115,82,204,73,49,39,219,242,100,91,158,212,112,82,177,73,197,38,21,155,84,108,82,177,185,248,30,234,51,169,207,92,3,129,13,234,51,169,207,164,217,22,101,89,148,101,81,150,69,53,22,213,88,84,99,81,141,69,53,22,213,88,44,243,197,234,94,212,103,81,159,197,162,94,20,106,81,168,69,161,22,65,182,168,216,162,80,139,102,91,52,219,162,116,139,210,45,74,183,40,221,162,116,139,102,91,52,219,162,152,139,98,46,138,185,40,230,162,152,139,98,46,138,185,132,85,242,84,20,83,20,83,20,83,20,83,20,83,20,83,20,83,20,83,212,80,212,80,212,80,212,80,212,80,212,80,212,80,244,152,40,157,40,157,224,210,194,143,240,35,252,136,79,137,79,41,35,48,198,129,65,28,24,196,129,65,28,24,196,129,65,194,24,39,7,113,114,208,97,174,115,231,218,196,250,38,196,55,33,190,9,241,77,136,111,66,124,19,226,155,16,223,148,110,83,186,77,184,236,252,125,102,34,22,66,136,107,117,115,242,220,156,51,55,231,204,205,57,115,115,206,220,156,51,55,231,204,205,57,115,211,180,155,30,219,108,104,155,151,178,105,182,189,190,15,95,63,135,139,243,225,226,124,40,203,161,26,39,125,255,180,17,183,206,135,61,252,180,23,145,16,25,193,23,182,138,224,155,27,179,55,166,104,3,49,17,11,129,231,134,13,126,237,57,252,218,115,136,146,67,139,30,90,244,112,93,58,220,146,14,191,246,28,126,165,57,220,146,14,183,164,195,45,233,112,75,58,220,146,14,183,164,19,223,239,129,130,203,209,225,114,116,184,28,29,46,71,135,203,209,225,114,116,184,28,29,46,71,103,96,131,91,210,225,150,116,184,37,29,78,113,135,83,220,225,20,119,56,197,29,78,113,135,83,220,225,20,119,56,197,29,78,113,135,83,220,225,20,119,232,213,195,45,233,112,75,58,116,239,161,123,15,221,123,232,222,67,247,30,186,247,76,252,208,198,135,54,62,119,243,124,126,238,207,35,31,33,196,70,156,43,238,161,253,35,30,196,139,224,123,110,27,127,68,71,196,21,133,103,10,207,20,158,41,247,153,118,239,95,31,145,16,249,10,230,226,130,240,112,65,120,90,225,79,133,63,53,254,165,241,47,183,80,31,209,16,29,193,236,183,80,31,49,17,11,33,196,70,220,178,180,155,86,31,241,32,152,125,49,251,194,234,61,26,125,4,126,22,126,22,126,22,126,22,126,22,126,22,126,22,126,22,126,22,126,132,31,225,71,248,17,126,238,102,254,244,251,251,225,71,44,4,127,186,253,252,196,253,153,238,35,30,196,139,72,136,140,40,136,138,104,136,142,248,126,243,64,92,27,65,143,5,61,22,188,247,224,189,7,239,61,18,115,209,126,65,251,5,237,23,180,95,36,230,186,23,195,247,231,34,127,132,16,27,113,174,184,14,63,130,79,189,124,234,229,83,47,159,170,60,92,121,184,242,112,229,225,250,125,152,41,238,251,250,136,7,241,34,18,34,35,10,162,34,26,162,35,2,129,31,225,71,248,17,126,132,31,225,103,227,103,227,103,227,103,227,103,227,103,227,103,227,103,227,103,227,103,227,231,254,68,144,168,106,162,170,137,170,38,170,154,168,106,98,255,73,252,26,159,248,53,254,179,83,254,126,230,236,251,75,251,71,60,136,23,145,16,25,81,16,21,209,16,29,17,136,129,152,136,133,16,226,107,227,92,241,226,231,197,207,139,159,187,100,206,57,129,24,136,223,83,124,14,122,249,243,127,221,159,55,191,195,234,195,230,195,238,195,240,161,124,184,125,120,108,120,239,140,223,225,227,195,215,135,201,135,217,135,142,208,28,161,57,66,115,132,230,8,247,172,242,29,122,173,238,185,229,59,116,222,230,188,205,121,187,243,118,231,237,206,219,157,168,59,81,119,162,238,68,221,137,186,19,117,39,26,254,215,241,199,95,157,247,158,43,244,185,243,126,254,207,197,144,225,237,198,239,240,143,191,190,62,76,62,204,62,44,62,172,62,108,62,236,62,12,31,14,31,78,31,46,31,58,224,221,28,190,195,99,195,228,188,201,121,147,243,38,231,77,206,155,156,55,57,111,114,222,228,188,201,121,147,243,38,231,77,206,155,156,55,57,111,114,222,236,188,217,121,179,243,102,231,205,206,155,157,55,59,111,118,222,236,188,217,121,179,243,102,231,205,206,155,157,55,59,111,118,222,226,188,197,121,139,243,22,231,45,206,91,156,183,56,111,113,222,226,188,197,121,139,243,22,231,45,206,91,156,183,56,111,113,222,234,188,213,121,171,243,86,231,173,206,91,157,183,58,111,117,222,234,188,213,121,171,243,86,231,173,206,91,157,183,58,111,117,222,230,188,205,121,155,243,54,231,109,206,219,156,183,57,111,115,222,230,188,205,121,155,243,54,231,109,206,219,156,183,57,111,51,94,253,252,248,240,241,225,235,195,228,195,236,195,226,195,234,195,230,195,238,195,240,225,240,225,244,225,242,161,124,184,125,232,188,143,243,62,206,251,56,239,227,188,143,243,62,206,251,56,239,227,188,143,243,62,206,251,56,239,227,188,143,243,62,206,251,56,239,227,188,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,202,243,87,158,191,242,252,149,231,175,60,127,229,249,43,207,95,121,254,234,143,252,237,206,219,157,183,59,111,119,222,238,188,221,121,187,243,118,231,237,206,219,157,183,59,111,119,222,238,188,221,121,187,243,118,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,13,231,29,206,59,156,119,56,239,112,222,225,188,195,121,135,243,14,231,29,206,59,156,119,56,239,112,222,225,188,126,193,215,112,222,225,188,211,121,167,243,78,231,157,206,59,157,119,58,239,116,222,233,188,211,121,167,243,78,231,157,206,59,157,119,58,239,116,222,233,188,203,121,151,243,46,231,93,206,187,156,119,57,239,114,222,229,188,203,121,151,243,46,231,93,206,187,156,119,57,239,114,222,229,188,114,94,57,175,156,87,206,43,231,149,243,202,121,229,188,114,94,57,175,156,87,206,43,231,149,243,202,121,229,188,219,121,183,243,110,231,221,206,187,157,119,59,239,118,222,237,188,219,121,183,243,110,231,221,206,187,157,119,59,239,118,222,125,126,253,247,31,64,189,246,197,75,48,0,0])))
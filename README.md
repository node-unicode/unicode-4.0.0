# Unicode v4.0.0 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v4.0.0’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).**

## Installation

```bash
npm install unicode-4.0.0 --save-dev
```

**Note:** _unicode-4.0.0_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
const regenerate = require('regenerate');
const set = regenerate()
  .add(require('unicode-6.3.0/Script_Extensions/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/Script_Extensions/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('unicode-4.0.0/General_Category/Uppercase_Letter/code-points');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('unicode-4.0.0/General_Category/Uppercase_Letter/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('unicode-4.0.0/General_Category/Uppercase_Letter/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('unicode-4.0.0/General_Category').get(0x41);
// Get an array of all code points with a given bidi class:
const on = require('unicode-4.0.0/Bidi_Class/Other_Neutral/code-points');
// Get a map from code points to bidi classes:
const bidiClassMap = require('unicode-4.0.0/Bidi_Class');
// Get the directionality of a given code point:
const directionality = require('unicode-4.0.0/Bidi_Class').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v4.0.0:

```js
// `Binary_Property`:

require('unicode-4.0.0/Binary_Property/ASCII/code-points');
require('unicode-4.0.0/Binary_Property/ASCII/symbols');
require('unicode-4.0.0/Binary_Property/ASCII/regex');

require('unicode-4.0.0/Binary_Property/ASCII_Hex_Digit/code-points');
require('unicode-4.0.0/Binary_Property/ASCII_Hex_Digit/symbols');
require('unicode-4.0.0/Binary_Property/ASCII_Hex_Digit/regex');

require('unicode-4.0.0/Binary_Property/Alphabetic/code-points');
require('unicode-4.0.0/Binary_Property/Alphabetic/symbols');
require('unicode-4.0.0/Binary_Property/Alphabetic/regex');

require('unicode-4.0.0/Binary_Property/Any/code-points');
require('unicode-4.0.0/Binary_Property/Any/symbols');
require('unicode-4.0.0/Binary_Property/Any/regex');

require('unicode-4.0.0/Binary_Property/Assigned/code-points');
require('unicode-4.0.0/Binary_Property/Assigned/symbols');
require('unicode-4.0.0/Binary_Property/Assigned/regex');

require('unicode-4.0.0/Binary_Property/Bidi_Control/code-points');
require('unicode-4.0.0/Binary_Property/Bidi_Control/symbols');
require('unicode-4.0.0/Binary_Property/Bidi_Control/regex');

require('unicode-4.0.0/Binary_Property/Bidi_Mirrored/code-points');
require('unicode-4.0.0/Binary_Property/Bidi_Mirrored/symbols');
require('unicode-4.0.0/Binary_Property/Bidi_Mirrored/regex');

require('unicode-4.0.0/Binary_Property/Dash/code-points');
require('unicode-4.0.0/Binary_Property/Dash/symbols');
require('unicode-4.0.0/Binary_Property/Dash/regex');

require('unicode-4.0.0/Binary_Property/Default_Ignorable_Code_Point/code-points');
require('unicode-4.0.0/Binary_Property/Default_Ignorable_Code_Point/symbols');
require('unicode-4.0.0/Binary_Property/Default_Ignorable_Code_Point/regex');

require('unicode-4.0.0/Binary_Property/Deprecated/code-points');
require('unicode-4.0.0/Binary_Property/Deprecated/symbols');
require('unicode-4.0.0/Binary_Property/Deprecated/regex');

require('unicode-4.0.0/Binary_Property/Diacritic/code-points');
require('unicode-4.0.0/Binary_Property/Diacritic/symbols');
require('unicode-4.0.0/Binary_Property/Diacritic/regex');

require('unicode-4.0.0/Binary_Property/Expands_On_NFC/code-points');
require('unicode-4.0.0/Binary_Property/Expands_On_NFC/symbols');
require('unicode-4.0.0/Binary_Property/Expands_On_NFC/regex');

require('unicode-4.0.0/Binary_Property/Expands_On_NFD/code-points');
require('unicode-4.0.0/Binary_Property/Expands_On_NFD/symbols');
require('unicode-4.0.0/Binary_Property/Expands_On_NFD/regex');

require('unicode-4.0.0/Binary_Property/Expands_On_NFKC/code-points');
require('unicode-4.0.0/Binary_Property/Expands_On_NFKC/symbols');
require('unicode-4.0.0/Binary_Property/Expands_On_NFKC/regex');

require('unicode-4.0.0/Binary_Property/Expands_On_NFKD/code-points');
require('unicode-4.0.0/Binary_Property/Expands_On_NFKD/symbols');
require('unicode-4.0.0/Binary_Property/Expands_On_NFKD/regex');

require('unicode-4.0.0/Binary_Property/Extender/code-points');
require('unicode-4.0.0/Binary_Property/Extender/symbols');
require('unicode-4.0.0/Binary_Property/Extender/regex');

require('unicode-4.0.0/Binary_Property/FC_NFKC_Closure/code-points');
require('unicode-4.0.0/Binary_Property/FC_NFKC_Closure/symbols');
require('unicode-4.0.0/Binary_Property/FC_NFKC_Closure/regex');

require('unicode-4.0.0/Binary_Property/Full_Composition_Exclusion/code-points');
require('unicode-4.0.0/Binary_Property/Full_Composition_Exclusion/symbols');
require('unicode-4.0.0/Binary_Property/Full_Composition_Exclusion/regex');

require('unicode-4.0.0/Binary_Property/Grapheme_Base/code-points');
require('unicode-4.0.0/Binary_Property/Grapheme_Base/symbols');
require('unicode-4.0.0/Binary_Property/Grapheme_Base/regex');

require('unicode-4.0.0/Binary_Property/Grapheme_Extend/code-points');
require('unicode-4.0.0/Binary_Property/Grapheme_Extend/symbols');
require('unicode-4.0.0/Binary_Property/Grapheme_Extend/regex');

require('unicode-4.0.0/Binary_Property/Grapheme_Link/code-points');
require('unicode-4.0.0/Binary_Property/Grapheme_Link/symbols');
require('unicode-4.0.0/Binary_Property/Grapheme_Link/regex');

require('unicode-4.0.0/Binary_Property/Hex_Digit/code-points');
require('unicode-4.0.0/Binary_Property/Hex_Digit/symbols');
require('unicode-4.0.0/Binary_Property/Hex_Digit/regex');

require('unicode-4.0.0/Binary_Property/Hyphen/code-points');
require('unicode-4.0.0/Binary_Property/Hyphen/symbols');
require('unicode-4.0.0/Binary_Property/Hyphen/regex');

require('unicode-4.0.0/Binary_Property/IDS_Binary_Operator/code-points');
require('unicode-4.0.0/Binary_Property/IDS_Binary_Operator/symbols');
require('unicode-4.0.0/Binary_Property/IDS_Binary_Operator/regex');

require('unicode-4.0.0/Binary_Property/IDS_Trinary_Operator/code-points');
require('unicode-4.0.0/Binary_Property/IDS_Trinary_Operator/symbols');
require('unicode-4.0.0/Binary_Property/IDS_Trinary_Operator/regex');

require('unicode-4.0.0/Binary_Property/ID_Continue/code-points');
require('unicode-4.0.0/Binary_Property/ID_Continue/symbols');
require('unicode-4.0.0/Binary_Property/ID_Continue/regex');

require('unicode-4.0.0/Binary_Property/ID_Start/code-points');
require('unicode-4.0.0/Binary_Property/ID_Start/symbols');
require('unicode-4.0.0/Binary_Property/ID_Start/regex');

require('unicode-4.0.0/Binary_Property/Ideographic/code-points');
require('unicode-4.0.0/Binary_Property/Ideographic/symbols');
require('unicode-4.0.0/Binary_Property/Ideographic/regex');

require('unicode-4.0.0/Binary_Property/Join_Control/code-points');
require('unicode-4.0.0/Binary_Property/Join_Control/symbols');
require('unicode-4.0.0/Binary_Property/Join_Control/regex');

require('unicode-4.0.0/Binary_Property/Logical_Order_Exception/code-points');
require('unicode-4.0.0/Binary_Property/Logical_Order_Exception/symbols');
require('unicode-4.0.0/Binary_Property/Logical_Order_Exception/regex');

require('unicode-4.0.0/Binary_Property/Lowercase/code-points');
require('unicode-4.0.0/Binary_Property/Lowercase/symbols');
require('unicode-4.0.0/Binary_Property/Lowercase/regex');

require('unicode-4.0.0/Binary_Property/Math/code-points');
require('unicode-4.0.0/Binary_Property/Math/symbols');
require('unicode-4.0.0/Binary_Property/Math/regex');

require('unicode-4.0.0/Binary_Property/NFC_MAYBE/code-points');
require('unicode-4.0.0/Binary_Property/NFC_MAYBE/symbols');
require('unicode-4.0.0/Binary_Property/NFC_MAYBE/regex');

require('unicode-4.0.0/Binary_Property/NFC_NO/code-points');
require('unicode-4.0.0/Binary_Property/NFC_NO/symbols');
require('unicode-4.0.0/Binary_Property/NFC_NO/regex');

require('unicode-4.0.0/Binary_Property/NFD_NO/code-points');
require('unicode-4.0.0/Binary_Property/NFD_NO/symbols');
require('unicode-4.0.0/Binary_Property/NFD_NO/regex');

require('unicode-4.0.0/Binary_Property/NFKC_MAYBE/code-points');
require('unicode-4.0.0/Binary_Property/NFKC_MAYBE/symbols');
require('unicode-4.0.0/Binary_Property/NFKC_MAYBE/regex');

require('unicode-4.0.0/Binary_Property/NFKC_NO/code-points');
require('unicode-4.0.0/Binary_Property/NFKC_NO/symbols');
require('unicode-4.0.0/Binary_Property/NFKC_NO/regex');

require('unicode-4.0.0/Binary_Property/NFKD_NO/code-points');
require('unicode-4.0.0/Binary_Property/NFKD_NO/symbols');
require('unicode-4.0.0/Binary_Property/NFKD_NO/regex');

require('unicode-4.0.0/Binary_Property/Noncharacter_Code_Point/code-points');
require('unicode-4.0.0/Binary_Property/Noncharacter_Code_Point/symbols');
require('unicode-4.0.0/Binary_Property/Noncharacter_Code_Point/regex');

require('unicode-4.0.0/Binary_Property/Other_Alphabetic/code-points');
require('unicode-4.0.0/Binary_Property/Other_Alphabetic/symbols');
require('unicode-4.0.0/Binary_Property/Other_Alphabetic/regex');

require('unicode-4.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/code-points');
require('unicode-4.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/symbols');
require('unicode-4.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/regex');

require('unicode-4.0.0/Binary_Property/Other_Grapheme_Extend/code-points');
require('unicode-4.0.0/Binary_Property/Other_Grapheme_Extend/symbols');
require('unicode-4.0.0/Binary_Property/Other_Grapheme_Extend/regex');

require('unicode-4.0.0/Binary_Property/Other_ID_Start/code-points');
require('unicode-4.0.0/Binary_Property/Other_ID_Start/symbols');
require('unicode-4.0.0/Binary_Property/Other_ID_Start/regex');

require('unicode-4.0.0/Binary_Property/Other_Lowercase/code-points');
require('unicode-4.0.0/Binary_Property/Other_Lowercase/symbols');
require('unicode-4.0.0/Binary_Property/Other_Lowercase/regex');

require('unicode-4.0.0/Binary_Property/Other_Math/code-points');
require('unicode-4.0.0/Binary_Property/Other_Math/symbols');
require('unicode-4.0.0/Binary_Property/Other_Math/regex');

require('unicode-4.0.0/Binary_Property/Other_Uppercase/code-points');
require('unicode-4.0.0/Binary_Property/Other_Uppercase/symbols');
require('unicode-4.0.0/Binary_Property/Other_Uppercase/regex');

require('unicode-4.0.0/Binary_Property/Quotation_Mark/code-points');
require('unicode-4.0.0/Binary_Property/Quotation_Mark/symbols');
require('unicode-4.0.0/Binary_Property/Quotation_Mark/regex');

require('unicode-4.0.0/Binary_Property/Radical/code-points');
require('unicode-4.0.0/Binary_Property/Radical/symbols');
require('unicode-4.0.0/Binary_Property/Radical/regex');

require('unicode-4.0.0/Binary_Property/Soft_Dotted/code-points');
require('unicode-4.0.0/Binary_Property/Soft_Dotted/symbols');
require('unicode-4.0.0/Binary_Property/Soft_Dotted/regex');

require('unicode-4.0.0/Binary_Property/Terminal_Punctuation/code-points');
require('unicode-4.0.0/Binary_Property/Terminal_Punctuation/symbols');
require('unicode-4.0.0/Binary_Property/Terminal_Punctuation/regex');

require('unicode-4.0.0/Binary_Property/Unified_Ideograph/code-points');
require('unicode-4.0.0/Binary_Property/Unified_Ideograph/symbols');
require('unicode-4.0.0/Binary_Property/Unified_Ideograph/regex');

require('unicode-4.0.0/Binary_Property/Uppercase/code-points');
require('unicode-4.0.0/Binary_Property/Uppercase/symbols');
require('unicode-4.0.0/Binary_Property/Uppercase/regex');

require('unicode-4.0.0/Binary_Property/White_Space/code-points');
require('unicode-4.0.0/Binary_Property/White_Space/symbols');
require('unicode-4.0.0/Binary_Property/White_Space/regex');

require('unicode-4.0.0/Binary_Property/XID_Continue/code-points');
require('unicode-4.0.0/Binary_Property/XID_Continue/symbols');
require('unicode-4.0.0/Binary_Property/XID_Continue/regex');

require('unicode-4.0.0/Binary_Property/XID_Start/code-points');
require('unicode-4.0.0/Binary_Property/XID_Start/symbols');
require('unicode-4.0.0/Binary_Property/XID_Start/regex');

// `General_Category`:

require('unicode-4.0.0/General_Category').get(codePoint); // lookup map

require('unicode-4.0.0/General_Category/Cased_Letter/code-points');
require('unicode-4.0.0/General_Category/Cased_Letter/symbols');
require('unicode-4.0.0/General_Category/Cased_Letter/regex');

require('unicode-4.0.0/General_Category/Close_Punctuation/code-points');
require('unicode-4.0.0/General_Category/Close_Punctuation/symbols');
require('unicode-4.0.0/General_Category/Close_Punctuation/regex');

require('unicode-4.0.0/General_Category/Connector_Punctuation/code-points');
require('unicode-4.0.0/General_Category/Connector_Punctuation/symbols');
require('unicode-4.0.0/General_Category/Connector_Punctuation/regex');

require('unicode-4.0.0/General_Category/Control/code-points');
require('unicode-4.0.0/General_Category/Control/symbols');
require('unicode-4.0.0/General_Category/Control/regex');

require('unicode-4.0.0/General_Category/Currency_Symbol/code-points');
require('unicode-4.0.0/General_Category/Currency_Symbol/symbols');
require('unicode-4.0.0/General_Category/Currency_Symbol/regex');

require('unicode-4.0.0/General_Category/Dash_Punctuation/code-points');
require('unicode-4.0.0/General_Category/Dash_Punctuation/symbols');
require('unicode-4.0.0/General_Category/Dash_Punctuation/regex');

require('unicode-4.0.0/General_Category/Decimal_Number/code-points');
require('unicode-4.0.0/General_Category/Decimal_Number/symbols');
require('unicode-4.0.0/General_Category/Decimal_Number/regex');

require('unicode-4.0.0/General_Category/Enclosing_Mark/code-points');
require('unicode-4.0.0/General_Category/Enclosing_Mark/symbols');
require('unicode-4.0.0/General_Category/Enclosing_Mark/regex');

require('unicode-4.0.0/General_Category/Final_Punctuation/code-points');
require('unicode-4.0.0/General_Category/Final_Punctuation/symbols');
require('unicode-4.0.0/General_Category/Final_Punctuation/regex');

require('unicode-4.0.0/General_Category/Format/code-points');
require('unicode-4.0.0/General_Category/Format/symbols');
require('unicode-4.0.0/General_Category/Format/regex');

require('unicode-4.0.0/General_Category/Initial_Punctuation/code-points');
require('unicode-4.0.0/General_Category/Initial_Punctuation/symbols');
require('unicode-4.0.0/General_Category/Initial_Punctuation/regex');

require('unicode-4.0.0/General_Category/Letter/code-points');
require('unicode-4.0.0/General_Category/Letter/symbols');
require('unicode-4.0.0/General_Category/Letter/regex');

require('unicode-4.0.0/General_Category/Letter_Number/code-points');
require('unicode-4.0.0/General_Category/Letter_Number/symbols');
require('unicode-4.0.0/General_Category/Letter_Number/regex');

require('unicode-4.0.0/General_Category/Line_Separator/code-points');
require('unicode-4.0.0/General_Category/Line_Separator/symbols');
require('unicode-4.0.0/General_Category/Line_Separator/regex');

require('unicode-4.0.0/General_Category/Lowercase_Letter/code-points');
require('unicode-4.0.0/General_Category/Lowercase_Letter/symbols');
require('unicode-4.0.0/General_Category/Lowercase_Letter/regex');

require('unicode-4.0.0/General_Category/Mark/code-points');
require('unicode-4.0.0/General_Category/Mark/symbols');
require('unicode-4.0.0/General_Category/Mark/regex');

require('unicode-4.0.0/General_Category/Math_Symbol/code-points');
require('unicode-4.0.0/General_Category/Math_Symbol/symbols');
require('unicode-4.0.0/General_Category/Math_Symbol/regex');

require('unicode-4.0.0/General_Category/Modifier_Letter/code-points');
require('unicode-4.0.0/General_Category/Modifier_Letter/symbols');
require('unicode-4.0.0/General_Category/Modifier_Letter/regex');

require('unicode-4.0.0/General_Category/Modifier_Symbol/code-points');
require('unicode-4.0.0/General_Category/Modifier_Symbol/symbols');
require('unicode-4.0.0/General_Category/Modifier_Symbol/regex');

require('unicode-4.0.0/General_Category/Nonspacing_Mark/code-points');
require('unicode-4.0.0/General_Category/Nonspacing_Mark/symbols');
require('unicode-4.0.0/General_Category/Nonspacing_Mark/regex');

require('unicode-4.0.0/General_Category/Number/code-points');
require('unicode-4.0.0/General_Category/Number/symbols');
require('unicode-4.0.0/General_Category/Number/regex');

require('unicode-4.0.0/General_Category/Open_Punctuation/code-points');
require('unicode-4.0.0/General_Category/Open_Punctuation/symbols');
require('unicode-4.0.0/General_Category/Open_Punctuation/regex');

require('unicode-4.0.0/General_Category/Other/code-points');
require('unicode-4.0.0/General_Category/Other/symbols');
require('unicode-4.0.0/General_Category/Other/regex');

require('unicode-4.0.0/General_Category/Other_Letter/code-points');
require('unicode-4.0.0/General_Category/Other_Letter/symbols');
require('unicode-4.0.0/General_Category/Other_Letter/regex');

require('unicode-4.0.0/General_Category/Other_Number/code-points');
require('unicode-4.0.0/General_Category/Other_Number/symbols');
require('unicode-4.0.0/General_Category/Other_Number/regex');

require('unicode-4.0.0/General_Category/Other_Punctuation/code-points');
require('unicode-4.0.0/General_Category/Other_Punctuation/symbols');
require('unicode-4.0.0/General_Category/Other_Punctuation/regex');

require('unicode-4.0.0/General_Category/Other_Symbol/code-points');
require('unicode-4.0.0/General_Category/Other_Symbol/symbols');
require('unicode-4.0.0/General_Category/Other_Symbol/regex');

require('unicode-4.0.0/General_Category/Paragraph_Separator/code-points');
require('unicode-4.0.0/General_Category/Paragraph_Separator/symbols');
require('unicode-4.0.0/General_Category/Paragraph_Separator/regex');

require('unicode-4.0.0/General_Category/Private_Use/code-points');
require('unicode-4.0.0/General_Category/Private_Use/symbols');
require('unicode-4.0.0/General_Category/Private_Use/regex');

require('unicode-4.0.0/General_Category/Punctuation/code-points');
require('unicode-4.0.0/General_Category/Punctuation/symbols');
require('unicode-4.0.0/General_Category/Punctuation/regex');

require('unicode-4.0.0/General_Category/Separator/code-points');
require('unicode-4.0.0/General_Category/Separator/symbols');
require('unicode-4.0.0/General_Category/Separator/regex');

require('unicode-4.0.0/General_Category/Space_Separator/code-points');
require('unicode-4.0.0/General_Category/Space_Separator/symbols');
require('unicode-4.0.0/General_Category/Space_Separator/regex');

require('unicode-4.0.0/General_Category/Spacing_Mark/code-points');
require('unicode-4.0.0/General_Category/Spacing_Mark/symbols');
require('unicode-4.0.0/General_Category/Spacing_Mark/regex');

require('unicode-4.0.0/General_Category/Surrogate/code-points');
require('unicode-4.0.0/General_Category/Surrogate/symbols');
require('unicode-4.0.0/General_Category/Surrogate/regex');

require('unicode-4.0.0/General_Category/Symbol/code-points');
require('unicode-4.0.0/General_Category/Symbol/symbols');
require('unicode-4.0.0/General_Category/Symbol/regex');

require('unicode-4.0.0/General_Category/Titlecase_Letter/code-points');
require('unicode-4.0.0/General_Category/Titlecase_Letter/symbols');
require('unicode-4.0.0/General_Category/Titlecase_Letter/regex');

require('unicode-4.0.0/General_Category/Unassigned/code-points');
require('unicode-4.0.0/General_Category/Unassigned/symbols');
require('unicode-4.0.0/General_Category/Unassigned/regex');

require('unicode-4.0.0/General_Category/Uppercase_Letter/code-points');
require('unicode-4.0.0/General_Category/Uppercase_Letter/symbols');
require('unicode-4.0.0/General_Category/Uppercase_Letter/regex');

// `Bidi_Class`:

require('unicode-4.0.0/Bidi_Class').get(codePoint); // lookup map

require('unicode-4.0.0/Bidi_Class/Arabic_Letter/code-points');
require('unicode-4.0.0/Bidi_Class/Arabic_Letter/symbols');
require('unicode-4.0.0/Bidi_Class/Arabic_Letter/regex');

require('unicode-4.0.0/Bidi_Class/Arabic_Number/code-points');
require('unicode-4.0.0/Bidi_Class/Arabic_Number/symbols');
require('unicode-4.0.0/Bidi_Class/Arabic_Number/regex');

require('unicode-4.0.0/Bidi_Class/Boundary_Neutral/code-points');
require('unicode-4.0.0/Bidi_Class/Boundary_Neutral/symbols');
require('unicode-4.0.0/Bidi_Class/Boundary_Neutral/regex');

require('unicode-4.0.0/Bidi_Class/Common_Separator/code-points');
require('unicode-4.0.0/Bidi_Class/Common_Separator/symbols');
require('unicode-4.0.0/Bidi_Class/Common_Separator/regex');

require('unicode-4.0.0/Bidi_Class/European_Number/code-points');
require('unicode-4.0.0/Bidi_Class/European_Number/symbols');
require('unicode-4.0.0/Bidi_Class/European_Number/regex');

require('unicode-4.0.0/Bidi_Class/European_Separator/code-points');
require('unicode-4.0.0/Bidi_Class/European_Separator/symbols');
require('unicode-4.0.0/Bidi_Class/European_Separator/regex');

require('unicode-4.0.0/Bidi_Class/European_Terminator/code-points');
require('unicode-4.0.0/Bidi_Class/European_Terminator/symbols');
require('unicode-4.0.0/Bidi_Class/European_Terminator/regex');

require('unicode-4.0.0/Bidi_Class/Left_To_Right/code-points');
require('unicode-4.0.0/Bidi_Class/Left_To_Right/symbols');
require('unicode-4.0.0/Bidi_Class/Left_To_Right/regex');

require('unicode-4.0.0/Bidi_Class/Left_To_Right_Embedding/code-points');
require('unicode-4.0.0/Bidi_Class/Left_To_Right_Embedding/symbols');
require('unicode-4.0.0/Bidi_Class/Left_To_Right_Embedding/regex');

require('unicode-4.0.0/Bidi_Class/Left_To_Right_Override/code-points');
require('unicode-4.0.0/Bidi_Class/Left_To_Right_Override/symbols');
require('unicode-4.0.0/Bidi_Class/Left_To_Right_Override/regex');

require('unicode-4.0.0/Bidi_Class/Nonspacing_Mark/code-points');
require('unicode-4.0.0/Bidi_Class/Nonspacing_Mark/symbols');
require('unicode-4.0.0/Bidi_Class/Nonspacing_Mark/regex');

require('unicode-4.0.0/Bidi_Class/Other_Neutral/code-points');
require('unicode-4.0.0/Bidi_Class/Other_Neutral/symbols');
require('unicode-4.0.0/Bidi_Class/Other_Neutral/regex');

require('unicode-4.0.0/Bidi_Class/Paragraph_Separator/code-points');
require('unicode-4.0.0/Bidi_Class/Paragraph_Separator/symbols');
require('unicode-4.0.0/Bidi_Class/Paragraph_Separator/regex');

require('unicode-4.0.0/Bidi_Class/Pop_Directional_Format/code-points');
require('unicode-4.0.0/Bidi_Class/Pop_Directional_Format/symbols');
require('unicode-4.0.0/Bidi_Class/Pop_Directional_Format/regex');

require('unicode-4.0.0/Bidi_Class/Right_To_Left/code-points');
require('unicode-4.0.0/Bidi_Class/Right_To_Left/symbols');
require('unicode-4.0.0/Bidi_Class/Right_To_Left/regex');

require('unicode-4.0.0/Bidi_Class/Right_To_Left_Embedding/code-points');
require('unicode-4.0.0/Bidi_Class/Right_To_Left_Embedding/symbols');
require('unicode-4.0.0/Bidi_Class/Right_To_Left_Embedding/regex');

require('unicode-4.0.0/Bidi_Class/Right_To_Left_Override/code-points');
require('unicode-4.0.0/Bidi_Class/Right_To_Left_Override/symbols');
require('unicode-4.0.0/Bidi_Class/Right_To_Left_Override/regex');

require('unicode-4.0.0/Bidi_Class/Segment_Separator/code-points');
require('unicode-4.0.0/Bidi_Class/Segment_Separator/symbols');
require('unicode-4.0.0/Bidi_Class/Segment_Separator/regex');

require('unicode-4.0.0/Bidi_Class/White_Space/code-points');
require('unicode-4.0.0/Bidi_Class/White_Space/symbols');
require('unicode-4.0.0/Bidi_Class/White_Space/regex');

// `Script`:

require('unicode-4.0.0/Script/ARABIC/code-points');
require('unicode-4.0.0/Script/ARABIC/symbols');
require('unicode-4.0.0/Script/ARABIC/regex');

require('unicode-4.0.0/Script/ARMENIAN/code-points');
require('unicode-4.0.0/Script/ARMENIAN/symbols');
require('unicode-4.0.0/Script/ARMENIAN/regex');

require('unicode-4.0.0/Script/BENGALI/code-points');
require('unicode-4.0.0/Script/BENGALI/symbols');
require('unicode-4.0.0/Script/BENGALI/regex');

require('unicode-4.0.0/Script/BOPOMOFO/code-points');
require('unicode-4.0.0/Script/BOPOMOFO/symbols');
require('unicode-4.0.0/Script/BOPOMOFO/regex');

require('unicode-4.0.0/Script/BRAILLE/code-points');
require('unicode-4.0.0/Script/BRAILLE/symbols');
require('unicode-4.0.0/Script/BRAILLE/regex');

require('unicode-4.0.0/Script/BUHID/code-points');
require('unicode-4.0.0/Script/BUHID/symbols');
require('unicode-4.0.0/Script/BUHID/regex');

require('unicode-4.0.0/Script/CANADIAN_ABORIGINAL/code-points');
require('unicode-4.0.0/Script/CANADIAN_ABORIGINAL/symbols');
require('unicode-4.0.0/Script/CANADIAN_ABORIGINAL/regex');

require('unicode-4.0.0/Script/CHEROKEE/code-points');
require('unicode-4.0.0/Script/CHEROKEE/symbols');
require('unicode-4.0.0/Script/CHEROKEE/regex');

require('unicode-4.0.0/Script/CYPRIOT/code-points');
require('unicode-4.0.0/Script/CYPRIOT/symbols');
require('unicode-4.0.0/Script/CYPRIOT/regex');

require('unicode-4.0.0/Script/CYRILLIC/code-points');
require('unicode-4.0.0/Script/CYRILLIC/symbols');
require('unicode-4.0.0/Script/CYRILLIC/regex');

require('unicode-4.0.0/Script/DESERET/code-points');
require('unicode-4.0.0/Script/DESERET/symbols');
require('unicode-4.0.0/Script/DESERET/regex');

require('unicode-4.0.0/Script/DEVANAGARI/code-points');
require('unicode-4.0.0/Script/DEVANAGARI/symbols');
require('unicode-4.0.0/Script/DEVANAGARI/regex');

require('unicode-4.0.0/Script/ETHIOPIC/code-points');
require('unicode-4.0.0/Script/ETHIOPIC/symbols');
require('unicode-4.0.0/Script/ETHIOPIC/regex');

require('unicode-4.0.0/Script/GEORGIAN/code-points');
require('unicode-4.0.0/Script/GEORGIAN/symbols');
require('unicode-4.0.0/Script/GEORGIAN/regex');

require('unicode-4.0.0/Script/GOTHIC/code-points');
require('unicode-4.0.0/Script/GOTHIC/symbols');
require('unicode-4.0.0/Script/GOTHIC/regex');

require('unicode-4.0.0/Script/GREEK/code-points');
require('unicode-4.0.0/Script/GREEK/symbols');
require('unicode-4.0.0/Script/GREEK/regex');

require('unicode-4.0.0/Script/GUJARATI/code-points');
require('unicode-4.0.0/Script/GUJARATI/symbols');
require('unicode-4.0.0/Script/GUJARATI/regex');

require('unicode-4.0.0/Script/GURMUKHI/code-points');
require('unicode-4.0.0/Script/GURMUKHI/symbols');
require('unicode-4.0.0/Script/GURMUKHI/regex');

require('unicode-4.0.0/Script/HAN/code-points');
require('unicode-4.0.0/Script/HAN/symbols');
require('unicode-4.0.0/Script/HAN/regex');

require('unicode-4.0.0/Script/HANGUL/code-points');
require('unicode-4.0.0/Script/HANGUL/symbols');
require('unicode-4.0.0/Script/HANGUL/regex');

require('unicode-4.0.0/Script/HANUNOO/code-points');
require('unicode-4.0.0/Script/HANUNOO/symbols');
require('unicode-4.0.0/Script/HANUNOO/regex');

require('unicode-4.0.0/Script/HEBREW/code-points');
require('unicode-4.0.0/Script/HEBREW/symbols');
require('unicode-4.0.0/Script/HEBREW/regex');

require('unicode-4.0.0/Script/HIRAGANA/code-points');
require('unicode-4.0.0/Script/HIRAGANA/symbols');
require('unicode-4.0.0/Script/HIRAGANA/regex');

require('unicode-4.0.0/Script/INHERITED/code-points');
require('unicode-4.0.0/Script/INHERITED/symbols');
require('unicode-4.0.0/Script/INHERITED/regex');

require('unicode-4.0.0/Script/KANNADA/code-points');
require('unicode-4.0.0/Script/KANNADA/symbols');
require('unicode-4.0.0/Script/KANNADA/regex');

require('unicode-4.0.0/Script/KATAKANA/code-points');
require('unicode-4.0.0/Script/KATAKANA/symbols');
require('unicode-4.0.0/Script/KATAKANA/regex');

require('unicode-4.0.0/Script/KHMER/code-points');
require('unicode-4.0.0/Script/KHMER/symbols');
require('unicode-4.0.0/Script/KHMER/regex');

require('unicode-4.0.0/Script/LAO/code-points');
require('unicode-4.0.0/Script/LAO/symbols');
require('unicode-4.0.0/Script/LAO/regex');

require('unicode-4.0.0/Script/LATIN/code-points');
require('unicode-4.0.0/Script/LATIN/symbols');
require('unicode-4.0.0/Script/LATIN/regex');

require('unicode-4.0.0/Script/LIMBU/code-points');
require('unicode-4.0.0/Script/LIMBU/symbols');
require('unicode-4.0.0/Script/LIMBU/regex');

require('unicode-4.0.0/Script/LINEAR_B/code-points');
require('unicode-4.0.0/Script/LINEAR_B/symbols');
require('unicode-4.0.0/Script/LINEAR_B/regex');

require('unicode-4.0.0/Script/MALAYALAM/code-points');
require('unicode-4.0.0/Script/MALAYALAM/symbols');
require('unicode-4.0.0/Script/MALAYALAM/regex');

require('unicode-4.0.0/Script/MONGOLIAN/code-points');
require('unicode-4.0.0/Script/MONGOLIAN/symbols');
require('unicode-4.0.0/Script/MONGOLIAN/regex');

require('unicode-4.0.0/Script/MYANMAR/code-points');
require('unicode-4.0.0/Script/MYANMAR/symbols');
require('unicode-4.0.0/Script/MYANMAR/regex');

require('unicode-4.0.0/Script/OGHAM/code-points');
require('unicode-4.0.0/Script/OGHAM/symbols');
require('unicode-4.0.0/Script/OGHAM/regex');

require('unicode-4.0.0/Script/OLD_ITALIC/code-points');
require('unicode-4.0.0/Script/OLD_ITALIC/symbols');
require('unicode-4.0.0/Script/OLD_ITALIC/regex');

require('unicode-4.0.0/Script/ORIYA/code-points');
require('unicode-4.0.0/Script/ORIYA/symbols');
require('unicode-4.0.0/Script/ORIYA/regex');

require('unicode-4.0.0/Script/OSMANYA/code-points');
require('unicode-4.0.0/Script/OSMANYA/symbols');
require('unicode-4.0.0/Script/OSMANYA/regex');

require('unicode-4.0.0/Script/RUNIC/code-points');
require('unicode-4.0.0/Script/RUNIC/symbols');
require('unicode-4.0.0/Script/RUNIC/regex');

require('unicode-4.0.0/Script/SHAVIAN/code-points');
require('unicode-4.0.0/Script/SHAVIAN/symbols');
require('unicode-4.0.0/Script/SHAVIAN/regex');

require('unicode-4.0.0/Script/SINHALA/code-points');
require('unicode-4.0.0/Script/SINHALA/symbols');
require('unicode-4.0.0/Script/SINHALA/regex');

require('unicode-4.0.0/Script/SYRIAC/code-points');
require('unicode-4.0.0/Script/SYRIAC/symbols');
require('unicode-4.0.0/Script/SYRIAC/regex');

require('unicode-4.0.0/Script/TAGALOG/code-points');
require('unicode-4.0.0/Script/TAGALOG/symbols');
require('unicode-4.0.0/Script/TAGALOG/regex');

require('unicode-4.0.0/Script/TAGBANWA/code-points');
require('unicode-4.0.0/Script/TAGBANWA/symbols');
require('unicode-4.0.0/Script/TAGBANWA/regex');

require('unicode-4.0.0/Script/TAI_LE/code-points');
require('unicode-4.0.0/Script/TAI_LE/symbols');
require('unicode-4.0.0/Script/TAI_LE/regex');

require('unicode-4.0.0/Script/TAMIL/code-points');
require('unicode-4.0.0/Script/TAMIL/symbols');
require('unicode-4.0.0/Script/TAMIL/regex');

require('unicode-4.0.0/Script/TELUGU/code-points');
require('unicode-4.0.0/Script/TELUGU/symbols');
require('unicode-4.0.0/Script/TELUGU/regex');

require('unicode-4.0.0/Script/THAANA/code-points');
require('unicode-4.0.0/Script/THAANA/symbols');
require('unicode-4.0.0/Script/THAANA/regex');

require('unicode-4.0.0/Script/THAI/code-points');
require('unicode-4.0.0/Script/THAI/symbols');
require('unicode-4.0.0/Script/THAI/regex');

require('unicode-4.0.0/Script/TIBETAN/code-points');
require('unicode-4.0.0/Script/TIBETAN/symbols');
require('unicode-4.0.0/Script/TIBETAN/regex');

require('unicode-4.0.0/Script/UGARITIC/code-points');
require('unicode-4.0.0/Script/UGARITIC/symbols');
require('unicode-4.0.0/Script/UGARITIC/regex');

require('unicode-4.0.0/Script/YI/code-points');
require('unicode-4.0.0/Script/YI/symbols');
require('unicode-4.0.0/Script/YI/regex');

// `Case_Folding`:

require('unicode-4.0.0/Case_Folding/C/code-points'); // lookup map from code point to code point
require('unicode-4.0.0/Case_Folding/C/code-points').get(codePoint);
require('unicode-4.0.0/Case_Folding/C/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.0/Case_Folding/C/symbols').get(symbol);

require('unicode-4.0.0/Case_Folding/F/code-points'); // lookup map from code point to code point
require('unicode-4.0.0/Case_Folding/F/code-points').get(codePoint);
require('unicode-4.0.0/Case_Folding/F/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.0/Case_Folding/F/symbols').get(symbol);

require('unicode-4.0.0/Case_Folding/S/code-points'); // lookup map from code point to code point
require('unicode-4.0.0/Case_Folding/S/code-points').get(codePoint);
require('unicode-4.0.0/Case_Folding/S/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.0/Case_Folding/S/symbols').get(symbol);

require('unicode-4.0.0/Case_Folding/T/code-points'); // lookup map from code point to code point
require('unicode-4.0.0/Case_Folding/T/code-points').get(codePoint);
require('unicode-4.0.0/Case_Folding/T/symbols'); // lookup map from symbol to symbol
require('unicode-4.0.0/Case_Folding/T/symbols').get(symbol);

// `Block`:

require('unicode-4.0.0/Block/Aegean_Numbers/code-points');
require('unicode-4.0.0/Block/Aegean_Numbers/symbols');
require('unicode-4.0.0/Block/Aegean_Numbers/regex');

require('unicode-4.0.0/Block/Alphabetic_Presentation_Forms/code-points');
require('unicode-4.0.0/Block/Alphabetic_Presentation_Forms/symbols');
require('unicode-4.0.0/Block/Alphabetic_Presentation_Forms/regex');

require('unicode-4.0.0/Block/Arabic/code-points');
require('unicode-4.0.0/Block/Arabic/symbols');
require('unicode-4.0.0/Block/Arabic/regex');

require('unicode-4.0.0/Block/Arabic_Presentation_Forms_A/code-points');
require('unicode-4.0.0/Block/Arabic_Presentation_Forms_A/symbols');
require('unicode-4.0.0/Block/Arabic_Presentation_Forms_A/regex');

require('unicode-4.0.0/Block/Arabic_Presentation_Forms_B/code-points');
require('unicode-4.0.0/Block/Arabic_Presentation_Forms_B/symbols');
require('unicode-4.0.0/Block/Arabic_Presentation_Forms_B/regex');

require('unicode-4.0.0/Block/Armenian/code-points');
require('unicode-4.0.0/Block/Armenian/symbols');
require('unicode-4.0.0/Block/Armenian/regex');

require('unicode-4.0.0/Block/Arrows/code-points');
require('unicode-4.0.0/Block/Arrows/symbols');
require('unicode-4.0.0/Block/Arrows/regex');

require('unicode-4.0.0/Block/Basic_Latin/code-points');
require('unicode-4.0.0/Block/Basic_Latin/symbols');
require('unicode-4.0.0/Block/Basic_Latin/regex');

require('unicode-4.0.0/Block/Bengali/code-points');
require('unicode-4.0.0/Block/Bengali/symbols');
require('unicode-4.0.0/Block/Bengali/regex');

require('unicode-4.0.0/Block/Block_Elements/code-points');
require('unicode-4.0.0/Block/Block_Elements/symbols');
require('unicode-4.0.0/Block/Block_Elements/regex');

require('unicode-4.0.0/Block/Bopomofo/code-points');
require('unicode-4.0.0/Block/Bopomofo/symbols');
require('unicode-4.0.0/Block/Bopomofo/regex');

require('unicode-4.0.0/Block/Bopomofo_Extended/code-points');
require('unicode-4.0.0/Block/Bopomofo_Extended/symbols');
require('unicode-4.0.0/Block/Bopomofo_Extended/regex');

require('unicode-4.0.0/Block/Box_Drawing/code-points');
require('unicode-4.0.0/Block/Box_Drawing/symbols');
require('unicode-4.0.0/Block/Box_Drawing/regex');

require('unicode-4.0.0/Block/Braille_Patterns/code-points');
require('unicode-4.0.0/Block/Braille_Patterns/symbols');
require('unicode-4.0.0/Block/Braille_Patterns/regex');

require('unicode-4.0.0/Block/Buhid/code-points');
require('unicode-4.0.0/Block/Buhid/symbols');
require('unicode-4.0.0/Block/Buhid/regex');

require('unicode-4.0.0/Block/Byzantine_Musical_Symbols/code-points');
require('unicode-4.0.0/Block/Byzantine_Musical_Symbols/symbols');
require('unicode-4.0.0/Block/Byzantine_Musical_Symbols/regex');

require('unicode-4.0.0/Block/CJK_Compatibility/code-points');
require('unicode-4.0.0/Block/CJK_Compatibility/symbols');
require('unicode-4.0.0/Block/CJK_Compatibility/regex');

require('unicode-4.0.0/Block/CJK_Compatibility_Forms/code-points');
require('unicode-4.0.0/Block/CJK_Compatibility_Forms/symbols');
require('unicode-4.0.0/Block/CJK_Compatibility_Forms/regex');

require('unicode-4.0.0/Block/CJK_Compatibility_Ideographs/code-points');
require('unicode-4.0.0/Block/CJK_Compatibility_Ideographs/symbols');
require('unicode-4.0.0/Block/CJK_Compatibility_Ideographs/regex');

require('unicode-4.0.0/Block/CJK_Compatibility_Ideographs_Supplement/code-points');
require('unicode-4.0.0/Block/CJK_Compatibility_Ideographs_Supplement/symbols');
require('unicode-4.0.0/Block/CJK_Compatibility_Ideographs_Supplement/regex');

require('unicode-4.0.0/Block/CJK_Radicals_Supplement/code-points');
require('unicode-4.0.0/Block/CJK_Radicals_Supplement/symbols');
require('unicode-4.0.0/Block/CJK_Radicals_Supplement/regex');

require('unicode-4.0.0/Block/CJK_Symbols_And_Punctuation/code-points');
require('unicode-4.0.0/Block/CJK_Symbols_And_Punctuation/symbols');
require('unicode-4.0.0/Block/CJK_Symbols_And_Punctuation/regex');

require('unicode-4.0.0/Block/CJK_Unified_Ideographs/code-points');
require('unicode-4.0.0/Block/CJK_Unified_Ideographs/symbols');
require('unicode-4.0.0/Block/CJK_Unified_Ideographs/regex');

require('unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_A/code-points');
require('unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_A/symbols');
require('unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_A/regex');

require('unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_B/code-points');
require('unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_B/symbols');
require('unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_B/regex');

require('unicode-4.0.0/Block/Cherokee/code-points');
require('unicode-4.0.0/Block/Cherokee/symbols');
require('unicode-4.0.0/Block/Cherokee/regex');

require('unicode-4.0.0/Block/Combining_Diacritical_Marks/code-points');
require('unicode-4.0.0/Block/Combining_Diacritical_Marks/symbols');
require('unicode-4.0.0/Block/Combining_Diacritical_Marks/regex');

require('unicode-4.0.0/Block/Combining_Diacritical_Marks_For_Symbols/code-points');
require('unicode-4.0.0/Block/Combining_Diacritical_Marks_For_Symbols/symbols');
require('unicode-4.0.0/Block/Combining_Diacritical_Marks_For_Symbols/regex');

require('unicode-4.0.0/Block/Combining_Half_Marks/code-points');
require('unicode-4.0.0/Block/Combining_Half_Marks/symbols');
require('unicode-4.0.0/Block/Combining_Half_Marks/regex');

require('unicode-4.0.0/Block/Control_Pictures/code-points');
require('unicode-4.0.0/Block/Control_Pictures/symbols');
require('unicode-4.0.0/Block/Control_Pictures/regex');

require('unicode-4.0.0/Block/Currency_Symbols/code-points');
require('unicode-4.0.0/Block/Currency_Symbols/symbols');
require('unicode-4.0.0/Block/Currency_Symbols/regex');

require('unicode-4.0.0/Block/Cypriot_Syllabary/code-points');
require('unicode-4.0.0/Block/Cypriot_Syllabary/symbols');
require('unicode-4.0.0/Block/Cypriot_Syllabary/regex');

require('unicode-4.0.0/Block/Cyrillic/code-points');
require('unicode-4.0.0/Block/Cyrillic/symbols');
require('unicode-4.0.0/Block/Cyrillic/regex');

require('unicode-4.0.0/Block/Cyrillic_Supplement/code-points');
require('unicode-4.0.0/Block/Cyrillic_Supplement/symbols');
require('unicode-4.0.0/Block/Cyrillic_Supplement/regex');

require('unicode-4.0.0/Block/Deseret/code-points');
require('unicode-4.0.0/Block/Deseret/symbols');
require('unicode-4.0.0/Block/Deseret/regex');

require('unicode-4.0.0/Block/Devanagari/code-points');
require('unicode-4.0.0/Block/Devanagari/symbols');
require('unicode-4.0.0/Block/Devanagari/regex');

require('unicode-4.0.0/Block/Dingbats/code-points');
require('unicode-4.0.0/Block/Dingbats/symbols');
require('unicode-4.0.0/Block/Dingbats/regex');

require('unicode-4.0.0/Block/Enclosed_Alphanumerics/code-points');
require('unicode-4.0.0/Block/Enclosed_Alphanumerics/symbols');
require('unicode-4.0.0/Block/Enclosed_Alphanumerics/regex');

require('unicode-4.0.0/Block/Enclosed_CJK_Letters_And_Months/code-points');
require('unicode-4.0.0/Block/Enclosed_CJK_Letters_And_Months/symbols');
require('unicode-4.0.0/Block/Enclosed_CJK_Letters_And_Months/regex');

require('unicode-4.0.0/Block/Ethiopic/code-points');
require('unicode-4.0.0/Block/Ethiopic/symbols');
require('unicode-4.0.0/Block/Ethiopic/regex');

require('unicode-4.0.0/Block/General_Punctuation/code-points');
require('unicode-4.0.0/Block/General_Punctuation/symbols');
require('unicode-4.0.0/Block/General_Punctuation/regex');

require('unicode-4.0.0/Block/Geometric_Shapes/code-points');
require('unicode-4.0.0/Block/Geometric_Shapes/symbols');
require('unicode-4.0.0/Block/Geometric_Shapes/regex');

require('unicode-4.0.0/Block/Georgian/code-points');
require('unicode-4.0.0/Block/Georgian/symbols');
require('unicode-4.0.0/Block/Georgian/regex');

require('unicode-4.0.0/Block/Gothic/code-points');
require('unicode-4.0.0/Block/Gothic/symbols');
require('unicode-4.0.0/Block/Gothic/regex');

require('unicode-4.0.0/Block/Greek_And_Coptic/code-points');
require('unicode-4.0.0/Block/Greek_And_Coptic/symbols');
require('unicode-4.0.0/Block/Greek_And_Coptic/regex');

require('unicode-4.0.0/Block/Greek_Extended/code-points');
require('unicode-4.0.0/Block/Greek_Extended/symbols');
require('unicode-4.0.0/Block/Greek_Extended/regex');

require('unicode-4.0.0/Block/Gujarati/code-points');
require('unicode-4.0.0/Block/Gujarati/symbols');
require('unicode-4.0.0/Block/Gujarati/regex');

require('unicode-4.0.0/Block/Gurmukhi/code-points');
require('unicode-4.0.0/Block/Gurmukhi/symbols');
require('unicode-4.0.0/Block/Gurmukhi/regex');

require('unicode-4.0.0/Block/Halfwidth_And_Fullwidth_Forms/code-points');
require('unicode-4.0.0/Block/Halfwidth_And_Fullwidth_Forms/symbols');
require('unicode-4.0.0/Block/Halfwidth_And_Fullwidth_Forms/regex');

require('unicode-4.0.0/Block/Hangul_Compatibility_Jamo/code-points');
require('unicode-4.0.0/Block/Hangul_Compatibility_Jamo/symbols');
require('unicode-4.0.0/Block/Hangul_Compatibility_Jamo/regex');

require('unicode-4.0.0/Block/Hangul_Jamo/code-points');
require('unicode-4.0.0/Block/Hangul_Jamo/symbols');
require('unicode-4.0.0/Block/Hangul_Jamo/regex');

require('unicode-4.0.0/Block/Hangul_Syllables/code-points');
require('unicode-4.0.0/Block/Hangul_Syllables/symbols');
require('unicode-4.0.0/Block/Hangul_Syllables/regex');

require('unicode-4.0.0/Block/Hanunoo/code-points');
require('unicode-4.0.0/Block/Hanunoo/symbols');
require('unicode-4.0.0/Block/Hanunoo/regex');

require('unicode-4.0.0/Block/Hebrew/code-points');
require('unicode-4.0.0/Block/Hebrew/symbols');
require('unicode-4.0.0/Block/Hebrew/regex');

require('unicode-4.0.0/Block/High_Private_Use_Surrogates/code-points');
require('unicode-4.0.0/Block/High_Private_Use_Surrogates/symbols');
require('unicode-4.0.0/Block/High_Private_Use_Surrogates/regex');

require('unicode-4.0.0/Block/High_Surrogates/code-points');
require('unicode-4.0.0/Block/High_Surrogates/symbols');
require('unicode-4.0.0/Block/High_Surrogates/regex');

require('unicode-4.0.0/Block/Hiragana/code-points');
require('unicode-4.0.0/Block/Hiragana/symbols');
require('unicode-4.0.0/Block/Hiragana/regex');

require('unicode-4.0.0/Block/IPA_Extensions/code-points');
require('unicode-4.0.0/Block/IPA_Extensions/symbols');
require('unicode-4.0.0/Block/IPA_Extensions/regex');

require('unicode-4.0.0/Block/Ideographic_Description_Characters/code-points');
require('unicode-4.0.0/Block/Ideographic_Description_Characters/symbols');
require('unicode-4.0.0/Block/Ideographic_Description_Characters/regex');

require('unicode-4.0.0/Block/Kanbun/code-points');
require('unicode-4.0.0/Block/Kanbun/symbols');
require('unicode-4.0.0/Block/Kanbun/regex');

require('unicode-4.0.0/Block/Kangxi_Radicals/code-points');
require('unicode-4.0.0/Block/Kangxi_Radicals/symbols');
require('unicode-4.0.0/Block/Kangxi_Radicals/regex');

require('unicode-4.0.0/Block/Kannada/code-points');
require('unicode-4.0.0/Block/Kannada/symbols');
require('unicode-4.0.0/Block/Kannada/regex');

require('unicode-4.0.0/Block/Katakana/code-points');
require('unicode-4.0.0/Block/Katakana/symbols');
require('unicode-4.0.0/Block/Katakana/regex');

require('unicode-4.0.0/Block/Katakana_Phonetic_Extensions/code-points');
require('unicode-4.0.0/Block/Katakana_Phonetic_Extensions/symbols');
require('unicode-4.0.0/Block/Katakana_Phonetic_Extensions/regex');

require('unicode-4.0.0/Block/Khmer/code-points');
require('unicode-4.0.0/Block/Khmer/symbols');
require('unicode-4.0.0/Block/Khmer/regex');

require('unicode-4.0.0/Block/Khmer_Symbols/code-points');
require('unicode-4.0.0/Block/Khmer_Symbols/symbols');
require('unicode-4.0.0/Block/Khmer_Symbols/regex');

require('unicode-4.0.0/Block/Lao/code-points');
require('unicode-4.0.0/Block/Lao/symbols');
require('unicode-4.0.0/Block/Lao/regex');

require('unicode-4.0.0/Block/Latin_1_Supplement/code-points');
require('unicode-4.0.0/Block/Latin_1_Supplement/symbols');
require('unicode-4.0.0/Block/Latin_1_Supplement/regex');

require('unicode-4.0.0/Block/Latin_Extended_A/code-points');
require('unicode-4.0.0/Block/Latin_Extended_A/symbols');
require('unicode-4.0.0/Block/Latin_Extended_A/regex');

require('unicode-4.0.0/Block/Latin_Extended_Additional/code-points');
require('unicode-4.0.0/Block/Latin_Extended_Additional/symbols');
require('unicode-4.0.0/Block/Latin_Extended_Additional/regex');

require('unicode-4.0.0/Block/Latin_Extended_B/code-points');
require('unicode-4.0.0/Block/Latin_Extended_B/symbols');
require('unicode-4.0.0/Block/Latin_Extended_B/regex');

require('unicode-4.0.0/Block/Letterlike_Symbols/code-points');
require('unicode-4.0.0/Block/Letterlike_Symbols/symbols');
require('unicode-4.0.0/Block/Letterlike_Symbols/regex');

require('unicode-4.0.0/Block/Limbu/code-points');
require('unicode-4.0.0/Block/Limbu/symbols');
require('unicode-4.0.0/Block/Limbu/regex');

require('unicode-4.0.0/Block/Linear_B_Ideograms/code-points');
require('unicode-4.0.0/Block/Linear_B_Ideograms/symbols');
require('unicode-4.0.0/Block/Linear_B_Ideograms/regex');

require('unicode-4.0.0/Block/Linear_B_Syllabary/code-points');
require('unicode-4.0.0/Block/Linear_B_Syllabary/symbols');
require('unicode-4.0.0/Block/Linear_B_Syllabary/regex');

require('unicode-4.0.0/Block/Low_Surrogates/code-points');
require('unicode-4.0.0/Block/Low_Surrogates/symbols');
require('unicode-4.0.0/Block/Low_Surrogates/regex');

require('unicode-4.0.0/Block/Malayalam/code-points');
require('unicode-4.0.0/Block/Malayalam/symbols');
require('unicode-4.0.0/Block/Malayalam/regex');

require('unicode-4.0.0/Block/Mathematical_Alphanumeric_Symbols/code-points');
require('unicode-4.0.0/Block/Mathematical_Alphanumeric_Symbols/symbols');
require('unicode-4.0.0/Block/Mathematical_Alphanumeric_Symbols/regex');

require('unicode-4.0.0/Block/Mathematical_Operators/code-points');
require('unicode-4.0.0/Block/Mathematical_Operators/symbols');
require('unicode-4.0.0/Block/Mathematical_Operators/regex');

require('unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_A/code-points');
require('unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_A/symbols');
require('unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_A/regex');

require('unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_B/code-points');
require('unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_B/symbols');
require('unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_B/regex');

require('unicode-4.0.0/Block/Miscellaneous_Symbols/code-points');
require('unicode-4.0.0/Block/Miscellaneous_Symbols/symbols');
require('unicode-4.0.0/Block/Miscellaneous_Symbols/regex');

require('unicode-4.0.0/Block/Miscellaneous_Symbols_And_Arrows/code-points');
require('unicode-4.0.0/Block/Miscellaneous_Symbols_And_Arrows/symbols');
require('unicode-4.0.0/Block/Miscellaneous_Symbols_And_Arrows/regex');

require('unicode-4.0.0/Block/Miscellaneous_Technical/code-points');
require('unicode-4.0.0/Block/Miscellaneous_Technical/symbols');
require('unicode-4.0.0/Block/Miscellaneous_Technical/regex');

require('unicode-4.0.0/Block/Mongolian/code-points');
require('unicode-4.0.0/Block/Mongolian/symbols');
require('unicode-4.0.0/Block/Mongolian/regex');

require('unicode-4.0.0/Block/Musical_Symbols/code-points');
require('unicode-4.0.0/Block/Musical_Symbols/symbols');
require('unicode-4.0.0/Block/Musical_Symbols/regex');

require('unicode-4.0.0/Block/Myanmar/code-points');
require('unicode-4.0.0/Block/Myanmar/symbols');
require('unicode-4.0.0/Block/Myanmar/regex');

require('unicode-4.0.0/Block/Number_Forms/code-points');
require('unicode-4.0.0/Block/Number_Forms/symbols');
require('unicode-4.0.0/Block/Number_Forms/regex');

require('unicode-4.0.0/Block/Ogham/code-points');
require('unicode-4.0.0/Block/Ogham/symbols');
require('unicode-4.0.0/Block/Ogham/regex');

require('unicode-4.0.0/Block/Old_Italic/code-points');
require('unicode-4.0.0/Block/Old_Italic/symbols');
require('unicode-4.0.0/Block/Old_Italic/regex');

require('unicode-4.0.0/Block/Optical_Character_Recognition/code-points');
require('unicode-4.0.0/Block/Optical_Character_Recognition/symbols');
require('unicode-4.0.0/Block/Optical_Character_Recognition/regex');

require('unicode-4.0.0/Block/Oriya/code-points');
require('unicode-4.0.0/Block/Oriya/symbols');
require('unicode-4.0.0/Block/Oriya/regex');

require('unicode-4.0.0/Block/Osmanya/code-points');
require('unicode-4.0.0/Block/Osmanya/symbols');
require('unicode-4.0.0/Block/Osmanya/regex');

require('unicode-4.0.0/Block/Phonetic_Extensions/code-points');
require('unicode-4.0.0/Block/Phonetic_Extensions/symbols');
require('unicode-4.0.0/Block/Phonetic_Extensions/regex');

require('unicode-4.0.0/Block/Private_Use_Area/code-points');
require('unicode-4.0.0/Block/Private_Use_Area/symbols');
require('unicode-4.0.0/Block/Private_Use_Area/regex');

require('unicode-4.0.0/Block/Runic/code-points');
require('unicode-4.0.0/Block/Runic/symbols');
require('unicode-4.0.0/Block/Runic/regex');

require('unicode-4.0.0/Block/Shavian/code-points');
require('unicode-4.0.0/Block/Shavian/symbols');
require('unicode-4.0.0/Block/Shavian/regex');

require('unicode-4.0.0/Block/Sinhala/code-points');
require('unicode-4.0.0/Block/Sinhala/symbols');
require('unicode-4.0.0/Block/Sinhala/regex');

require('unicode-4.0.0/Block/Small_Form_Variants/code-points');
require('unicode-4.0.0/Block/Small_Form_Variants/symbols');
require('unicode-4.0.0/Block/Small_Form_Variants/regex');

require('unicode-4.0.0/Block/Spacing_Modifier_Letters/code-points');
require('unicode-4.0.0/Block/Spacing_Modifier_Letters/symbols');
require('unicode-4.0.0/Block/Spacing_Modifier_Letters/regex');

require('unicode-4.0.0/Block/Specials/code-points');
require('unicode-4.0.0/Block/Specials/symbols');
require('unicode-4.0.0/Block/Specials/regex');

require('unicode-4.0.0/Block/Superscripts_And_Subscripts/code-points');
require('unicode-4.0.0/Block/Superscripts_And_Subscripts/symbols');
require('unicode-4.0.0/Block/Superscripts_And_Subscripts/regex');

require('unicode-4.0.0/Block/Supplemental_Arrows_A/code-points');
require('unicode-4.0.0/Block/Supplemental_Arrows_A/symbols');
require('unicode-4.0.0/Block/Supplemental_Arrows_A/regex');

require('unicode-4.0.0/Block/Supplemental_Arrows_B/code-points');
require('unicode-4.0.0/Block/Supplemental_Arrows_B/symbols');
require('unicode-4.0.0/Block/Supplemental_Arrows_B/regex');

require('unicode-4.0.0/Block/Supplemental_Mathematical_Operators/code-points');
require('unicode-4.0.0/Block/Supplemental_Mathematical_Operators/symbols');
require('unicode-4.0.0/Block/Supplemental_Mathematical_Operators/regex');

require('unicode-4.0.0/Block/Supplementary_Private_Use_Area_A/code-points');
require('unicode-4.0.0/Block/Supplementary_Private_Use_Area_A/symbols');
require('unicode-4.0.0/Block/Supplementary_Private_Use_Area_A/regex');

require('unicode-4.0.0/Block/Supplementary_Private_Use_Area_B/code-points');
require('unicode-4.0.0/Block/Supplementary_Private_Use_Area_B/symbols');
require('unicode-4.0.0/Block/Supplementary_Private_Use_Area_B/regex');

require('unicode-4.0.0/Block/Syriac/code-points');
require('unicode-4.0.0/Block/Syriac/symbols');
require('unicode-4.0.0/Block/Syriac/regex');

require('unicode-4.0.0/Block/Tagalog/code-points');
require('unicode-4.0.0/Block/Tagalog/symbols');
require('unicode-4.0.0/Block/Tagalog/regex');

require('unicode-4.0.0/Block/Tagbanwa/code-points');
require('unicode-4.0.0/Block/Tagbanwa/symbols');
require('unicode-4.0.0/Block/Tagbanwa/regex');

require('unicode-4.0.0/Block/Tags/code-points');
require('unicode-4.0.0/Block/Tags/symbols');
require('unicode-4.0.0/Block/Tags/regex');

require('unicode-4.0.0/Block/Tai_Le/code-points');
require('unicode-4.0.0/Block/Tai_Le/symbols');
require('unicode-4.0.0/Block/Tai_Le/regex');

require('unicode-4.0.0/Block/Tai_Xuan_Jing_Symbols/code-points');
require('unicode-4.0.0/Block/Tai_Xuan_Jing_Symbols/symbols');
require('unicode-4.0.0/Block/Tai_Xuan_Jing_Symbols/regex');

require('unicode-4.0.0/Block/Tamil/code-points');
require('unicode-4.0.0/Block/Tamil/symbols');
require('unicode-4.0.0/Block/Tamil/regex');

require('unicode-4.0.0/Block/Telugu/code-points');
require('unicode-4.0.0/Block/Telugu/symbols');
require('unicode-4.0.0/Block/Telugu/regex');

require('unicode-4.0.0/Block/Thaana/code-points');
require('unicode-4.0.0/Block/Thaana/symbols');
require('unicode-4.0.0/Block/Thaana/regex');

require('unicode-4.0.0/Block/Thai/code-points');
require('unicode-4.0.0/Block/Thai/symbols');
require('unicode-4.0.0/Block/Thai/regex');

require('unicode-4.0.0/Block/Tibetan/code-points');
require('unicode-4.0.0/Block/Tibetan/symbols');
require('unicode-4.0.0/Block/Tibetan/regex');

require('unicode-4.0.0/Block/Ugaritic/code-points');
require('unicode-4.0.0/Block/Ugaritic/symbols');
require('unicode-4.0.0/Block/Ugaritic/regex');

require('unicode-4.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/code-points');
require('unicode-4.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/symbols');
require('unicode-4.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/regex');

require('unicode-4.0.0/Block/Variation_Selectors/code-points');
require('unicode-4.0.0/Block/Variation_Selectors/symbols');
require('unicode-4.0.0/Block/Variation_Selectors/regex');

require('unicode-4.0.0/Block/Variation_Selectors_Supplement/code-points');
require('unicode-4.0.0/Block/Variation_Selectors_Supplement/symbols');
require('unicode-4.0.0/Block/Variation_Selectors_Supplement/regex');

require('unicode-4.0.0/Block/Yi_Radicals/code-points');
require('unicode-4.0.0/Block/Yi_Radicals/symbols');
require('unicode-4.0.0/Block/Yi_Radicals/regex');

require('unicode-4.0.0/Block/Yi_Syllables/code-points');
require('unicode-4.0.0/Block/Yi_Syllables/symbols');
require('unicode-4.0.0/Block/Yi_Syllables/regex');

require('unicode-4.0.0/Block/Yijing_Hexagram_Symbols/code-points');
require('unicode-4.0.0/Block/Yijing_Hexagram_Symbols/symbols');
require('unicode-4.0.0/Block/Yijing_Hexagram_Symbols/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.

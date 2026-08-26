# Unicode v4.0.0 data [![@unicode/unicode-4.0.0 on npm](https://img.shields.io/npm/v/@unicode/unicode-4.0.0)](https://www.npmjs.com/package/@unicode/unicode-4.0.0)

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v4.0.0’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/node-unicode/node-unicode-data/issues).**

## Installation

```bash
npm install @unicode/unicode-4.0.0 --save-dev
```

**Note:** _@unicode/unicode-4.0.0_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
import regenerate from 'regenerate';
import arabic from '@unicode/unicode-6.3.0/Script_Extensions/Arabic/code-points.mjs'; // Or `…/symbols`, doesn’t matter.
import greek from '@unicode/unicode-6.3.0/Script_Extensions/Greek/code-points.mjs'; // Or `…/symbols`, doesn’t matter.
const set = regenerate()
  .add(arabic)
  .add(greek);
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
import uppercaseLetterCodePoints from '@unicode/unicode-4.0.0/General_Category/Uppercase_Letter/code-points.mjs';
// Get an array of symbols (strings) in a given Unicode category:
import uppercaseLetterSymbols from '@unicode/unicode-4.0.0/General_Category/Uppercase_Letter/symbols.mjs';
// Get a regular expression that matches any symbol in a given Unicode category:
import uppercaseLetterRegex from '@unicode/unicode-4.0.0/General_Category/Uppercase_Letter/regex.mjs';
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
import generalCategory from '@unicode/unicode-4.0.0/General_Category/index.mjs';
const category = generalCategory.get(0x41);
// Get an array of all code points with a given bidi class:
import otherNeutralCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Other_Neutral/code-points.mjs';
// Get a map from code points to bidi classes:
import bidiClassMap from '@unicode/unicode-4.0.0/Bidi_Class/index.mjs';
// Get the directionality of a given code point:
const directionality = bidiClassMap.get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v4.0.0:

```js
// `Names`:

import names from '@unicode/unicode-4.0.0/Names/index.mjs'; // Array of canonical names.


// `General_Category`:

import General_Category from '@unicode/unicode-4.0.0/General_Category/index.mjs'; // Lookup map.

import Cased_LetterCodePoints from '@unicode/unicode-4.0.0/General_Category/Cased_Letter/code-points.mjs';
import Cased_LetterSymbols from '@unicode/unicode-4.0.0/General_Category/Cased_Letter/symbols.mjs';
import Cased_LetterRegex from '@unicode/unicode-4.0.0/General_Category/Cased_Letter/regex.mjs';

import Close_PunctuationCodePoints from '@unicode/unicode-4.0.0/General_Category/Close_Punctuation/code-points.mjs';
import Close_PunctuationSymbols from '@unicode/unicode-4.0.0/General_Category/Close_Punctuation/symbols.mjs';
import Close_PunctuationRegex from '@unicode/unicode-4.0.0/General_Category/Close_Punctuation/regex.mjs';

import Connector_PunctuationCodePoints from '@unicode/unicode-4.0.0/General_Category/Connector_Punctuation/code-points.mjs';
import Connector_PunctuationSymbols from '@unicode/unicode-4.0.0/General_Category/Connector_Punctuation/symbols.mjs';
import Connector_PunctuationRegex from '@unicode/unicode-4.0.0/General_Category/Connector_Punctuation/regex.mjs';

import ControlCodePoints from '@unicode/unicode-4.0.0/General_Category/Control/code-points.mjs';
import ControlSymbols from '@unicode/unicode-4.0.0/General_Category/Control/symbols.mjs';
import ControlRegex from '@unicode/unicode-4.0.0/General_Category/Control/regex.mjs';

import Currency_SymbolCodePoints from '@unicode/unicode-4.0.0/General_Category/Currency_Symbol/code-points.mjs';
import Currency_SymbolSymbols from '@unicode/unicode-4.0.0/General_Category/Currency_Symbol/symbols.mjs';
import Currency_SymbolRegex from '@unicode/unicode-4.0.0/General_Category/Currency_Symbol/regex.mjs';

import Dash_PunctuationCodePoints from '@unicode/unicode-4.0.0/General_Category/Dash_Punctuation/code-points.mjs';
import Dash_PunctuationSymbols from '@unicode/unicode-4.0.0/General_Category/Dash_Punctuation/symbols.mjs';
import Dash_PunctuationRegex from '@unicode/unicode-4.0.0/General_Category/Dash_Punctuation/regex.mjs';

import Decimal_NumberCodePoints from '@unicode/unicode-4.0.0/General_Category/Decimal_Number/code-points.mjs';
import Decimal_NumberSymbols from '@unicode/unicode-4.0.0/General_Category/Decimal_Number/symbols.mjs';
import Decimal_NumberRegex from '@unicode/unicode-4.0.0/General_Category/Decimal_Number/regex.mjs';

import Enclosing_MarkCodePoints from '@unicode/unicode-4.0.0/General_Category/Enclosing_Mark/code-points.mjs';
import Enclosing_MarkSymbols from '@unicode/unicode-4.0.0/General_Category/Enclosing_Mark/symbols.mjs';
import Enclosing_MarkRegex from '@unicode/unicode-4.0.0/General_Category/Enclosing_Mark/regex.mjs';

import Final_PunctuationCodePoints from '@unicode/unicode-4.0.0/General_Category/Final_Punctuation/code-points.mjs';
import Final_PunctuationSymbols from '@unicode/unicode-4.0.0/General_Category/Final_Punctuation/symbols.mjs';
import Final_PunctuationRegex from '@unicode/unicode-4.0.0/General_Category/Final_Punctuation/regex.mjs';

import FormatCodePoints from '@unicode/unicode-4.0.0/General_Category/Format/code-points.mjs';
import FormatSymbols from '@unicode/unicode-4.0.0/General_Category/Format/symbols.mjs';
import FormatRegex from '@unicode/unicode-4.0.0/General_Category/Format/regex.mjs';

import Initial_PunctuationCodePoints from '@unicode/unicode-4.0.0/General_Category/Initial_Punctuation/code-points.mjs';
import Initial_PunctuationSymbols from '@unicode/unicode-4.0.0/General_Category/Initial_Punctuation/symbols.mjs';
import Initial_PunctuationRegex from '@unicode/unicode-4.0.0/General_Category/Initial_Punctuation/regex.mjs';

import LetterCodePoints from '@unicode/unicode-4.0.0/General_Category/Letter/code-points.mjs';
import LetterSymbols from '@unicode/unicode-4.0.0/General_Category/Letter/symbols.mjs';
import LetterRegex from '@unicode/unicode-4.0.0/General_Category/Letter/regex.mjs';

import Letter_NumberCodePoints from '@unicode/unicode-4.0.0/General_Category/Letter_Number/code-points.mjs';
import Letter_NumberSymbols from '@unicode/unicode-4.0.0/General_Category/Letter_Number/symbols.mjs';
import Letter_NumberRegex from '@unicode/unicode-4.0.0/General_Category/Letter_Number/regex.mjs';

import Line_SeparatorCodePoints from '@unicode/unicode-4.0.0/General_Category/Line_Separator/code-points.mjs';
import Line_SeparatorSymbols from '@unicode/unicode-4.0.0/General_Category/Line_Separator/symbols.mjs';
import Line_SeparatorRegex from '@unicode/unicode-4.0.0/General_Category/Line_Separator/regex.mjs';

import Lowercase_LetterCodePoints from '@unicode/unicode-4.0.0/General_Category/Lowercase_Letter/code-points.mjs';
import Lowercase_LetterSymbols from '@unicode/unicode-4.0.0/General_Category/Lowercase_Letter/symbols.mjs';
import Lowercase_LetterRegex from '@unicode/unicode-4.0.0/General_Category/Lowercase_Letter/regex.mjs';

import MarkCodePoints from '@unicode/unicode-4.0.0/General_Category/Mark/code-points.mjs';
import MarkSymbols from '@unicode/unicode-4.0.0/General_Category/Mark/symbols.mjs';
import MarkRegex from '@unicode/unicode-4.0.0/General_Category/Mark/regex.mjs';

import Math_SymbolCodePoints from '@unicode/unicode-4.0.0/General_Category/Math_Symbol/code-points.mjs';
import Math_SymbolSymbols from '@unicode/unicode-4.0.0/General_Category/Math_Symbol/symbols.mjs';
import Math_SymbolRegex from '@unicode/unicode-4.0.0/General_Category/Math_Symbol/regex.mjs';

import Modifier_LetterCodePoints from '@unicode/unicode-4.0.0/General_Category/Modifier_Letter/code-points.mjs';
import Modifier_LetterSymbols from '@unicode/unicode-4.0.0/General_Category/Modifier_Letter/symbols.mjs';
import Modifier_LetterRegex from '@unicode/unicode-4.0.0/General_Category/Modifier_Letter/regex.mjs';

import Modifier_SymbolCodePoints from '@unicode/unicode-4.0.0/General_Category/Modifier_Symbol/code-points.mjs';
import Modifier_SymbolSymbols from '@unicode/unicode-4.0.0/General_Category/Modifier_Symbol/symbols.mjs';
import Modifier_SymbolRegex from '@unicode/unicode-4.0.0/General_Category/Modifier_Symbol/regex.mjs';

import Nonspacing_MarkCodePoints from '@unicode/unicode-4.0.0/General_Category/Nonspacing_Mark/code-points.mjs';
import Nonspacing_MarkSymbols from '@unicode/unicode-4.0.0/General_Category/Nonspacing_Mark/symbols.mjs';
import Nonspacing_MarkRegex from '@unicode/unicode-4.0.0/General_Category/Nonspacing_Mark/regex.mjs';

import NumberCodePoints from '@unicode/unicode-4.0.0/General_Category/Number/code-points.mjs';
import NumberSymbols from '@unicode/unicode-4.0.0/General_Category/Number/symbols.mjs';
import NumberRegex from '@unicode/unicode-4.0.0/General_Category/Number/regex.mjs';

import Open_PunctuationCodePoints from '@unicode/unicode-4.0.0/General_Category/Open_Punctuation/code-points.mjs';
import Open_PunctuationSymbols from '@unicode/unicode-4.0.0/General_Category/Open_Punctuation/symbols.mjs';
import Open_PunctuationRegex from '@unicode/unicode-4.0.0/General_Category/Open_Punctuation/regex.mjs';

import OtherCodePoints from '@unicode/unicode-4.0.0/General_Category/Other/code-points.mjs';
import OtherSymbols from '@unicode/unicode-4.0.0/General_Category/Other/symbols.mjs';
import OtherRegex from '@unicode/unicode-4.0.0/General_Category/Other/regex.mjs';

import Other_LetterCodePoints from '@unicode/unicode-4.0.0/General_Category/Other_Letter/code-points.mjs';
import Other_LetterSymbols from '@unicode/unicode-4.0.0/General_Category/Other_Letter/symbols.mjs';
import Other_LetterRegex from '@unicode/unicode-4.0.0/General_Category/Other_Letter/regex.mjs';

import Other_NumberCodePoints from '@unicode/unicode-4.0.0/General_Category/Other_Number/code-points.mjs';
import Other_NumberSymbols from '@unicode/unicode-4.0.0/General_Category/Other_Number/symbols.mjs';
import Other_NumberRegex from '@unicode/unicode-4.0.0/General_Category/Other_Number/regex.mjs';

import Other_PunctuationCodePoints from '@unicode/unicode-4.0.0/General_Category/Other_Punctuation/code-points.mjs';
import Other_PunctuationSymbols from '@unicode/unicode-4.0.0/General_Category/Other_Punctuation/symbols.mjs';
import Other_PunctuationRegex from '@unicode/unicode-4.0.0/General_Category/Other_Punctuation/regex.mjs';

import Other_SymbolCodePoints from '@unicode/unicode-4.0.0/General_Category/Other_Symbol/code-points.mjs';
import Other_SymbolSymbols from '@unicode/unicode-4.0.0/General_Category/Other_Symbol/symbols.mjs';
import Other_SymbolRegex from '@unicode/unicode-4.0.0/General_Category/Other_Symbol/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-4.0.0/General_Category/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-4.0.0/General_Category/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-4.0.0/General_Category/Paragraph_Separator/regex.mjs';

import Private_UseCodePoints from '@unicode/unicode-4.0.0/General_Category/Private_Use/code-points.mjs';
import Private_UseSymbols from '@unicode/unicode-4.0.0/General_Category/Private_Use/symbols.mjs';
import Private_UseRegex from '@unicode/unicode-4.0.0/General_Category/Private_Use/regex.mjs';

import PunctuationCodePoints from '@unicode/unicode-4.0.0/General_Category/Punctuation/code-points.mjs';
import PunctuationSymbols from '@unicode/unicode-4.0.0/General_Category/Punctuation/symbols.mjs';
import PunctuationRegex from '@unicode/unicode-4.0.0/General_Category/Punctuation/regex.mjs';

import SeparatorCodePoints from '@unicode/unicode-4.0.0/General_Category/Separator/code-points.mjs';
import SeparatorSymbols from '@unicode/unicode-4.0.0/General_Category/Separator/symbols.mjs';
import SeparatorRegex from '@unicode/unicode-4.0.0/General_Category/Separator/regex.mjs';

import Space_SeparatorCodePoints from '@unicode/unicode-4.0.0/General_Category/Space_Separator/code-points.mjs';
import Space_SeparatorSymbols from '@unicode/unicode-4.0.0/General_Category/Space_Separator/symbols.mjs';
import Space_SeparatorRegex from '@unicode/unicode-4.0.0/General_Category/Space_Separator/regex.mjs';

import Spacing_MarkCodePoints from '@unicode/unicode-4.0.0/General_Category/Spacing_Mark/code-points.mjs';
import Spacing_MarkSymbols from '@unicode/unicode-4.0.0/General_Category/Spacing_Mark/symbols.mjs';
import Spacing_MarkRegex from '@unicode/unicode-4.0.0/General_Category/Spacing_Mark/regex.mjs';

import SurrogateCodePoints from '@unicode/unicode-4.0.0/General_Category/Surrogate/code-points.mjs';
import SurrogateSymbols from '@unicode/unicode-4.0.0/General_Category/Surrogate/symbols.mjs';
import SurrogateRegex from '@unicode/unicode-4.0.0/General_Category/Surrogate/regex.mjs';

import SymbolCodePoints from '@unicode/unicode-4.0.0/General_Category/Symbol/code-points.mjs';
import SymbolSymbols from '@unicode/unicode-4.0.0/General_Category/Symbol/symbols.mjs';
import SymbolRegex from '@unicode/unicode-4.0.0/General_Category/Symbol/regex.mjs';

import Titlecase_LetterCodePoints from '@unicode/unicode-4.0.0/General_Category/Titlecase_Letter/code-points.mjs';
import Titlecase_LetterSymbols from '@unicode/unicode-4.0.0/General_Category/Titlecase_Letter/symbols.mjs';
import Titlecase_LetterRegex from '@unicode/unicode-4.0.0/General_Category/Titlecase_Letter/regex.mjs';

import UnassignedCodePoints from '@unicode/unicode-4.0.0/General_Category/Unassigned/code-points.mjs';
import UnassignedSymbols from '@unicode/unicode-4.0.0/General_Category/Unassigned/symbols.mjs';
import UnassignedRegex from '@unicode/unicode-4.0.0/General_Category/Unassigned/regex.mjs';

import Uppercase_LetterCodePoints from '@unicode/unicode-4.0.0/General_Category/Uppercase_Letter/code-points.mjs';
import Uppercase_LetterSymbols from '@unicode/unicode-4.0.0/General_Category/Uppercase_Letter/symbols.mjs';
import Uppercase_LetterRegex from '@unicode/unicode-4.0.0/General_Category/Uppercase_Letter/regex.mjs';

// `Binary_Property`:

import ASCIICodePoints from '@unicode/unicode-4.0.0/Binary_Property/ASCII/code-points.mjs';
import ASCIISymbols from '@unicode/unicode-4.0.0/Binary_Property/ASCII/symbols.mjs';
import ASCIIRegex from '@unicode/unicode-4.0.0/Binary_Property/ASCII/regex.mjs';

import ASCII_Hex_DigitCodePoints from '@unicode/unicode-4.0.0/Binary_Property/ASCII_Hex_Digit/code-points.mjs';
import ASCII_Hex_DigitSymbols from '@unicode/unicode-4.0.0/Binary_Property/ASCII_Hex_Digit/symbols.mjs';
import ASCII_Hex_DigitRegex from '@unicode/unicode-4.0.0/Binary_Property/ASCII_Hex_Digit/regex.mjs';

import AlphabeticCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Alphabetic/code-points.mjs';
import AlphabeticSymbols from '@unicode/unicode-4.0.0/Binary_Property/Alphabetic/symbols.mjs';
import AlphabeticRegex from '@unicode/unicode-4.0.0/Binary_Property/Alphabetic/regex.mjs';

import AnyCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Any/code-points.mjs';
import AnySymbols from '@unicode/unicode-4.0.0/Binary_Property/Any/symbols.mjs';
import AnyRegex from '@unicode/unicode-4.0.0/Binary_Property/Any/regex.mjs';

import AssignedCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Assigned/code-points.mjs';
import AssignedSymbols from '@unicode/unicode-4.0.0/Binary_Property/Assigned/symbols.mjs';
import AssignedRegex from '@unicode/unicode-4.0.0/Binary_Property/Assigned/regex.mjs';

import Bidi_ControlCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Bidi_Control/code-points.mjs';
import Bidi_ControlSymbols from '@unicode/unicode-4.0.0/Binary_Property/Bidi_Control/symbols.mjs';
import Bidi_ControlRegex from '@unicode/unicode-4.0.0/Binary_Property/Bidi_Control/regex.mjs';

import Bidi_MirroredCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Bidi_Mirrored/code-points.mjs';
import Bidi_MirroredSymbols from '@unicode/unicode-4.0.0/Binary_Property/Bidi_Mirrored/symbols.mjs';
import Bidi_MirroredRegex from '@unicode/unicode-4.0.0/Binary_Property/Bidi_Mirrored/regex.mjs';

import DashCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Dash/code-points.mjs';
import DashSymbols from '@unicode/unicode-4.0.0/Binary_Property/Dash/symbols.mjs';
import DashRegex from '@unicode/unicode-4.0.0/Binary_Property/Dash/regex.mjs';

import Default_Ignorable_Code_PointCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Default_Ignorable_Code_Point/code-points.mjs';
import Default_Ignorable_Code_PointSymbols from '@unicode/unicode-4.0.0/Binary_Property/Default_Ignorable_Code_Point/symbols.mjs';
import Default_Ignorable_Code_PointRegex from '@unicode/unicode-4.0.0/Binary_Property/Default_Ignorable_Code_Point/regex.mjs';

import DeprecatedCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Deprecated/code-points.mjs';
import DeprecatedSymbols from '@unicode/unicode-4.0.0/Binary_Property/Deprecated/symbols.mjs';
import DeprecatedRegex from '@unicode/unicode-4.0.0/Binary_Property/Deprecated/regex.mjs';

import DiacriticCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Diacritic/code-points.mjs';
import DiacriticSymbols from '@unicode/unicode-4.0.0/Binary_Property/Diacritic/symbols.mjs';
import DiacriticRegex from '@unicode/unicode-4.0.0/Binary_Property/Diacritic/regex.mjs';

import Expands_On_NFCCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFC/code-points.mjs';
import Expands_On_NFCSymbols from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFC/symbols.mjs';
import Expands_On_NFCRegex from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFC/regex.mjs';

import Expands_On_NFDCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFD/code-points.mjs';
import Expands_On_NFDSymbols from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFD/symbols.mjs';
import Expands_On_NFDRegex from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFD/regex.mjs';

import Expands_On_NFKCCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFKC/code-points.mjs';
import Expands_On_NFKCSymbols from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFKC/symbols.mjs';
import Expands_On_NFKCRegex from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFKC/regex.mjs';

import Expands_On_NFKDCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFKD/code-points.mjs';
import Expands_On_NFKDSymbols from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFKD/symbols.mjs';
import Expands_On_NFKDRegex from '@unicode/unicode-4.0.0/Binary_Property/Expands_On_NFKD/regex.mjs';

import ExtenderCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Extender/code-points.mjs';
import ExtenderSymbols from '@unicode/unicode-4.0.0/Binary_Property/Extender/symbols.mjs';
import ExtenderRegex from '@unicode/unicode-4.0.0/Binary_Property/Extender/regex.mjs';

import Full_Composition_ExclusionCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Full_Composition_Exclusion/code-points.mjs';
import Full_Composition_ExclusionSymbols from '@unicode/unicode-4.0.0/Binary_Property/Full_Composition_Exclusion/symbols.mjs';
import Full_Composition_ExclusionRegex from '@unicode/unicode-4.0.0/Binary_Property/Full_Composition_Exclusion/regex.mjs';

import Grapheme_BaseCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Base/code-points.mjs';
import Grapheme_BaseSymbols from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Base/symbols.mjs';
import Grapheme_BaseRegex from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Base/regex.mjs';

import Grapheme_ExtendCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Extend/code-points.mjs';
import Grapheme_ExtendSymbols from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Extend/symbols.mjs';
import Grapheme_ExtendRegex from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Extend/regex.mjs';

import Grapheme_LinkCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Link/code-points.mjs';
import Grapheme_LinkSymbols from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Link/symbols.mjs';
import Grapheme_LinkRegex from '@unicode/unicode-4.0.0/Binary_Property/Grapheme_Link/regex.mjs';

import Hex_DigitCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Hex_Digit/code-points.mjs';
import Hex_DigitSymbols from '@unicode/unicode-4.0.0/Binary_Property/Hex_Digit/symbols.mjs';
import Hex_DigitRegex from '@unicode/unicode-4.0.0/Binary_Property/Hex_Digit/regex.mjs';

import HyphenCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Hyphen/code-points.mjs';
import HyphenSymbols from '@unicode/unicode-4.0.0/Binary_Property/Hyphen/symbols.mjs';
import HyphenRegex from '@unicode/unicode-4.0.0/Binary_Property/Hyphen/regex.mjs';

import IDS_Binary_OperatorCodePoints from '@unicode/unicode-4.0.0/Binary_Property/IDS_Binary_Operator/code-points.mjs';
import IDS_Binary_OperatorSymbols from '@unicode/unicode-4.0.0/Binary_Property/IDS_Binary_Operator/symbols.mjs';
import IDS_Binary_OperatorRegex from '@unicode/unicode-4.0.0/Binary_Property/IDS_Binary_Operator/regex.mjs';

import IDS_Trinary_OperatorCodePoints from '@unicode/unicode-4.0.0/Binary_Property/IDS_Trinary_Operator/code-points.mjs';
import IDS_Trinary_OperatorSymbols from '@unicode/unicode-4.0.0/Binary_Property/IDS_Trinary_Operator/symbols.mjs';
import IDS_Trinary_OperatorRegex from '@unicode/unicode-4.0.0/Binary_Property/IDS_Trinary_Operator/regex.mjs';

import ID_ContinueCodePoints from '@unicode/unicode-4.0.0/Binary_Property/ID_Continue/code-points.mjs';
import ID_ContinueSymbols from '@unicode/unicode-4.0.0/Binary_Property/ID_Continue/symbols.mjs';
import ID_ContinueRegex from '@unicode/unicode-4.0.0/Binary_Property/ID_Continue/regex.mjs';

import ID_StartCodePoints from '@unicode/unicode-4.0.0/Binary_Property/ID_Start/code-points.mjs';
import ID_StartSymbols from '@unicode/unicode-4.0.0/Binary_Property/ID_Start/symbols.mjs';
import ID_StartRegex from '@unicode/unicode-4.0.0/Binary_Property/ID_Start/regex.mjs';

import IdeographicCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Ideographic/code-points.mjs';
import IdeographicSymbols from '@unicode/unicode-4.0.0/Binary_Property/Ideographic/symbols.mjs';
import IdeographicRegex from '@unicode/unicode-4.0.0/Binary_Property/Ideographic/regex.mjs';

import Join_ControlCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Join_Control/code-points.mjs';
import Join_ControlSymbols from '@unicode/unicode-4.0.0/Binary_Property/Join_Control/symbols.mjs';
import Join_ControlRegex from '@unicode/unicode-4.0.0/Binary_Property/Join_Control/regex.mjs';

import Logical_Order_ExceptionCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Logical_Order_Exception/code-points.mjs';
import Logical_Order_ExceptionSymbols from '@unicode/unicode-4.0.0/Binary_Property/Logical_Order_Exception/symbols.mjs';
import Logical_Order_ExceptionRegex from '@unicode/unicode-4.0.0/Binary_Property/Logical_Order_Exception/regex.mjs';

import LowercaseCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Lowercase/code-points.mjs';
import LowercaseSymbols from '@unicode/unicode-4.0.0/Binary_Property/Lowercase/symbols.mjs';
import LowercaseRegex from '@unicode/unicode-4.0.0/Binary_Property/Lowercase/regex.mjs';

import MathCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Math/code-points.mjs';
import MathSymbols from '@unicode/unicode-4.0.0/Binary_Property/Math/symbols.mjs';
import MathRegex from '@unicode/unicode-4.0.0/Binary_Property/Math/regex.mjs';

import NFC_MAYBECodePoints from '@unicode/unicode-4.0.0/Binary_Property/NFC_MAYBE/code-points.mjs';
import NFC_MAYBESymbols from '@unicode/unicode-4.0.0/Binary_Property/NFC_MAYBE/symbols.mjs';
import NFC_MAYBERegex from '@unicode/unicode-4.0.0/Binary_Property/NFC_MAYBE/regex.mjs';

import NFC_NOCodePoints from '@unicode/unicode-4.0.0/Binary_Property/NFC_NO/code-points.mjs';
import NFC_NOSymbols from '@unicode/unicode-4.0.0/Binary_Property/NFC_NO/symbols.mjs';
import NFC_NORegex from '@unicode/unicode-4.0.0/Binary_Property/NFC_NO/regex.mjs';

import NFD_NOCodePoints from '@unicode/unicode-4.0.0/Binary_Property/NFD_NO/code-points.mjs';
import NFD_NOSymbols from '@unicode/unicode-4.0.0/Binary_Property/NFD_NO/symbols.mjs';
import NFD_NORegex from '@unicode/unicode-4.0.0/Binary_Property/NFD_NO/regex.mjs';

import NFKC_MAYBECodePoints from '@unicode/unicode-4.0.0/Binary_Property/NFKC_MAYBE/code-points.mjs';
import NFKC_MAYBESymbols from '@unicode/unicode-4.0.0/Binary_Property/NFKC_MAYBE/symbols.mjs';
import NFKC_MAYBERegex from '@unicode/unicode-4.0.0/Binary_Property/NFKC_MAYBE/regex.mjs';

import NFKC_NOCodePoints from '@unicode/unicode-4.0.0/Binary_Property/NFKC_NO/code-points.mjs';
import NFKC_NOSymbols from '@unicode/unicode-4.0.0/Binary_Property/NFKC_NO/symbols.mjs';
import NFKC_NORegex from '@unicode/unicode-4.0.0/Binary_Property/NFKC_NO/regex.mjs';

import NFKD_NOCodePoints from '@unicode/unicode-4.0.0/Binary_Property/NFKD_NO/code-points.mjs';
import NFKD_NOSymbols from '@unicode/unicode-4.0.0/Binary_Property/NFKD_NO/symbols.mjs';
import NFKD_NORegex from '@unicode/unicode-4.0.0/Binary_Property/NFKD_NO/regex.mjs';

import Noncharacter_Code_PointCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Noncharacter_Code_Point/code-points.mjs';
import Noncharacter_Code_PointSymbols from '@unicode/unicode-4.0.0/Binary_Property/Noncharacter_Code_Point/symbols.mjs';
import Noncharacter_Code_PointRegex from '@unicode/unicode-4.0.0/Binary_Property/Noncharacter_Code_Point/regex.mjs';

import Other_AlphabeticCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Other_Alphabetic/code-points.mjs';
import Other_AlphabeticSymbols from '@unicode/unicode-4.0.0/Binary_Property/Other_Alphabetic/symbols.mjs';
import Other_AlphabeticRegex from '@unicode/unicode-4.0.0/Binary_Property/Other_Alphabetic/regex.mjs';

import Other_Default_Ignorable_Code_PointCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/code-points.mjs';
import Other_Default_Ignorable_Code_PointSymbols from '@unicode/unicode-4.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/symbols.mjs';
import Other_Default_Ignorable_Code_PointRegex from '@unicode/unicode-4.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/regex.mjs';

import Other_Grapheme_ExtendCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Other_Grapheme_Extend/code-points.mjs';
import Other_Grapheme_ExtendSymbols from '@unicode/unicode-4.0.0/Binary_Property/Other_Grapheme_Extend/symbols.mjs';
import Other_Grapheme_ExtendRegex from '@unicode/unicode-4.0.0/Binary_Property/Other_Grapheme_Extend/regex.mjs';

import Other_ID_StartCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Other_ID_Start/code-points.mjs';
import Other_ID_StartSymbols from '@unicode/unicode-4.0.0/Binary_Property/Other_ID_Start/symbols.mjs';
import Other_ID_StartRegex from '@unicode/unicode-4.0.0/Binary_Property/Other_ID_Start/regex.mjs';

import Other_LowercaseCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Other_Lowercase/code-points.mjs';
import Other_LowercaseSymbols from '@unicode/unicode-4.0.0/Binary_Property/Other_Lowercase/symbols.mjs';
import Other_LowercaseRegex from '@unicode/unicode-4.0.0/Binary_Property/Other_Lowercase/regex.mjs';

import Other_MathCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Other_Math/code-points.mjs';
import Other_MathSymbols from '@unicode/unicode-4.0.0/Binary_Property/Other_Math/symbols.mjs';
import Other_MathRegex from '@unicode/unicode-4.0.0/Binary_Property/Other_Math/regex.mjs';

import Other_UppercaseCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Other_Uppercase/code-points.mjs';
import Other_UppercaseSymbols from '@unicode/unicode-4.0.0/Binary_Property/Other_Uppercase/symbols.mjs';
import Other_UppercaseRegex from '@unicode/unicode-4.0.0/Binary_Property/Other_Uppercase/regex.mjs';

import Quotation_MarkCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Quotation_Mark/code-points.mjs';
import Quotation_MarkSymbols from '@unicode/unicode-4.0.0/Binary_Property/Quotation_Mark/symbols.mjs';
import Quotation_MarkRegex from '@unicode/unicode-4.0.0/Binary_Property/Quotation_Mark/regex.mjs';

import RadicalCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Radical/code-points.mjs';
import RadicalSymbols from '@unicode/unicode-4.0.0/Binary_Property/Radical/symbols.mjs';
import RadicalRegex from '@unicode/unicode-4.0.0/Binary_Property/Radical/regex.mjs';

import Soft_DottedCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Soft_Dotted/code-points.mjs';
import Soft_DottedSymbols from '@unicode/unicode-4.0.0/Binary_Property/Soft_Dotted/symbols.mjs';
import Soft_DottedRegex from '@unicode/unicode-4.0.0/Binary_Property/Soft_Dotted/regex.mjs';

import Terminal_PunctuationCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Terminal_Punctuation/code-points.mjs';
import Terminal_PunctuationSymbols from '@unicode/unicode-4.0.0/Binary_Property/Terminal_Punctuation/symbols.mjs';
import Terminal_PunctuationRegex from '@unicode/unicode-4.0.0/Binary_Property/Terminal_Punctuation/regex.mjs';

import Unified_IdeographCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Unified_Ideograph/code-points.mjs';
import Unified_IdeographSymbols from '@unicode/unicode-4.0.0/Binary_Property/Unified_Ideograph/symbols.mjs';
import Unified_IdeographRegex from '@unicode/unicode-4.0.0/Binary_Property/Unified_Ideograph/regex.mjs';

import UppercaseCodePoints from '@unicode/unicode-4.0.0/Binary_Property/Uppercase/code-points.mjs';
import UppercaseSymbols from '@unicode/unicode-4.0.0/Binary_Property/Uppercase/symbols.mjs';
import UppercaseRegex from '@unicode/unicode-4.0.0/Binary_Property/Uppercase/regex.mjs';

import White_SpaceCodePoints from '@unicode/unicode-4.0.0/Binary_Property/White_Space/code-points.mjs';
import White_SpaceSymbols from '@unicode/unicode-4.0.0/Binary_Property/White_Space/symbols.mjs';
import White_SpaceRegex from '@unicode/unicode-4.0.0/Binary_Property/White_Space/regex.mjs';

import XID_ContinueCodePoints from '@unicode/unicode-4.0.0/Binary_Property/XID_Continue/code-points.mjs';
import XID_ContinueSymbols from '@unicode/unicode-4.0.0/Binary_Property/XID_Continue/symbols.mjs';
import XID_ContinueRegex from '@unicode/unicode-4.0.0/Binary_Property/XID_Continue/regex.mjs';

import XID_StartCodePoints from '@unicode/unicode-4.0.0/Binary_Property/XID_Start/code-points.mjs';
import XID_StartSymbols from '@unicode/unicode-4.0.0/Binary_Property/XID_Start/symbols.mjs';
import XID_StartRegex from '@unicode/unicode-4.0.0/Binary_Property/XID_Start/regex.mjs';

// `Bidi_Class`:

import Bidi_Class from '@unicode/unicode-4.0.0/Bidi_Class/index.mjs'; // Lookup map.

import Arabic_LetterCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Arabic_Letter/code-points.mjs';
import Arabic_LetterSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Arabic_Letter/symbols.mjs';
import Arabic_LetterRegex from '@unicode/unicode-4.0.0/Bidi_Class/Arabic_Letter/regex.mjs';

import Arabic_NumberCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Arabic_Number/code-points.mjs';
import Arabic_NumberSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Arabic_Number/symbols.mjs';
import Arabic_NumberRegex from '@unicode/unicode-4.0.0/Bidi_Class/Arabic_Number/regex.mjs';

import Boundary_NeutralCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Boundary_Neutral/code-points.mjs';
import Boundary_NeutralSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Boundary_Neutral/symbols.mjs';
import Boundary_NeutralRegex from '@unicode/unicode-4.0.0/Bidi_Class/Boundary_Neutral/regex.mjs';

import Common_SeparatorCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Common_Separator/code-points.mjs';
import Common_SeparatorSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Common_Separator/symbols.mjs';
import Common_SeparatorRegex from '@unicode/unicode-4.0.0/Bidi_Class/Common_Separator/regex.mjs';

import European_NumberCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/European_Number/code-points.mjs';
import European_NumberSymbols from '@unicode/unicode-4.0.0/Bidi_Class/European_Number/symbols.mjs';
import European_NumberRegex from '@unicode/unicode-4.0.0/Bidi_Class/European_Number/regex.mjs';

import European_SeparatorCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/European_Separator/code-points.mjs';
import European_SeparatorSymbols from '@unicode/unicode-4.0.0/Bidi_Class/European_Separator/symbols.mjs';
import European_SeparatorRegex from '@unicode/unicode-4.0.0/Bidi_Class/European_Separator/regex.mjs';

import European_TerminatorCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/European_Terminator/code-points.mjs';
import European_TerminatorSymbols from '@unicode/unicode-4.0.0/Bidi_Class/European_Terminator/symbols.mjs';
import European_TerminatorRegex from '@unicode/unicode-4.0.0/Bidi_Class/European_Terminator/regex.mjs';

import Left_To_RightCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right/code-points.mjs';
import Left_To_RightSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right/symbols.mjs';
import Left_To_RightRegex from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right/regex.mjs';

import Left_To_Right_EmbeddingCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right_Embedding/code-points.mjs';
import Left_To_Right_EmbeddingSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right_Embedding/symbols.mjs';
import Left_To_Right_EmbeddingRegex from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right_Embedding/regex.mjs';

import Left_To_Right_OverrideCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right_Override/code-points.mjs';
import Left_To_Right_OverrideSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right_Override/symbols.mjs';
import Left_To_Right_OverrideRegex from '@unicode/unicode-4.0.0/Bidi_Class/Left_To_Right_Override/regex.mjs';

import Nonspacing_MarkCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Nonspacing_Mark/code-points.mjs';
import Nonspacing_MarkSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Nonspacing_Mark/symbols.mjs';
import Nonspacing_MarkRegex from '@unicode/unicode-4.0.0/Bidi_Class/Nonspacing_Mark/regex.mjs';

import Other_NeutralCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Other_Neutral/code-points.mjs';
import Other_NeutralSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Other_Neutral/symbols.mjs';
import Other_NeutralRegex from '@unicode/unicode-4.0.0/Bidi_Class/Other_Neutral/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-4.0.0/Bidi_Class/Paragraph_Separator/regex.mjs';

import Pop_Directional_FormatCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Pop_Directional_Format/code-points.mjs';
import Pop_Directional_FormatSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Pop_Directional_Format/symbols.mjs';
import Pop_Directional_FormatRegex from '@unicode/unicode-4.0.0/Bidi_Class/Pop_Directional_Format/regex.mjs';

import Right_To_LeftCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left/code-points.mjs';
import Right_To_LeftSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left/symbols.mjs';
import Right_To_LeftRegex from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left/regex.mjs';

import Right_To_Left_EmbeddingCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left_Embedding/code-points.mjs';
import Right_To_Left_EmbeddingSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left_Embedding/symbols.mjs';
import Right_To_Left_EmbeddingRegex from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left_Embedding/regex.mjs';

import Right_To_Left_OverrideCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left_Override/code-points.mjs';
import Right_To_Left_OverrideSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left_Override/symbols.mjs';
import Right_To_Left_OverrideRegex from '@unicode/unicode-4.0.0/Bidi_Class/Right_To_Left_Override/regex.mjs';

import Segment_SeparatorCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/Segment_Separator/code-points.mjs';
import Segment_SeparatorSymbols from '@unicode/unicode-4.0.0/Bidi_Class/Segment_Separator/symbols.mjs';
import Segment_SeparatorRegex from '@unicode/unicode-4.0.0/Bidi_Class/Segment_Separator/regex.mjs';

import White_SpaceCodePoints from '@unicode/unicode-4.0.0/Bidi_Class/White_Space/code-points.mjs';
import White_SpaceSymbols from '@unicode/unicode-4.0.0/Bidi_Class/White_Space/symbols.mjs';
import White_SpaceRegex from '@unicode/unicode-4.0.0/Bidi_Class/White_Space/regex.mjs';

// `Script`:

import ARABICCodePoints from '@unicode/unicode-4.0.0/Script/ARABIC/code-points.mjs';
import ARABICSymbols from '@unicode/unicode-4.0.0/Script/ARABIC/symbols.mjs';
import ARABICRegex from '@unicode/unicode-4.0.0/Script/ARABIC/regex.mjs';

import ARMENIANCodePoints from '@unicode/unicode-4.0.0/Script/ARMENIAN/code-points.mjs';
import ARMENIANSymbols from '@unicode/unicode-4.0.0/Script/ARMENIAN/symbols.mjs';
import ARMENIANRegex from '@unicode/unicode-4.0.0/Script/ARMENIAN/regex.mjs';

import BENGALICodePoints from '@unicode/unicode-4.0.0/Script/BENGALI/code-points.mjs';
import BENGALISymbols from '@unicode/unicode-4.0.0/Script/BENGALI/symbols.mjs';
import BENGALIRegex from '@unicode/unicode-4.0.0/Script/BENGALI/regex.mjs';

import BOPOMOFOCodePoints from '@unicode/unicode-4.0.0/Script/BOPOMOFO/code-points.mjs';
import BOPOMOFOSymbols from '@unicode/unicode-4.0.0/Script/BOPOMOFO/symbols.mjs';
import BOPOMOFORegex from '@unicode/unicode-4.0.0/Script/BOPOMOFO/regex.mjs';

import BRAILLECodePoints from '@unicode/unicode-4.0.0/Script/BRAILLE/code-points.mjs';
import BRAILLESymbols from '@unicode/unicode-4.0.0/Script/BRAILLE/symbols.mjs';
import BRAILLERegex from '@unicode/unicode-4.0.0/Script/BRAILLE/regex.mjs';

import BUHIDCodePoints from '@unicode/unicode-4.0.0/Script/BUHID/code-points.mjs';
import BUHIDSymbols from '@unicode/unicode-4.0.0/Script/BUHID/symbols.mjs';
import BUHIDRegex from '@unicode/unicode-4.0.0/Script/BUHID/regex.mjs';

import CANADIAN_ABORIGINALCodePoints from '@unicode/unicode-4.0.0/Script/CANADIAN_ABORIGINAL/code-points.mjs';
import CANADIAN_ABORIGINALSymbols from '@unicode/unicode-4.0.0/Script/CANADIAN_ABORIGINAL/symbols.mjs';
import CANADIAN_ABORIGINALRegex from '@unicode/unicode-4.0.0/Script/CANADIAN_ABORIGINAL/regex.mjs';

import CHEROKEECodePoints from '@unicode/unicode-4.0.0/Script/CHEROKEE/code-points.mjs';
import CHEROKEESymbols from '@unicode/unicode-4.0.0/Script/CHEROKEE/symbols.mjs';
import CHEROKEERegex from '@unicode/unicode-4.0.0/Script/CHEROKEE/regex.mjs';

import CYPRIOTCodePoints from '@unicode/unicode-4.0.0/Script/CYPRIOT/code-points.mjs';
import CYPRIOTSymbols from '@unicode/unicode-4.0.0/Script/CYPRIOT/symbols.mjs';
import CYPRIOTRegex from '@unicode/unicode-4.0.0/Script/CYPRIOT/regex.mjs';

import CYRILLICCodePoints from '@unicode/unicode-4.0.0/Script/CYRILLIC/code-points.mjs';
import CYRILLICSymbols from '@unicode/unicode-4.0.0/Script/CYRILLIC/symbols.mjs';
import CYRILLICRegex from '@unicode/unicode-4.0.0/Script/CYRILLIC/regex.mjs';

import DESERETCodePoints from '@unicode/unicode-4.0.0/Script/DESERET/code-points.mjs';
import DESERETSymbols from '@unicode/unicode-4.0.0/Script/DESERET/symbols.mjs';
import DESERETRegex from '@unicode/unicode-4.0.0/Script/DESERET/regex.mjs';

import DEVANAGARICodePoints from '@unicode/unicode-4.0.0/Script/DEVANAGARI/code-points.mjs';
import DEVANAGARISymbols from '@unicode/unicode-4.0.0/Script/DEVANAGARI/symbols.mjs';
import DEVANAGARIRegex from '@unicode/unicode-4.0.0/Script/DEVANAGARI/regex.mjs';

import ETHIOPICCodePoints from '@unicode/unicode-4.0.0/Script/ETHIOPIC/code-points.mjs';
import ETHIOPICSymbols from '@unicode/unicode-4.0.0/Script/ETHIOPIC/symbols.mjs';
import ETHIOPICRegex from '@unicode/unicode-4.0.0/Script/ETHIOPIC/regex.mjs';

import GEORGIANCodePoints from '@unicode/unicode-4.0.0/Script/GEORGIAN/code-points.mjs';
import GEORGIANSymbols from '@unicode/unicode-4.0.0/Script/GEORGIAN/symbols.mjs';
import GEORGIANRegex from '@unicode/unicode-4.0.0/Script/GEORGIAN/regex.mjs';

import GOTHICCodePoints from '@unicode/unicode-4.0.0/Script/GOTHIC/code-points.mjs';
import GOTHICSymbols from '@unicode/unicode-4.0.0/Script/GOTHIC/symbols.mjs';
import GOTHICRegex from '@unicode/unicode-4.0.0/Script/GOTHIC/regex.mjs';

import GREEKCodePoints from '@unicode/unicode-4.0.0/Script/GREEK/code-points.mjs';
import GREEKSymbols from '@unicode/unicode-4.0.0/Script/GREEK/symbols.mjs';
import GREEKRegex from '@unicode/unicode-4.0.0/Script/GREEK/regex.mjs';

import GUJARATICodePoints from '@unicode/unicode-4.0.0/Script/GUJARATI/code-points.mjs';
import GUJARATISymbols from '@unicode/unicode-4.0.0/Script/GUJARATI/symbols.mjs';
import GUJARATIRegex from '@unicode/unicode-4.0.0/Script/GUJARATI/regex.mjs';

import GURMUKHICodePoints from '@unicode/unicode-4.0.0/Script/GURMUKHI/code-points.mjs';
import GURMUKHISymbols from '@unicode/unicode-4.0.0/Script/GURMUKHI/symbols.mjs';
import GURMUKHIRegex from '@unicode/unicode-4.0.0/Script/GURMUKHI/regex.mjs';

import HANCodePoints from '@unicode/unicode-4.0.0/Script/HAN/code-points.mjs';
import HANSymbols from '@unicode/unicode-4.0.0/Script/HAN/symbols.mjs';
import HANRegex from '@unicode/unicode-4.0.0/Script/HAN/regex.mjs';

import HANGULCodePoints from '@unicode/unicode-4.0.0/Script/HANGUL/code-points.mjs';
import HANGULSymbols from '@unicode/unicode-4.0.0/Script/HANGUL/symbols.mjs';
import HANGULRegex from '@unicode/unicode-4.0.0/Script/HANGUL/regex.mjs';

import HANUNOOCodePoints from '@unicode/unicode-4.0.0/Script/HANUNOO/code-points.mjs';
import HANUNOOSymbols from '@unicode/unicode-4.0.0/Script/HANUNOO/symbols.mjs';
import HANUNOORegex from '@unicode/unicode-4.0.0/Script/HANUNOO/regex.mjs';

import HEBREWCodePoints from '@unicode/unicode-4.0.0/Script/HEBREW/code-points.mjs';
import HEBREWSymbols from '@unicode/unicode-4.0.0/Script/HEBREW/symbols.mjs';
import HEBREWRegex from '@unicode/unicode-4.0.0/Script/HEBREW/regex.mjs';

import HIRAGANACodePoints from '@unicode/unicode-4.0.0/Script/HIRAGANA/code-points.mjs';
import HIRAGANASymbols from '@unicode/unicode-4.0.0/Script/HIRAGANA/symbols.mjs';
import HIRAGANARegex from '@unicode/unicode-4.0.0/Script/HIRAGANA/regex.mjs';

import INHERITEDCodePoints from '@unicode/unicode-4.0.0/Script/INHERITED/code-points.mjs';
import INHERITEDSymbols from '@unicode/unicode-4.0.0/Script/INHERITED/symbols.mjs';
import INHERITEDRegex from '@unicode/unicode-4.0.0/Script/INHERITED/regex.mjs';

import KANNADACodePoints from '@unicode/unicode-4.0.0/Script/KANNADA/code-points.mjs';
import KANNADASymbols from '@unicode/unicode-4.0.0/Script/KANNADA/symbols.mjs';
import KANNADARegex from '@unicode/unicode-4.0.0/Script/KANNADA/regex.mjs';

import KATAKANACodePoints from '@unicode/unicode-4.0.0/Script/KATAKANA/code-points.mjs';
import KATAKANASymbols from '@unicode/unicode-4.0.0/Script/KATAKANA/symbols.mjs';
import KATAKANARegex from '@unicode/unicode-4.0.0/Script/KATAKANA/regex.mjs';

import KHMERCodePoints from '@unicode/unicode-4.0.0/Script/KHMER/code-points.mjs';
import KHMERSymbols from '@unicode/unicode-4.0.0/Script/KHMER/symbols.mjs';
import KHMERRegex from '@unicode/unicode-4.0.0/Script/KHMER/regex.mjs';

import LAOCodePoints from '@unicode/unicode-4.0.0/Script/LAO/code-points.mjs';
import LAOSymbols from '@unicode/unicode-4.0.0/Script/LAO/symbols.mjs';
import LAORegex from '@unicode/unicode-4.0.0/Script/LAO/regex.mjs';

import LATINCodePoints from '@unicode/unicode-4.0.0/Script/LATIN/code-points.mjs';
import LATINSymbols from '@unicode/unicode-4.0.0/Script/LATIN/symbols.mjs';
import LATINRegex from '@unicode/unicode-4.0.0/Script/LATIN/regex.mjs';

import LIMBUCodePoints from '@unicode/unicode-4.0.0/Script/LIMBU/code-points.mjs';
import LIMBUSymbols from '@unicode/unicode-4.0.0/Script/LIMBU/symbols.mjs';
import LIMBURegex from '@unicode/unicode-4.0.0/Script/LIMBU/regex.mjs';

import LINEAR_BCodePoints from '@unicode/unicode-4.0.0/Script/LINEAR_B/code-points.mjs';
import LINEAR_BSymbols from '@unicode/unicode-4.0.0/Script/LINEAR_B/symbols.mjs';
import LINEAR_BRegex from '@unicode/unicode-4.0.0/Script/LINEAR_B/regex.mjs';

import MALAYALAMCodePoints from '@unicode/unicode-4.0.0/Script/MALAYALAM/code-points.mjs';
import MALAYALAMSymbols from '@unicode/unicode-4.0.0/Script/MALAYALAM/symbols.mjs';
import MALAYALAMRegex from '@unicode/unicode-4.0.0/Script/MALAYALAM/regex.mjs';

import MONGOLIANCodePoints from '@unicode/unicode-4.0.0/Script/MONGOLIAN/code-points.mjs';
import MONGOLIANSymbols from '@unicode/unicode-4.0.0/Script/MONGOLIAN/symbols.mjs';
import MONGOLIANRegex from '@unicode/unicode-4.0.0/Script/MONGOLIAN/regex.mjs';

import MYANMARCodePoints from '@unicode/unicode-4.0.0/Script/MYANMAR/code-points.mjs';
import MYANMARSymbols from '@unicode/unicode-4.0.0/Script/MYANMAR/symbols.mjs';
import MYANMARRegex from '@unicode/unicode-4.0.0/Script/MYANMAR/regex.mjs';

import OGHAMCodePoints from '@unicode/unicode-4.0.0/Script/OGHAM/code-points.mjs';
import OGHAMSymbols from '@unicode/unicode-4.0.0/Script/OGHAM/symbols.mjs';
import OGHAMRegex from '@unicode/unicode-4.0.0/Script/OGHAM/regex.mjs';

import OLD_ITALICCodePoints from '@unicode/unicode-4.0.0/Script/OLD_ITALIC/code-points.mjs';
import OLD_ITALICSymbols from '@unicode/unicode-4.0.0/Script/OLD_ITALIC/symbols.mjs';
import OLD_ITALICRegex from '@unicode/unicode-4.0.0/Script/OLD_ITALIC/regex.mjs';

import ORIYACodePoints from '@unicode/unicode-4.0.0/Script/ORIYA/code-points.mjs';
import ORIYASymbols from '@unicode/unicode-4.0.0/Script/ORIYA/symbols.mjs';
import ORIYARegex from '@unicode/unicode-4.0.0/Script/ORIYA/regex.mjs';

import OSMANYACodePoints from '@unicode/unicode-4.0.0/Script/OSMANYA/code-points.mjs';
import OSMANYASymbols from '@unicode/unicode-4.0.0/Script/OSMANYA/symbols.mjs';
import OSMANYARegex from '@unicode/unicode-4.0.0/Script/OSMANYA/regex.mjs';

import RUNICCodePoints from '@unicode/unicode-4.0.0/Script/RUNIC/code-points.mjs';
import RUNICSymbols from '@unicode/unicode-4.0.0/Script/RUNIC/symbols.mjs';
import RUNICRegex from '@unicode/unicode-4.0.0/Script/RUNIC/regex.mjs';

import SHAVIANCodePoints from '@unicode/unicode-4.0.0/Script/SHAVIAN/code-points.mjs';
import SHAVIANSymbols from '@unicode/unicode-4.0.0/Script/SHAVIAN/symbols.mjs';
import SHAVIANRegex from '@unicode/unicode-4.0.0/Script/SHAVIAN/regex.mjs';

import SINHALACodePoints from '@unicode/unicode-4.0.0/Script/SINHALA/code-points.mjs';
import SINHALASymbols from '@unicode/unicode-4.0.0/Script/SINHALA/symbols.mjs';
import SINHALARegex from '@unicode/unicode-4.0.0/Script/SINHALA/regex.mjs';

import SYRIACCodePoints from '@unicode/unicode-4.0.0/Script/SYRIAC/code-points.mjs';
import SYRIACSymbols from '@unicode/unicode-4.0.0/Script/SYRIAC/symbols.mjs';
import SYRIACRegex from '@unicode/unicode-4.0.0/Script/SYRIAC/regex.mjs';

import TAGALOGCodePoints from '@unicode/unicode-4.0.0/Script/TAGALOG/code-points.mjs';
import TAGALOGSymbols from '@unicode/unicode-4.0.0/Script/TAGALOG/symbols.mjs';
import TAGALOGRegex from '@unicode/unicode-4.0.0/Script/TAGALOG/regex.mjs';

import TAGBANWACodePoints from '@unicode/unicode-4.0.0/Script/TAGBANWA/code-points.mjs';
import TAGBANWASymbols from '@unicode/unicode-4.0.0/Script/TAGBANWA/symbols.mjs';
import TAGBANWARegex from '@unicode/unicode-4.0.0/Script/TAGBANWA/regex.mjs';

import TAI_LECodePoints from '@unicode/unicode-4.0.0/Script/TAI_LE/code-points.mjs';
import TAI_LESymbols from '@unicode/unicode-4.0.0/Script/TAI_LE/symbols.mjs';
import TAI_LERegex from '@unicode/unicode-4.0.0/Script/TAI_LE/regex.mjs';

import TAMILCodePoints from '@unicode/unicode-4.0.0/Script/TAMIL/code-points.mjs';
import TAMILSymbols from '@unicode/unicode-4.0.0/Script/TAMIL/symbols.mjs';
import TAMILRegex from '@unicode/unicode-4.0.0/Script/TAMIL/regex.mjs';

import TELUGUCodePoints from '@unicode/unicode-4.0.0/Script/TELUGU/code-points.mjs';
import TELUGUSymbols from '@unicode/unicode-4.0.0/Script/TELUGU/symbols.mjs';
import TELUGURegex from '@unicode/unicode-4.0.0/Script/TELUGU/regex.mjs';

import THAANACodePoints from '@unicode/unicode-4.0.0/Script/THAANA/code-points.mjs';
import THAANASymbols from '@unicode/unicode-4.0.0/Script/THAANA/symbols.mjs';
import THAANARegex from '@unicode/unicode-4.0.0/Script/THAANA/regex.mjs';

import THAICodePoints from '@unicode/unicode-4.0.0/Script/THAI/code-points.mjs';
import THAISymbols from '@unicode/unicode-4.0.0/Script/THAI/symbols.mjs';
import THAIRegex from '@unicode/unicode-4.0.0/Script/THAI/regex.mjs';

import TIBETANCodePoints from '@unicode/unicode-4.0.0/Script/TIBETAN/code-points.mjs';
import TIBETANSymbols from '@unicode/unicode-4.0.0/Script/TIBETAN/symbols.mjs';
import TIBETANRegex from '@unicode/unicode-4.0.0/Script/TIBETAN/regex.mjs';

import UGARITICCodePoints from '@unicode/unicode-4.0.0/Script/UGARITIC/code-points.mjs';
import UGARITICSymbols from '@unicode/unicode-4.0.0/Script/UGARITIC/symbols.mjs';
import UGARITICRegex from '@unicode/unicode-4.0.0/Script/UGARITIC/regex.mjs';

import UnknownCodePoints from '@unicode/unicode-4.0.0/Script/Unknown/code-points.mjs';
import UnknownSymbols from '@unicode/unicode-4.0.0/Script/Unknown/symbols.mjs';
import UnknownRegex from '@unicode/unicode-4.0.0/Script/Unknown/regex.mjs';

import YICodePoints from '@unicode/unicode-4.0.0/Script/YI/code-points.mjs';
import YISymbols from '@unicode/unicode-4.0.0/Script/YI/symbols.mjs';
import YIRegex from '@unicode/unicode-4.0.0/Script/YI/regex.mjs';

// `Case_Folding`:

import CCodePoints from '@unicode/unicode-4.0.0/Case_Folding/C/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import CSymbols from '@unicode/unicode-4.0.0/Case_Folding/C/symbols.mjs'; // Lookup map from symbol to symbol(s).

import FCodePoints from '@unicode/unicode-4.0.0/Case_Folding/F/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import FSymbols from '@unicode/unicode-4.0.0/Case_Folding/F/symbols.mjs'; // Lookup map from symbol to symbol(s).

import SCodePoints from '@unicode/unicode-4.0.0/Case_Folding/S/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import SSymbols from '@unicode/unicode-4.0.0/Case_Folding/S/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TCodePoints from '@unicode/unicode-4.0.0/Case_Folding/T/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TSymbols from '@unicode/unicode-4.0.0/Case_Folding/T/symbols.mjs'; // Lookup map from symbol to symbol(s).

// `Block`:

import Aegean_NumbersCodePoints from '@unicode/unicode-4.0.0/Block/Aegean_Numbers/code-points.mjs';
import Aegean_NumbersSymbols from '@unicode/unicode-4.0.0/Block/Aegean_Numbers/symbols.mjs';
import Aegean_NumbersRegex from '@unicode/unicode-4.0.0/Block/Aegean_Numbers/regex.mjs';

import Alphabetic_Presentation_FormsCodePoints from '@unicode/unicode-4.0.0/Block/Alphabetic_Presentation_Forms/code-points.mjs';
import Alphabetic_Presentation_FormsSymbols from '@unicode/unicode-4.0.0/Block/Alphabetic_Presentation_Forms/symbols.mjs';
import Alphabetic_Presentation_FormsRegex from '@unicode/unicode-4.0.0/Block/Alphabetic_Presentation_Forms/regex.mjs';

import ArabicCodePoints from '@unicode/unicode-4.0.0/Block/Arabic/code-points.mjs';
import ArabicSymbols from '@unicode/unicode-4.0.0/Block/Arabic/symbols.mjs';
import ArabicRegex from '@unicode/unicode-4.0.0/Block/Arabic/regex.mjs';

import Arabic_Presentation_Forms_ACodePoints from '@unicode/unicode-4.0.0/Block/Arabic_Presentation_Forms_A/code-points.mjs';
import Arabic_Presentation_Forms_ASymbols from '@unicode/unicode-4.0.0/Block/Arabic_Presentation_Forms_A/symbols.mjs';
import Arabic_Presentation_Forms_ARegex from '@unicode/unicode-4.0.0/Block/Arabic_Presentation_Forms_A/regex.mjs';

import Arabic_Presentation_Forms_BCodePoints from '@unicode/unicode-4.0.0/Block/Arabic_Presentation_Forms_B/code-points.mjs';
import Arabic_Presentation_Forms_BSymbols from '@unicode/unicode-4.0.0/Block/Arabic_Presentation_Forms_B/symbols.mjs';
import Arabic_Presentation_Forms_BRegex from '@unicode/unicode-4.0.0/Block/Arabic_Presentation_Forms_B/regex.mjs';

import ArmenianCodePoints from '@unicode/unicode-4.0.0/Block/Armenian/code-points.mjs';
import ArmenianSymbols from '@unicode/unicode-4.0.0/Block/Armenian/symbols.mjs';
import ArmenianRegex from '@unicode/unicode-4.0.0/Block/Armenian/regex.mjs';

import ArrowsCodePoints from '@unicode/unicode-4.0.0/Block/Arrows/code-points.mjs';
import ArrowsSymbols from '@unicode/unicode-4.0.0/Block/Arrows/symbols.mjs';
import ArrowsRegex from '@unicode/unicode-4.0.0/Block/Arrows/regex.mjs';

import Basic_LatinCodePoints from '@unicode/unicode-4.0.0/Block/Basic_Latin/code-points.mjs';
import Basic_LatinSymbols from '@unicode/unicode-4.0.0/Block/Basic_Latin/symbols.mjs';
import Basic_LatinRegex from '@unicode/unicode-4.0.0/Block/Basic_Latin/regex.mjs';

import BengaliCodePoints from '@unicode/unicode-4.0.0/Block/Bengali/code-points.mjs';
import BengaliSymbols from '@unicode/unicode-4.0.0/Block/Bengali/symbols.mjs';
import BengaliRegex from '@unicode/unicode-4.0.0/Block/Bengali/regex.mjs';

import Block_ElementsCodePoints from '@unicode/unicode-4.0.0/Block/Block_Elements/code-points.mjs';
import Block_ElementsSymbols from '@unicode/unicode-4.0.0/Block/Block_Elements/symbols.mjs';
import Block_ElementsRegex from '@unicode/unicode-4.0.0/Block/Block_Elements/regex.mjs';

import BopomofoCodePoints from '@unicode/unicode-4.0.0/Block/Bopomofo/code-points.mjs';
import BopomofoSymbols from '@unicode/unicode-4.0.0/Block/Bopomofo/symbols.mjs';
import BopomofoRegex from '@unicode/unicode-4.0.0/Block/Bopomofo/regex.mjs';

import Bopomofo_ExtendedCodePoints from '@unicode/unicode-4.0.0/Block/Bopomofo_Extended/code-points.mjs';
import Bopomofo_ExtendedSymbols from '@unicode/unicode-4.0.0/Block/Bopomofo_Extended/symbols.mjs';
import Bopomofo_ExtendedRegex from '@unicode/unicode-4.0.0/Block/Bopomofo_Extended/regex.mjs';

import Box_DrawingCodePoints from '@unicode/unicode-4.0.0/Block/Box_Drawing/code-points.mjs';
import Box_DrawingSymbols from '@unicode/unicode-4.0.0/Block/Box_Drawing/symbols.mjs';
import Box_DrawingRegex from '@unicode/unicode-4.0.0/Block/Box_Drawing/regex.mjs';

import Braille_PatternsCodePoints from '@unicode/unicode-4.0.0/Block/Braille_Patterns/code-points.mjs';
import Braille_PatternsSymbols from '@unicode/unicode-4.0.0/Block/Braille_Patterns/symbols.mjs';
import Braille_PatternsRegex from '@unicode/unicode-4.0.0/Block/Braille_Patterns/regex.mjs';

import BuhidCodePoints from '@unicode/unicode-4.0.0/Block/Buhid/code-points.mjs';
import BuhidSymbols from '@unicode/unicode-4.0.0/Block/Buhid/symbols.mjs';
import BuhidRegex from '@unicode/unicode-4.0.0/Block/Buhid/regex.mjs';

import Byzantine_Musical_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Byzantine_Musical_Symbols/code-points.mjs';
import Byzantine_Musical_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Byzantine_Musical_Symbols/symbols.mjs';
import Byzantine_Musical_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Byzantine_Musical_Symbols/regex.mjs';

import CJK_CompatibilityCodePoints from '@unicode/unicode-4.0.0/Block/CJK_Compatibility/code-points.mjs';
import CJK_CompatibilitySymbols from '@unicode/unicode-4.0.0/Block/CJK_Compatibility/symbols.mjs';
import CJK_CompatibilityRegex from '@unicode/unicode-4.0.0/Block/CJK_Compatibility/regex.mjs';

import CJK_Compatibility_FormsCodePoints from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Forms/code-points.mjs';
import CJK_Compatibility_FormsSymbols from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Forms/symbols.mjs';
import CJK_Compatibility_FormsRegex from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Forms/regex.mjs';

import CJK_Compatibility_IdeographsCodePoints from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Ideographs/code-points.mjs';
import CJK_Compatibility_IdeographsSymbols from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Ideographs/symbols.mjs';
import CJK_Compatibility_IdeographsRegex from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Ideographs/regex.mjs';

import CJK_Compatibility_Ideographs_SupplementCodePoints from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Ideographs_Supplement/code-points.mjs';
import CJK_Compatibility_Ideographs_SupplementSymbols from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Ideographs_Supplement/symbols.mjs';
import CJK_Compatibility_Ideographs_SupplementRegex from '@unicode/unicode-4.0.0/Block/CJK_Compatibility_Ideographs_Supplement/regex.mjs';

import CJK_Radicals_SupplementCodePoints from '@unicode/unicode-4.0.0/Block/CJK_Radicals_Supplement/code-points.mjs';
import CJK_Radicals_SupplementSymbols from '@unicode/unicode-4.0.0/Block/CJK_Radicals_Supplement/symbols.mjs';
import CJK_Radicals_SupplementRegex from '@unicode/unicode-4.0.0/Block/CJK_Radicals_Supplement/regex.mjs';

import CJK_Symbols_And_PunctuationCodePoints from '@unicode/unicode-4.0.0/Block/CJK_Symbols_And_Punctuation/code-points.mjs';
import CJK_Symbols_And_PunctuationSymbols from '@unicode/unicode-4.0.0/Block/CJK_Symbols_And_Punctuation/symbols.mjs';
import CJK_Symbols_And_PunctuationRegex from '@unicode/unicode-4.0.0/Block/CJK_Symbols_And_Punctuation/regex.mjs';

import CJK_Unified_IdeographsCodePoints from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs/code-points.mjs';
import CJK_Unified_IdeographsSymbols from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs/symbols.mjs';
import CJK_Unified_IdeographsRegex from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs/regex.mjs';

import CJK_Unified_Ideographs_Extension_ACodePoints from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_A/code-points.mjs';
import CJK_Unified_Ideographs_Extension_ASymbols from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_A/symbols.mjs';
import CJK_Unified_Ideographs_Extension_ARegex from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_A/regex.mjs';

import CJK_Unified_Ideographs_Extension_BCodePoints from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_B/code-points.mjs';
import CJK_Unified_Ideographs_Extension_BSymbols from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_B/symbols.mjs';
import CJK_Unified_Ideographs_Extension_BRegex from '@unicode/unicode-4.0.0/Block/CJK_Unified_Ideographs_Extension_B/regex.mjs';

import CherokeeCodePoints from '@unicode/unicode-4.0.0/Block/Cherokee/code-points.mjs';
import CherokeeSymbols from '@unicode/unicode-4.0.0/Block/Cherokee/symbols.mjs';
import CherokeeRegex from '@unicode/unicode-4.0.0/Block/Cherokee/regex.mjs';

import Combining_Diacritical_MarksCodePoints from '@unicode/unicode-4.0.0/Block/Combining_Diacritical_Marks/code-points.mjs';
import Combining_Diacritical_MarksSymbols from '@unicode/unicode-4.0.0/Block/Combining_Diacritical_Marks/symbols.mjs';
import Combining_Diacritical_MarksRegex from '@unicode/unicode-4.0.0/Block/Combining_Diacritical_Marks/regex.mjs';

import Combining_Diacritical_Marks_For_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Combining_Diacritical_Marks_For_Symbols/code-points.mjs';
import Combining_Diacritical_Marks_For_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Combining_Diacritical_Marks_For_Symbols/symbols.mjs';
import Combining_Diacritical_Marks_For_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Combining_Diacritical_Marks_For_Symbols/regex.mjs';

import Combining_Half_MarksCodePoints from '@unicode/unicode-4.0.0/Block/Combining_Half_Marks/code-points.mjs';
import Combining_Half_MarksSymbols from '@unicode/unicode-4.0.0/Block/Combining_Half_Marks/symbols.mjs';
import Combining_Half_MarksRegex from '@unicode/unicode-4.0.0/Block/Combining_Half_Marks/regex.mjs';

import Control_PicturesCodePoints from '@unicode/unicode-4.0.0/Block/Control_Pictures/code-points.mjs';
import Control_PicturesSymbols from '@unicode/unicode-4.0.0/Block/Control_Pictures/symbols.mjs';
import Control_PicturesRegex from '@unicode/unicode-4.0.0/Block/Control_Pictures/regex.mjs';

import Currency_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Currency_Symbols/code-points.mjs';
import Currency_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Currency_Symbols/symbols.mjs';
import Currency_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Currency_Symbols/regex.mjs';

import Cypriot_SyllabaryCodePoints from '@unicode/unicode-4.0.0/Block/Cypriot_Syllabary/code-points.mjs';
import Cypriot_SyllabarySymbols from '@unicode/unicode-4.0.0/Block/Cypriot_Syllabary/symbols.mjs';
import Cypriot_SyllabaryRegex from '@unicode/unicode-4.0.0/Block/Cypriot_Syllabary/regex.mjs';

import CyrillicCodePoints from '@unicode/unicode-4.0.0/Block/Cyrillic/code-points.mjs';
import CyrillicSymbols from '@unicode/unicode-4.0.0/Block/Cyrillic/symbols.mjs';
import CyrillicRegex from '@unicode/unicode-4.0.0/Block/Cyrillic/regex.mjs';

import Cyrillic_SupplementCodePoints from '@unicode/unicode-4.0.0/Block/Cyrillic_Supplement/code-points.mjs';
import Cyrillic_SupplementSymbols from '@unicode/unicode-4.0.0/Block/Cyrillic_Supplement/symbols.mjs';
import Cyrillic_SupplementRegex from '@unicode/unicode-4.0.0/Block/Cyrillic_Supplement/regex.mjs';

import DeseretCodePoints from '@unicode/unicode-4.0.0/Block/Deseret/code-points.mjs';
import DeseretSymbols from '@unicode/unicode-4.0.0/Block/Deseret/symbols.mjs';
import DeseretRegex from '@unicode/unicode-4.0.0/Block/Deseret/regex.mjs';

import DevanagariCodePoints from '@unicode/unicode-4.0.0/Block/Devanagari/code-points.mjs';
import DevanagariSymbols from '@unicode/unicode-4.0.0/Block/Devanagari/symbols.mjs';
import DevanagariRegex from '@unicode/unicode-4.0.0/Block/Devanagari/regex.mjs';

import DingbatsCodePoints from '@unicode/unicode-4.0.0/Block/Dingbats/code-points.mjs';
import DingbatsSymbols from '@unicode/unicode-4.0.0/Block/Dingbats/symbols.mjs';
import DingbatsRegex from '@unicode/unicode-4.0.0/Block/Dingbats/regex.mjs';

import Enclosed_AlphanumericsCodePoints from '@unicode/unicode-4.0.0/Block/Enclosed_Alphanumerics/code-points.mjs';
import Enclosed_AlphanumericsSymbols from '@unicode/unicode-4.0.0/Block/Enclosed_Alphanumerics/symbols.mjs';
import Enclosed_AlphanumericsRegex from '@unicode/unicode-4.0.0/Block/Enclosed_Alphanumerics/regex.mjs';

import Enclosed_CJK_Letters_And_MonthsCodePoints from '@unicode/unicode-4.0.0/Block/Enclosed_CJK_Letters_And_Months/code-points.mjs';
import Enclosed_CJK_Letters_And_MonthsSymbols from '@unicode/unicode-4.0.0/Block/Enclosed_CJK_Letters_And_Months/symbols.mjs';
import Enclosed_CJK_Letters_And_MonthsRegex from '@unicode/unicode-4.0.0/Block/Enclosed_CJK_Letters_And_Months/regex.mjs';

import EthiopicCodePoints from '@unicode/unicode-4.0.0/Block/Ethiopic/code-points.mjs';
import EthiopicSymbols from '@unicode/unicode-4.0.0/Block/Ethiopic/symbols.mjs';
import EthiopicRegex from '@unicode/unicode-4.0.0/Block/Ethiopic/regex.mjs';

import General_PunctuationCodePoints from '@unicode/unicode-4.0.0/Block/General_Punctuation/code-points.mjs';
import General_PunctuationSymbols from '@unicode/unicode-4.0.0/Block/General_Punctuation/symbols.mjs';
import General_PunctuationRegex from '@unicode/unicode-4.0.0/Block/General_Punctuation/regex.mjs';

import Geometric_ShapesCodePoints from '@unicode/unicode-4.0.0/Block/Geometric_Shapes/code-points.mjs';
import Geometric_ShapesSymbols from '@unicode/unicode-4.0.0/Block/Geometric_Shapes/symbols.mjs';
import Geometric_ShapesRegex from '@unicode/unicode-4.0.0/Block/Geometric_Shapes/regex.mjs';

import GeorgianCodePoints from '@unicode/unicode-4.0.0/Block/Georgian/code-points.mjs';
import GeorgianSymbols from '@unicode/unicode-4.0.0/Block/Georgian/symbols.mjs';
import GeorgianRegex from '@unicode/unicode-4.0.0/Block/Georgian/regex.mjs';

import GothicCodePoints from '@unicode/unicode-4.0.0/Block/Gothic/code-points.mjs';
import GothicSymbols from '@unicode/unicode-4.0.0/Block/Gothic/symbols.mjs';
import GothicRegex from '@unicode/unicode-4.0.0/Block/Gothic/regex.mjs';

import Greek_And_CopticCodePoints from '@unicode/unicode-4.0.0/Block/Greek_And_Coptic/code-points.mjs';
import Greek_And_CopticSymbols from '@unicode/unicode-4.0.0/Block/Greek_And_Coptic/symbols.mjs';
import Greek_And_CopticRegex from '@unicode/unicode-4.0.0/Block/Greek_And_Coptic/regex.mjs';

import Greek_ExtendedCodePoints from '@unicode/unicode-4.0.0/Block/Greek_Extended/code-points.mjs';
import Greek_ExtendedSymbols from '@unicode/unicode-4.0.0/Block/Greek_Extended/symbols.mjs';
import Greek_ExtendedRegex from '@unicode/unicode-4.0.0/Block/Greek_Extended/regex.mjs';

import GujaratiCodePoints from '@unicode/unicode-4.0.0/Block/Gujarati/code-points.mjs';
import GujaratiSymbols from '@unicode/unicode-4.0.0/Block/Gujarati/symbols.mjs';
import GujaratiRegex from '@unicode/unicode-4.0.0/Block/Gujarati/regex.mjs';

import GurmukhiCodePoints from '@unicode/unicode-4.0.0/Block/Gurmukhi/code-points.mjs';
import GurmukhiSymbols from '@unicode/unicode-4.0.0/Block/Gurmukhi/symbols.mjs';
import GurmukhiRegex from '@unicode/unicode-4.0.0/Block/Gurmukhi/regex.mjs';

import Halfwidth_And_Fullwidth_FormsCodePoints from '@unicode/unicode-4.0.0/Block/Halfwidth_And_Fullwidth_Forms/code-points.mjs';
import Halfwidth_And_Fullwidth_FormsSymbols from '@unicode/unicode-4.0.0/Block/Halfwidth_And_Fullwidth_Forms/symbols.mjs';
import Halfwidth_And_Fullwidth_FormsRegex from '@unicode/unicode-4.0.0/Block/Halfwidth_And_Fullwidth_Forms/regex.mjs';

import Hangul_Compatibility_JamoCodePoints from '@unicode/unicode-4.0.0/Block/Hangul_Compatibility_Jamo/code-points.mjs';
import Hangul_Compatibility_JamoSymbols from '@unicode/unicode-4.0.0/Block/Hangul_Compatibility_Jamo/symbols.mjs';
import Hangul_Compatibility_JamoRegex from '@unicode/unicode-4.0.0/Block/Hangul_Compatibility_Jamo/regex.mjs';

import Hangul_JamoCodePoints from '@unicode/unicode-4.0.0/Block/Hangul_Jamo/code-points.mjs';
import Hangul_JamoSymbols from '@unicode/unicode-4.0.0/Block/Hangul_Jamo/symbols.mjs';
import Hangul_JamoRegex from '@unicode/unicode-4.0.0/Block/Hangul_Jamo/regex.mjs';

import Hangul_SyllablesCodePoints from '@unicode/unicode-4.0.0/Block/Hangul_Syllables/code-points.mjs';
import Hangul_SyllablesSymbols from '@unicode/unicode-4.0.0/Block/Hangul_Syllables/symbols.mjs';
import Hangul_SyllablesRegex from '@unicode/unicode-4.0.0/Block/Hangul_Syllables/regex.mjs';

import HanunooCodePoints from '@unicode/unicode-4.0.0/Block/Hanunoo/code-points.mjs';
import HanunooSymbols from '@unicode/unicode-4.0.0/Block/Hanunoo/symbols.mjs';
import HanunooRegex from '@unicode/unicode-4.0.0/Block/Hanunoo/regex.mjs';

import HebrewCodePoints from '@unicode/unicode-4.0.0/Block/Hebrew/code-points.mjs';
import HebrewSymbols from '@unicode/unicode-4.0.0/Block/Hebrew/symbols.mjs';
import HebrewRegex from '@unicode/unicode-4.0.0/Block/Hebrew/regex.mjs';

import High_Private_Use_SurrogatesCodePoints from '@unicode/unicode-4.0.0/Block/High_Private_Use_Surrogates/code-points.mjs';
import High_Private_Use_SurrogatesSymbols from '@unicode/unicode-4.0.0/Block/High_Private_Use_Surrogates/symbols.mjs';
import High_Private_Use_SurrogatesRegex from '@unicode/unicode-4.0.0/Block/High_Private_Use_Surrogates/regex.mjs';

import High_SurrogatesCodePoints from '@unicode/unicode-4.0.0/Block/High_Surrogates/code-points.mjs';
import High_SurrogatesSymbols from '@unicode/unicode-4.0.0/Block/High_Surrogates/symbols.mjs';
import High_SurrogatesRegex from '@unicode/unicode-4.0.0/Block/High_Surrogates/regex.mjs';

import HiraganaCodePoints from '@unicode/unicode-4.0.0/Block/Hiragana/code-points.mjs';
import HiraganaSymbols from '@unicode/unicode-4.0.0/Block/Hiragana/symbols.mjs';
import HiraganaRegex from '@unicode/unicode-4.0.0/Block/Hiragana/regex.mjs';

import IPA_ExtensionsCodePoints from '@unicode/unicode-4.0.0/Block/IPA_Extensions/code-points.mjs';
import IPA_ExtensionsSymbols from '@unicode/unicode-4.0.0/Block/IPA_Extensions/symbols.mjs';
import IPA_ExtensionsRegex from '@unicode/unicode-4.0.0/Block/IPA_Extensions/regex.mjs';

import Ideographic_Description_CharactersCodePoints from '@unicode/unicode-4.0.0/Block/Ideographic_Description_Characters/code-points.mjs';
import Ideographic_Description_CharactersSymbols from '@unicode/unicode-4.0.0/Block/Ideographic_Description_Characters/symbols.mjs';
import Ideographic_Description_CharactersRegex from '@unicode/unicode-4.0.0/Block/Ideographic_Description_Characters/regex.mjs';

import KanbunCodePoints from '@unicode/unicode-4.0.0/Block/Kanbun/code-points.mjs';
import KanbunSymbols from '@unicode/unicode-4.0.0/Block/Kanbun/symbols.mjs';
import KanbunRegex from '@unicode/unicode-4.0.0/Block/Kanbun/regex.mjs';

import Kangxi_RadicalsCodePoints from '@unicode/unicode-4.0.0/Block/Kangxi_Radicals/code-points.mjs';
import Kangxi_RadicalsSymbols from '@unicode/unicode-4.0.0/Block/Kangxi_Radicals/symbols.mjs';
import Kangxi_RadicalsRegex from '@unicode/unicode-4.0.0/Block/Kangxi_Radicals/regex.mjs';

import KannadaCodePoints from '@unicode/unicode-4.0.0/Block/Kannada/code-points.mjs';
import KannadaSymbols from '@unicode/unicode-4.0.0/Block/Kannada/symbols.mjs';
import KannadaRegex from '@unicode/unicode-4.0.0/Block/Kannada/regex.mjs';

import KatakanaCodePoints from '@unicode/unicode-4.0.0/Block/Katakana/code-points.mjs';
import KatakanaSymbols from '@unicode/unicode-4.0.0/Block/Katakana/symbols.mjs';
import KatakanaRegex from '@unicode/unicode-4.0.0/Block/Katakana/regex.mjs';

import Katakana_Phonetic_ExtensionsCodePoints from '@unicode/unicode-4.0.0/Block/Katakana_Phonetic_Extensions/code-points.mjs';
import Katakana_Phonetic_ExtensionsSymbols from '@unicode/unicode-4.0.0/Block/Katakana_Phonetic_Extensions/symbols.mjs';
import Katakana_Phonetic_ExtensionsRegex from '@unicode/unicode-4.0.0/Block/Katakana_Phonetic_Extensions/regex.mjs';

import KhmerCodePoints from '@unicode/unicode-4.0.0/Block/Khmer/code-points.mjs';
import KhmerSymbols from '@unicode/unicode-4.0.0/Block/Khmer/symbols.mjs';
import KhmerRegex from '@unicode/unicode-4.0.0/Block/Khmer/regex.mjs';

import Khmer_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Khmer_Symbols/code-points.mjs';
import Khmer_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Khmer_Symbols/symbols.mjs';
import Khmer_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Khmer_Symbols/regex.mjs';

import LaoCodePoints from '@unicode/unicode-4.0.0/Block/Lao/code-points.mjs';
import LaoSymbols from '@unicode/unicode-4.0.0/Block/Lao/symbols.mjs';
import LaoRegex from '@unicode/unicode-4.0.0/Block/Lao/regex.mjs';

import Latin_1_SupplementCodePoints from '@unicode/unicode-4.0.0/Block/Latin_1_Supplement/code-points.mjs';
import Latin_1_SupplementSymbols from '@unicode/unicode-4.0.0/Block/Latin_1_Supplement/symbols.mjs';
import Latin_1_SupplementRegex from '@unicode/unicode-4.0.0/Block/Latin_1_Supplement/regex.mjs';

import Latin_Extended_ACodePoints from '@unicode/unicode-4.0.0/Block/Latin_Extended_A/code-points.mjs';
import Latin_Extended_ASymbols from '@unicode/unicode-4.0.0/Block/Latin_Extended_A/symbols.mjs';
import Latin_Extended_ARegex from '@unicode/unicode-4.0.0/Block/Latin_Extended_A/regex.mjs';

import Latin_Extended_AdditionalCodePoints from '@unicode/unicode-4.0.0/Block/Latin_Extended_Additional/code-points.mjs';
import Latin_Extended_AdditionalSymbols from '@unicode/unicode-4.0.0/Block/Latin_Extended_Additional/symbols.mjs';
import Latin_Extended_AdditionalRegex from '@unicode/unicode-4.0.0/Block/Latin_Extended_Additional/regex.mjs';

import Latin_Extended_BCodePoints from '@unicode/unicode-4.0.0/Block/Latin_Extended_B/code-points.mjs';
import Latin_Extended_BSymbols from '@unicode/unicode-4.0.0/Block/Latin_Extended_B/symbols.mjs';
import Latin_Extended_BRegex from '@unicode/unicode-4.0.0/Block/Latin_Extended_B/regex.mjs';

import Letterlike_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Letterlike_Symbols/code-points.mjs';
import Letterlike_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Letterlike_Symbols/symbols.mjs';
import Letterlike_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Letterlike_Symbols/regex.mjs';

import LimbuCodePoints from '@unicode/unicode-4.0.0/Block/Limbu/code-points.mjs';
import LimbuSymbols from '@unicode/unicode-4.0.0/Block/Limbu/symbols.mjs';
import LimbuRegex from '@unicode/unicode-4.0.0/Block/Limbu/regex.mjs';

import Linear_B_IdeogramsCodePoints from '@unicode/unicode-4.0.0/Block/Linear_B_Ideograms/code-points.mjs';
import Linear_B_IdeogramsSymbols from '@unicode/unicode-4.0.0/Block/Linear_B_Ideograms/symbols.mjs';
import Linear_B_IdeogramsRegex from '@unicode/unicode-4.0.0/Block/Linear_B_Ideograms/regex.mjs';

import Linear_B_SyllabaryCodePoints from '@unicode/unicode-4.0.0/Block/Linear_B_Syllabary/code-points.mjs';
import Linear_B_SyllabarySymbols from '@unicode/unicode-4.0.0/Block/Linear_B_Syllabary/symbols.mjs';
import Linear_B_SyllabaryRegex from '@unicode/unicode-4.0.0/Block/Linear_B_Syllabary/regex.mjs';

import Low_SurrogatesCodePoints from '@unicode/unicode-4.0.0/Block/Low_Surrogates/code-points.mjs';
import Low_SurrogatesSymbols from '@unicode/unicode-4.0.0/Block/Low_Surrogates/symbols.mjs';
import Low_SurrogatesRegex from '@unicode/unicode-4.0.0/Block/Low_Surrogates/regex.mjs';

import MalayalamCodePoints from '@unicode/unicode-4.0.0/Block/Malayalam/code-points.mjs';
import MalayalamSymbols from '@unicode/unicode-4.0.0/Block/Malayalam/symbols.mjs';
import MalayalamRegex from '@unicode/unicode-4.0.0/Block/Malayalam/regex.mjs';

import Mathematical_Alphanumeric_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Mathematical_Alphanumeric_Symbols/code-points.mjs';
import Mathematical_Alphanumeric_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Mathematical_Alphanumeric_Symbols/symbols.mjs';
import Mathematical_Alphanumeric_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Mathematical_Alphanumeric_Symbols/regex.mjs';

import Mathematical_OperatorsCodePoints from '@unicode/unicode-4.0.0/Block/Mathematical_Operators/code-points.mjs';
import Mathematical_OperatorsSymbols from '@unicode/unicode-4.0.0/Block/Mathematical_Operators/symbols.mjs';
import Mathematical_OperatorsRegex from '@unicode/unicode-4.0.0/Block/Mathematical_Operators/regex.mjs';

import Miscellaneous_Mathematical_Symbols_ACodePoints from '@unicode/unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_A/code-points.mjs';
import Miscellaneous_Mathematical_Symbols_ASymbols from '@unicode/unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_A/symbols.mjs';
import Miscellaneous_Mathematical_Symbols_ARegex from '@unicode/unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_A/regex.mjs';

import Miscellaneous_Mathematical_Symbols_BCodePoints from '@unicode/unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_B/code-points.mjs';
import Miscellaneous_Mathematical_Symbols_BSymbols from '@unicode/unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_B/symbols.mjs';
import Miscellaneous_Mathematical_Symbols_BRegex from '@unicode/unicode-4.0.0/Block/Miscellaneous_Mathematical_Symbols_B/regex.mjs';

import Miscellaneous_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Miscellaneous_Symbols/code-points.mjs';
import Miscellaneous_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Miscellaneous_Symbols/symbols.mjs';
import Miscellaneous_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Miscellaneous_Symbols/regex.mjs';

import Miscellaneous_Symbols_And_ArrowsCodePoints from '@unicode/unicode-4.0.0/Block/Miscellaneous_Symbols_And_Arrows/code-points.mjs';
import Miscellaneous_Symbols_And_ArrowsSymbols from '@unicode/unicode-4.0.0/Block/Miscellaneous_Symbols_And_Arrows/symbols.mjs';
import Miscellaneous_Symbols_And_ArrowsRegex from '@unicode/unicode-4.0.0/Block/Miscellaneous_Symbols_And_Arrows/regex.mjs';

import Miscellaneous_TechnicalCodePoints from '@unicode/unicode-4.0.0/Block/Miscellaneous_Technical/code-points.mjs';
import Miscellaneous_TechnicalSymbols from '@unicode/unicode-4.0.0/Block/Miscellaneous_Technical/symbols.mjs';
import Miscellaneous_TechnicalRegex from '@unicode/unicode-4.0.0/Block/Miscellaneous_Technical/regex.mjs';

import MongolianCodePoints from '@unicode/unicode-4.0.0/Block/Mongolian/code-points.mjs';
import MongolianSymbols from '@unicode/unicode-4.0.0/Block/Mongolian/symbols.mjs';
import MongolianRegex from '@unicode/unicode-4.0.0/Block/Mongolian/regex.mjs';

import Musical_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Musical_Symbols/code-points.mjs';
import Musical_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Musical_Symbols/symbols.mjs';
import Musical_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Musical_Symbols/regex.mjs';

import MyanmarCodePoints from '@unicode/unicode-4.0.0/Block/Myanmar/code-points.mjs';
import MyanmarSymbols from '@unicode/unicode-4.0.0/Block/Myanmar/symbols.mjs';
import MyanmarRegex from '@unicode/unicode-4.0.0/Block/Myanmar/regex.mjs';

import Number_FormsCodePoints from '@unicode/unicode-4.0.0/Block/Number_Forms/code-points.mjs';
import Number_FormsSymbols from '@unicode/unicode-4.0.0/Block/Number_Forms/symbols.mjs';
import Number_FormsRegex from '@unicode/unicode-4.0.0/Block/Number_Forms/regex.mjs';

import OghamCodePoints from '@unicode/unicode-4.0.0/Block/Ogham/code-points.mjs';
import OghamSymbols from '@unicode/unicode-4.0.0/Block/Ogham/symbols.mjs';
import OghamRegex from '@unicode/unicode-4.0.0/Block/Ogham/regex.mjs';

import Old_ItalicCodePoints from '@unicode/unicode-4.0.0/Block/Old_Italic/code-points.mjs';
import Old_ItalicSymbols from '@unicode/unicode-4.0.0/Block/Old_Italic/symbols.mjs';
import Old_ItalicRegex from '@unicode/unicode-4.0.0/Block/Old_Italic/regex.mjs';

import Optical_Character_RecognitionCodePoints from '@unicode/unicode-4.0.0/Block/Optical_Character_Recognition/code-points.mjs';
import Optical_Character_RecognitionSymbols from '@unicode/unicode-4.0.0/Block/Optical_Character_Recognition/symbols.mjs';
import Optical_Character_RecognitionRegex from '@unicode/unicode-4.0.0/Block/Optical_Character_Recognition/regex.mjs';

import OriyaCodePoints from '@unicode/unicode-4.0.0/Block/Oriya/code-points.mjs';
import OriyaSymbols from '@unicode/unicode-4.0.0/Block/Oriya/symbols.mjs';
import OriyaRegex from '@unicode/unicode-4.0.0/Block/Oriya/regex.mjs';

import OsmanyaCodePoints from '@unicode/unicode-4.0.0/Block/Osmanya/code-points.mjs';
import OsmanyaSymbols from '@unicode/unicode-4.0.0/Block/Osmanya/symbols.mjs';
import OsmanyaRegex from '@unicode/unicode-4.0.0/Block/Osmanya/regex.mjs';

import Phonetic_ExtensionsCodePoints from '@unicode/unicode-4.0.0/Block/Phonetic_Extensions/code-points.mjs';
import Phonetic_ExtensionsSymbols from '@unicode/unicode-4.0.0/Block/Phonetic_Extensions/symbols.mjs';
import Phonetic_ExtensionsRegex from '@unicode/unicode-4.0.0/Block/Phonetic_Extensions/regex.mjs';

import Private_Use_AreaCodePoints from '@unicode/unicode-4.0.0/Block/Private_Use_Area/code-points.mjs';
import Private_Use_AreaSymbols from '@unicode/unicode-4.0.0/Block/Private_Use_Area/symbols.mjs';
import Private_Use_AreaRegex from '@unicode/unicode-4.0.0/Block/Private_Use_Area/regex.mjs';

import RunicCodePoints from '@unicode/unicode-4.0.0/Block/Runic/code-points.mjs';
import RunicSymbols from '@unicode/unicode-4.0.0/Block/Runic/symbols.mjs';
import RunicRegex from '@unicode/unicode-4.0.0/Block/Runic/regex.mjs';

import ShavianCodePoints from '@unicode/unicode-4.0.0/Block/Shavian/code-points.mjs';
import ShavianSymbols from '@unicode/unicode-4.0.0/Block/Shavian/symbols.mjs';
import ShavianRegex from '@unicode/unicode-4.0.0/Block/Shavian/regex.mjs';

import SinhalaCodePoints from '@unicode/unicode-4.0.0/Block/Sinhala/code-points.mjs';
import SinhalaSymbols from '@unicode/unicode-4.0.0/Block/Sinhala/symbols.mjs';
import SinhalaRegex from '@unicode/unicode-4.0.0/Block/Sinhala/regex.mjs';

import Small_Form_VariantsCodePoints from '@unicode/unicode-4.0.0/Block/Small_Form_Variants/code-points.mjs';
import Small_Form_VariantsSymbols from '@unicode/unicode-4.0.0/Block/Small_Form_Variants/symbols.mjs';
import Small_Form_VariantsRegex from '@unicode/unicode-4.0.0/Block/Small_Form_Variants/regex.mjs';

import Spacing_Modifier_LettersCodePoints from '@unicode/unicode-4.0.0/Block/Spacing_Modifier_Letters/code-points.mjs';
import Spacing_Modifier_LettersSymbols from '@unicode/unicode-4.0.0/Block/Spacing_Modifier_Letters/symbols.mjs';
import Spacing_Modifier_LettersRegex from '@unicode/unicode-4.0.0/Block/Spacing_Modifier_Letters/regex.mjs';

import SpecialsCodePoints from '@unicode/unicode-4.0.0/Block/Specials/code-points.mjs';
import SpecialsSymbols from '@unicode/unicode-4.0.0/Block/Specials/symbols.mjs';
import SpecialsRegex from '@unicode/unicode-4.0.0/Block/Specials/regex.mjs';

import Superscripts_And_SubscriptsCodePoints from '@unicode/unicode-4.0.0/Block/Superscripts_And_Subscripts/code-points.mjs';
import Superscripts_And_SubscriptsSymbols from '@unicode/unicode-4.0.0/Block/Superscripts_And_Subscripts/symbols.mjs';
import Superscripts_And_SubscriptsRegex from '@unicode/unicode-4.0.0/Block/Superscripts_And_Subscripts/regex.mjs';

import Supplemental_Arrows_ACodePoints from '@unicode/unicode-4.0.0/Block/Supplemental_Arrows_A/code-points.mjs';
import Supplemental_Arrows_ASymbols from '@unicode/unicode-4.0.0/Block/Supplemental_Arrows_A/symbols.mjs';
import Supplemental_Arrows_ARegex from '@unicode/unicode-4.0.0/Block/Supplemental_Arrows_A/regex.mjs';

import Supplemental_Arrows_BCodePoints from '@unicode/unicode-4.0.0/Block/Supplemental_Arrows_B/code-points.mjs';
import Supplemental_Arrows_BSymbols from '@unicode/unicode-4.0.0/Block/Supplemental_Arrows_B/symbols.mjs';
import Supplemental_Arrows_BRegex from '@unicode/unicode-4.0.0/Block/Supplemental_Arrows_B/regex.mjs';

import Supplemental_Mathematical_OperatorsCodePoints from '@unicode/unicode-4.0.0/Block/Supplemental_Mathematical_Operators/code-points.mjs';
import Supplemental_Mathematical_OperatorsSymbols from '@unicode/unicode-4.0.0/Block/Supplemental_Mathematical_Operators/symbols.mjs';
import Supplemental_Mathematical_OperatorsRegex from '@unicode/unicode-4.0.0/Block/Supplemental_Mathematical_Operators/regex.mjs';

import Supplementary_Private_Use_Area_ACodePoints from '@unicode/unicode-4.0.0/Block/Supplementary_Private_Use_Area_A/code-points.mjs';
import Supplementary_Private_Use_Area_ASymbols from '@unicode/unicode-4.0.0/Block/Supplementary_Private_Use_Area_A/symbols.mjs';
import Supplementary_Private_Use_Area_ARegex from '@unicode/unicode-4.0.0/Block/Supplementary_Private_Use_Area_A/regex.mjs';

import Supplementary_Private_Use_Area_BCodePoints from '@unicode/unicode-4.0.0/Block/Supplementary_Private_Use_Area_B/code-points.mjs';
import Supplementary_Private_Use_Area_BSymbols from '@unicode/unicode-4.0.0/Block/Supplementary_Private_Use_Area_B/symbols.mjs';
import Supplementary_Private_Use_Area_BRegex from '@unicode/unicode-4.0.0/Block/Supplementary_Private_Use_Area_B/regex.mjs';

import SyriacCodePoints from '@unicode/unicode-4.0.0/Block/Syriac/code-points.mjs';
import SyriacSymbols from '@unicode/unicode-4.0.0/Block/Syriac/symbols.mjs';
import SyriacRegex from '@unicode/unicode-4.0.0/Block/Syriac/regex.mjs';

import TagalogCodePoints from '@unicode/unicode-4.0.0/Block/Tagalog/code-points.mjs';
import TagalogSymbols from '@unicode/unicode-4.0.0/Block/Tagalog/symbols.mjs';
import TagalogRegex from '@unicode/unicode-4.0.0/Block/Tagalog/regex.mjs';

import TagbanwaCodePoints from '@unicode/unicode-4.0.0/Block/Tagbanwa/code-points.mjs';
import TagbanwaSymbols from '@unicode/unicode-4.0.0/Block/Tagbanwa/symbols.mjs';
import TagbanwaRegex from '@unicode/unicode-4.0.0/Block/Tagbanwa/regex.mjs';

import TagsCodePoints from '@unicode/unicode-4.0.0/Block/Tags/code-points.mjs';
import TagsSymbols from '@unicode/unicode-4.0.0/Block/Tags/symbols.mjs';
import TagsRegex from '@unicode/unicode-4.0.0/Block/Tags/regex.mjs';

import Tai_LeCodePoints from '@unicode/unicode-4.0.0/Block/Tai_Le/code-points.mjs';
import Tai_LeSymbols from '@unicode/unicode-4.0.0/Block/Tai_Le/symbols.mjs';
import Tai_LeRegex from '@unicode/unicode-4.0.0/Block/Tai_Le/regex.mjs';

import Tai_Xuan_Jing_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Tai_Xuan_Jing_Symbols/code-points.mjs';
import Tai_Xuan_Jing_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Tai_Xuan_Jing_Symbols/symbols.mjs';
import Tai_Xuan_Jing_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Tai_Xuan_Jing_Symbols/regex.mjs';

import TamilCodePoints from '@unicode/unicode-4.0.0/Block/Tamil/code-points.mjs';
import TamilSymbols from '@unicode/unicode-4.0.0/Block/Tamil/symbols.mjs';
import TamilRegex from '@unicode/unicode-4.0.0/Block/Tamil/regex.mjs';

import TeluguCodePoints from '@unicode/unicode-4.0.0/Block/Telugu/code-points.mjs';
import TeluguSymbols from '@unicode/unicode-4.0.0/Block/Telugu/symbols.mjs';
import TeluguRegex from '@unicode/unicode-4.0.0/Block/Telugu/regex.mjs';

import ThaanaCodePoints from '@unicode/unicode-4.0.0/Block/Thaana/code-points.mjs';
import ThaanaSymbols from '@unicode/unicode-4.0.0/Block/Thaana/symbols.mjs';
import ThaanaRegex from '@unicode/unicode-4.0.0/Block/Thaana/regex.mjs';

import ThaiCodePoints from '@unicode/unicode-4.0.0/Block/Thai/code-points.mjs';
import ThaiSymbols from '@unicode/unicode-4.0.0/Block/Thai/symbols.mjs';
import ThaiRegex from '@unicode/unicode-4.0.0/Block/Thai/regex.mjs';

import TibetanCodePoints from '@unicode/unicode-4.0.0/Block/Tibetan/code-points.mjs';
import TibetanSymbols from '@unicode/unicode-4.0.0/Block/Tibetan/symbols.mjs';
import TibetanRegex from '@unicode/unicode-4.0.0/Block/Tibetan/regex.mjs';

import UgariticCodePoints from '@unicode/unicode-4.0.0/Block/Ugaritic/code-points.mjs';
import UgariticSymbols from '@unicode/unicode-4.0.0/Block/Ugaritic/symbols.mjs';
import UgariticRegex from '@unicode/unicode-4.0.0/Block/Ugaritic/regex.mjs';

import Unified_Canadian_Aboriginal_SyllabicsCodePoints from '@unicode/unicode-4.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/code-points.mjs';
import Unified_Canadian_Aboriginal_SyllabicsSymbols from '@unicode/unicode-4.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/symbols.mjs';
import Unified_Canadian_Aboriginal_SyllabicsRegex from '@unicode/unicode-4.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/regex.mjs';

import Variation_SelectorsCodePoints from '@unicode/unicode-4.0.0/Block/Variation_Selectors/code-points.mjs';
import Variation_SelectorsSymbols from '@unicode/unicode-4.0.0/Block/Variation_Selectors/symbols.mjs';
import Variation_SelectorsRegex from '@unicode/unicode-4.0.0/Block/Variation_Selectors/regex.mjs';

import Variation_Selectors_SupplementCodePoints from '@unicode/unicode-4.0.0/Block/Variation_Selectors_Supplement/code-points.mjs';
import Variation_Selectors_SupplementSymbols from '@unicode/unicode-4.0.0/Block/Variation_Selectors_Supplement/symbols.mjs';
import Variation_Selectors_SupplementRegex from '@unicode/unicode-4.0.0/Block/Variation_Selectors_Supplement/regex.mjs';

import Yi_RadicalsCodePoints from '@unicode/unicode-4.0.0/Block/Yi_Radicals/code-points.mjs';
import Yi_RadicalsSymbols from '@unicode/unicode-4.0.0/Block/Yi_Radicals/symbols.mjs';
import Yi_RadicalsRegex from '@unicode/unicode-4.0.0/Block/Yi_Radicals/regex.mjs';

import Yi_SyllablesCodePoints from '@unicode/unicode-4.0.0/Block/Yi_Syllables/code-points.mjs';
import Yi_SyllablesSymbols from '@unicode/unicode-4.0.0/Block/Yi_Syllables/symbols.mjs';
import Yi_SyllablesRegex from '@unicode/unicode-4.0.0/Block/Yi_Syllables/regex.mjs';

import Yijing_Hexagram_SymbolsCodePoints from '@unicode/unicode-4.0.0/Block/Yijing_Hexagram_Symbols/code-points.mjs';
import Yijing_Hexagram_SymbolsSymbols from '@unicode/unicode-4.0.0/Block/Yijing_Hexagram_Symbols/symbols.mjs';
import Yijing_Hexagram_SymbolsRegex from '@unicode/unicode-4.0.0/Block/Yijing_Hexagram_Symbols/regex.mjs';

// `Line_Break`:

import AlphabeticCodePoints from '@unicode/unicode-4.0.0/Line_Break/Alphabetic/code-points.mjs';
import AlphabeticSymbols from '@unicode/unicode-4.0.0/Line_Break/Alphabetic/symbols.mjs';
import AlphabeticRegex from '@unicode/unicode-4.0.0/Line_Break/Alphabetic/regex.mjs';

import AmbiguousCodePoints from '@unicode/unicode-4.0.0/Line_Break/Ambiguous/code-points.mjs';
import AmbiguousSymbols from '@unicode/unicode-4.0.0/Line_Break/Ambiguous/symbols.mjs';
import AmbiguousRegex from '@unicode/unicode-4.0.0/Line_Break/Ambiguous/regex.mjs';

import Break_AfterCodePoints from '@unicode/unicode-4.0.0/Line_Break/Break_After/code-points.mjs';
import Break_AfterSymbols from '@unicode/unicode-4.0.0/Line_Break/Break_After/symbols.mjs';
import Break_AfterRegex from '@unicode/unicode-4.0.0/Line_Break/Break_After/regex.mjs';

import Break_BeforeCodePoints from '@unicode/unicode-4.0.0/Line_Break/Break_Before/code-points.mjs';
import Break_BeforeSymbols from '@unicode/unicode-4.0.0/Line_Break/Break_Before/symbols.mjs';
import Break_BeforeRegex from '@unicode/unicode-4.0.0/Line_Break/Break_Before/regex.mjs';

import Break_BothCodePoints from '@unicode/unicode-4.0.0/Line_Break/Break_Both/code-points.mjs';
import Break_BothSymbols from '@unicode/unicode-4.0.0/Line_Break/Break_Both/symbols.mjs';
import Break_BothRegex from '@unicode/unicode-4.0.0/Line_Break/Break_Both/regex.mjs';

import Break_SymbolsCodePoints from '@unicode/unicode-4.0.0/Line_Break/Break_Symbols/code-points.mjs';
import Break_SymbolsSymbols from '@unicode/unicode-4.0.0/Line_Break/Break_Symbols/symbols.mjs';
import Break_SymbolsRegex from '@unicode/unicode-4.0.0/Line_Break/Break_Symbols/regex.mjs';

import Carriage_ReturnCodePoints from '@unicode/unicode-4.0.0/Line_Break/Carriage_Return/code-points.mjs';
import Carriage_ReturnSymbols from '@unicode/unicode-4.0.0/Line_Break/Carriage_Return/symbols.mjs';
import Carriage_ReturnRegex from '@unicode/unicode-4.0.0/Line_Break/Carriage_Return/regex.mjs';

import Close_PunctuationCodePoints from '@unicode/unicode-4.0.0/Line_Break/Close_Punctuation/code-points.mjs';
import Close_PunctuationSymbols from '@unicode/unicode-4.0.0/Line_Break/Close_Punctuation/symbols.mjs';
import Close_PunctuationRegex from '@unicode/unicode-4.0.0/Line_Break/Close_Punctuation/regex.mjs';

import Combining_MarkCodePoints from '@unicode/unicode-4.0.0/Line_Break/Combining_Mark/code-points.mjs';
import Combining_MarkSymbols from '@unicode/unicode-4.0.0/Line_Break/Combining_Mark/symbols.mjs';
import Combining_MarkRegex from '@unicode/unicode-4.0.0/Line_Break/Combining_Mark/regex.mjs';

import Complex_ContextCodePoints from '@unicode/unicode-4.0.0/Line_Break/Complex_Context/code-points.mjs';
import Complex_ContextSymbols from '@unicode/unicode-4.0.0/Line_Break/Complex_Context/symbols.mjs';
import Complex_ContextRegex from '@unicode/unicode-4.0.0/Line_Break/Complex_Context/regex.mjs';

import Contingent_BreakCodePoints from '@unicode/unicode-4.0.0/Line_Break/Contingent_Break/code-points.mjs';
import Contingent_BreakSymbols from '@unicode/unicode-4.0.0/Line_Break/Contingent_Break/symbols.mjs';
import Contingent_BreakRegex from '@unicode/unicode-4.0.0/Line_Break/Contingent_Break/regex.mjs';

import ExclamationCodePoints from '@unicode/unicode-4.0.0/Line_Break/Exclamation/code-points.mjs';
import ExclamationSymbols from '@unicode/unicode-4.0.0/Line_Break/Exclamation/symbols.mjs';
import ExclamationRegex from '@unicode/unicode-4.0.0/Line_Break/Exclamation/regex.mjs';

import GlueCodePoints from '@unicode/unicode-4.0.0/Line_Break/Glue/code-points.mjs';
import GlueSymbols from '@unicode/unicode-4.0.0/Line_Break/Glue/symbols.mjs';
import GlueRegex from '@unicode/unicode-4.0.0/Line_Break/Glue/regex.mjs';

import HyphenCodePoints from '@unicode/unicode-4.0.0/Line_Break/Hyphen/code-points.mjs';
import HyphenSymbols from '@unicode/unicode-4.0.0/Line_Break/Hyphen/symbols.mjs';
import HyphenRegex from '@unicode/unicode-4.0.0/Line_Break/Hyphen/regex.mjs';

import IdeographicCodePoints from '@unicode/unicode-4.0.0/Line_Break/Ideographic/code-points.mjs';
import IdeographicSymbols from '@unicode/unicode-4.0.0/Line_Break/Ideographic/symbols.mjs';
import IdeographicRegex from '@unicode/unicode-4.0.0/Line_Break/Ideographic/regex.mjs';

import Infix_NumericCodePoints from '@unicode/unicode-4.0.0/Line_Break/Infix_Numeric/code-points.mjs';
import Infix_NumericSymbols from '@unicode/unicode-4.0.0/Line_Break/Infix_Numeric/symbols.mjs';
import Infix_NumericRegex from '@unicode/unicode-4.0.0/Line_Break/Infix_Numeric/regex.mjs';

import InseparableCodePoints from '@unicode/unicode-4.0.0/Line_Break/Inseparable/code-points.mjs';
import InseparableSymbols from '@unicode/unicode-4.0.0/Line_Break/Inseparable/symbols.mjs';
import InseparableRegex from '@unicode/unicode-4.0.0/Line_Break/Inseparable/regex.mjs';

import Line_FeedCodePoints from '@unicode/unicode-4.0.0/Line_Break/Line_Feed/code-points.mjs';
import Line_FeedSymbols from '@unicode/unicode-4.0.0/Line_Break/Line_Feed/symbols.mjs';
import Line_FeedRegex from '@unicode/unicode-4.0.0/Line_Break/Line_Feed/regex.mjs';

import Mandatory_BreakCodePoints from '@unicode/unicode-4.0.0/Line_Break/Mandatory_Break/code-points.mjs';
import Mandatory_BreakSymbols from '@unicode/unicode-4.0.0/Line_Break/Mandatory_Break/symbols.mjs';
import Mandatory_BreakRegex from '@unicode/unicode-4.0.0/Line_Break/Mandatory_Break/regex.mjs';

import Next_LineCodePoints from '@unicode/unicode-4.0.0/Line_Break/Next_Line/code-points.mjs';
import Next_LineSymbols from '@unicode/unicode-4.0.0/Line_Break/Next_Line/symbols.mjs';
import Next_LineRegex from '@unicode/unicode-4.0.0/Line_Break/Next_Line/regex.mjs';

import NonstarterCodePoints from '@unicode/unicode-4.0.0/Line_Break/Nonstarter/code-points.mjs';
import NonstarterSymbols from '@unicode/unicode-4.0.0/Line_Break/Nonstarter/symbols.mjs';
import NonstarterRegex from '@unicode/unicode-4.0.0/Line_Break/Nonstarter/regex.mjs';

import NumericCodePoints from '@unicode/unicode-4.0.0/Line_Break/Numeric/code-points.mjs';
import NumericSymbols from '@unicode/unicode-4.0.0/Line_Break/Numeric/symbols.mjs';
import NumericRegex from '@unicode/unicode-4.0.0/Line_Break/Numeric/regex.mjs';

import Open_PunctuationCodePoints from '@unicode/unicode-4.0.0/Line_Break/Open_Punctuation/code-points.mjs';
import Open_PunctuationSymbols from '@unicode/unicode-4.0.0/Line_Break/Open_Punctuation/symbols.mjs';
import Open_PunctuationRegex from '@unicode/unicode-4.0.0/Line_Break/Open_Punctuation/regex.mjs';

import Postfix_NumericCodePoints from '@unicode/unicode-4.0.0/Line_Break/Postfix_Numeric/code-points.mjs';
import Postfix_NumericSymbols from '@unicode/unicode-4.0.0/Line_Break/Postfix_Numeric/symbols.mjs';
import Postfix_NumericRegex from '@unicode/unicode-4.0.0/Line_Break/Postfix_Numeric/regex.mjs';

import Prefix_NumericCodePoints from '@unicode/unicode-4.0.0/Line_Break/Prefix_Numeric/code-points.mjs';
import Prefix_NumericSymbols from '@unicode/unicode-4.0.0/Line_Break/Prefix_Numeric/symbols.mjs';
import Prefix_NumericRegex from '@unicode/unicode-4.0.0/Line_Break/Prefix_Numeric/regex.mjs';

import QuotationCodePoints from '@unicode/unicode-4.0.0/Line_Break/Quotation/code-points.mjs';
import QuotationSymbols from '@unicode/unicode-4.0.0/Line_Break/Quotation/symbols.mjs';
import QuotationRegex from '@unicode/unicode-4.0.0/Line_Break/Quotation/regex.mjs';

import SpaceCodePoints from '@unicode/unicode-4.0.0/Line_Break/Space/code-points.mjs';
import SpaceSymbols from '@unicode/unicode-4.0.0/Line_Break/Space/symbols.mjs';
import SpaceRegex from '@unicode/unicode-4.0.0/Line_Break/Space/regex.mjs';

import SurrogateCodePoints from '@unicode/unicode-4.0.0/Line_Break/Surrogate/code-points.mjs';
import SurrogateSymbols from '@unicode/unicode-4.0.0/Line_Break/Surrogate/symbols.mjs';
import SurrogateRegex from '@unicode/unicode-4.0.0/Line_Break/Surrogate/regex.mjs';

import UnknownCodePoints from '@unicode/unicode-4.0.0/Line_Break/Unknown/code-points.mjs';
import UnknownSymbols from '@unicode/unicode-4.0.0/Line_Break/Unknown/symbols.mjs';
import UnknownRegex from '@unicode/unicode-4.0.0/Line_Break/Unknown/regex.mjs';

import Word_JoinerCodePoints from '@unicode/unicode-4.0.0/Line_Break/Word_Joiner/code-points.mjs';
import Word_JoinerSymbols from '@unicode/unicode-4.0.0/Line_Break/Word_Joiner/symbols.mjs';
import Word_JoinerRegex from '@unicode/unicode-4.0.0/Line_Break/Word_Joiner/regex.mjs';

import ZWSpaceCodePoints from '@unicode/unicode-4.0.0/Line_Break/ZWSpace/code-points.mjs';
import ZWSpaceSymbols from '@unicode/unicode-4.0.0/Line_Break/ZWSpace/symbols.mjs';
import ZWSpaceRegex from '@unicode/unicode-4.0.0/Line_Break/ZWSpace/regex.mjs';

// `Simple_Case_Mapping`:

import LowercaseCodePoints from '@unicode/unicode-4.0.0/Simple_Case_Mapping/Lowercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import LowercaseSymbols from '@unicode/unicode-4.0.0/Simple_Case_Mapping/Lowercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TitlecaseCodePoints from '@unicode/unicode-4.0.0/Simple_Case_Mapping/Titlecase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TitlecaseSymbols from '@unicode/unicode-4.0.0/Simple_Case_Mapping/Titlecase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import UppercaseCodePoints from '@unicode/unicode-4.0.0/Simple_Case_Mapping/Uppercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import UppercaseSymbols from '@unicode/unicode-4.0.0/Simple_Case_Mapping/Uppercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

// `Special_Casing`:

import LowercaseCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import LowercaseSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__Final_SigmaCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--Final_Sigma/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__Final_SigmaSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--Final_Sigma/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__azCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--az/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__azSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--az/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__az__After_ICodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--az--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__az__After_ISymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--az--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__az__Not_Before_DotCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--az--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__az__Not_Before_DotSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--az--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__ltCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--lt/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__ltSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--lt/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__lt__After_Soft_DottedCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--lt--After_Soft_Dotted/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__lt__After_Soft_DottedSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--lt--After_Soft_Dotted/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__lt__More_AboveCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--lt--More_Above/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__lt__More_AboveSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--lt--More_Above/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__trCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--tr/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__trSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--tr/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__tr__After_ICodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--tr--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__tr__After_ISymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--tr--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__tr__Not_Before_DotCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--tr--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__tr__Not_Before_DotSymbols from '@unicode/unicode-4.0.0/Special_Casing/Lowercase--tr--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TitlecaseCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TitlecaseSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__Final_SigmaCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--Final_Sigma/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__Final_SigmaSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--Final_Sigma/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__azCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--az/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__azSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--az/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__az__After_ICodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--az--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__az__After_ISymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--az--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__az__Not_Before_DotCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--az--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__az__Not_Before_DotSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--az--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__ltCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--lt/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__ltSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--lt/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__lt__After_Soft_DottedCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--lt--After_Soft_Dotted/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__lt__After_Soft_DottedSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--lt--After_Soft_Dotted/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__lt__More_AboveCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--lt--More_Above/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__lt__More_AboveSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--lt--More_Above/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__trCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--tr/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__trSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--tr/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__tr__After_ICodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--tr--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__tr__After_ISymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--tr--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__tr__Not_Before_DotCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--tr--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__tr__Not_Before_DotSymbols from '@unicode/unicode-4.0.0/Special_Casing/Titlecase--tr--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import UppercaseCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import UppercaseSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__Final_SigmaCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--Final_Sigma/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__Final_SigmaSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--Final_Sigma/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__azCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--az/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__azSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--az/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__az__After_ICodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--az--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__az__After_ISymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--az--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__az__Not_Before_DotCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--az--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__az__Not_Before_DotSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--az--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__ltCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--lt/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__ltSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--lt/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__lt__After_Soft_DottedCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--lt--After_Soft_Dotted/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__lt__After_Soft_DottedSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--lt--After_Soft_Dotted/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__lt__More_AboveCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--lt--More_Above/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__lt__More_AboveSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--lt--More_Above/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__trCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--tr/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__trSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--tr/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__tr__After_ICodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--tr--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__tr__After_ISymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--tr--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__tr__Not_Before_DotCodePoints from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--tr--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__tr__Not_Before_DotSymbols from '@unicode/unicode-4.0.0/Special_Casing/Uppercase--tr--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.

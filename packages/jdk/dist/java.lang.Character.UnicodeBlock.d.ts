declare namespace java {
    namespace lang {
        namespace Character {
            /**
             * A family of character subsets representing the character blocks in the
             * Unicode specification. Character blocks generally define characters
             * used for a specific script or purpose. A character is contained by
             * at most one Unicode block.
             * @since 1.2
             */
            // @ts-ignore
            class UnicodeBlock extends java.lang.Character.Subset {
                /**
                 * Constant for the "Basic Latin" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly BASIC_LATIN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Latin-1 Supplement" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly LATIN_1_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Latin Extended-A" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly LATIN_EXTENDED_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Latin Extended-B" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly LATIN_EXTENDED_B: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "IPA Extensions" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly IPA_EXTENSIONS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Spacing Modifier Letters" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly SPACING_MODIFIER_LETTERS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Combining Diacritical Marks" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly COMBINING_DIACRITICAL_MARKS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Greek and Coptic" Unicode character block.
                 * <p>
                 * This block was previously known as the "Greek" block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly GREEK: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cyrillic" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly CYRILLIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Armenian" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ARMENIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Hebrew" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly HEBREW: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Arabic" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ARABIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Devanagari" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly DEVANAGARI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Bengali" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly BENGALI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Gurmukhi" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly GURMUKHI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Gujarati" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly GUJARATI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Oriya" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ORIYA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tamil" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly TAMIL: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Telugu" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly TELUGU: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Kannada" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly KANNADA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Malayalam" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly MALAYALAM: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Thai" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly THAI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Lao" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly LAO: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tibetan" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly TIBETAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Georgian" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly GEORGIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Hangul Jamo" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly HANGUL_JAMO: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Latin Extended Additional" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly LATIN_EXTENDED_ADDITIONAL: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Greek Extended" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly GREEK_EXTENDED: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "General Punctuation" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly GENERAL_PUNCTUATION: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Superscripts and Subscripts" Unicode character
                 * block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly SUPERSCRIPTS_AND_SUBSCRIPTS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Currency Symbols" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly CURRENCY_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Combining Diacritical Marks for Symbols" Unicode
                 * character block.
                 * <p>
                 * This block was previously known as "Combining Marks for Symbols".
                 * @since 1.2
                 */
                // @ts-ignore
                readonly COMBINING_MARKS_FOR_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Letterlike Symbols" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly LETTERLIKE_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Number Forms" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly NUMBER_FORMS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Arrows" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ARROWS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Mathematical Operators" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly MATHEMATICAL_OPERATORS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Miscellaneous Technical" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly MISCELLANEOUS_TECHNICAL: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Control Pictures" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly CONTROL_PICTURES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Optical Character Recognition" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly OPTICAL_CHARACTER_RECOGNITION: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Enclosed Alphanumerics" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ENCLOSED_ALPHANUMERICS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Box Drawing" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly BOX_DRAWING: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Block Elements" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly BLOCK_ELEMENTS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Geometric Shapes" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly GEOMETRIC_SHAPES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Miscellaneous Symbols" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly MISCELLANEOUS_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Dingbats" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly DINGBATS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Symbols and Punctuation" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly CJK_SYMBOLS_AND_PUNCTUATION: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Hiragana" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly HIRAGANA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Katakana" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly KATAKANA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Bopomofo" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly BOPOMOFO: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Hangul Compatibility Jamo" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly HANGUL_COMPATIBILITY_JAMO: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Kanbun" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly KANBUN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Enclosed CJK Letters and Months" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ENCLOSED_CJK_LETTERS_AND_MONTHS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Compatibility" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly CJK_COMPATIBILITY: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Unified Ideographs" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly CJK_UNIFIED_IDEOGRAPHS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Hangul Syllables" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly HANGUL_SYLLABLES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Private Use Area" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly PRIVATE_USE_AREA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Compatibility Ideographs" Unicode character
                 * block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly CJK_COMPATIBILITY_IDEOGRAPHS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Alphabetic Presentation Forms" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ALPHABETIC_PRESENTATION_FORMS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Arabic Presentation Forms-A" Unicode character
                 * block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ARABIC_PRESENTATION_FORMS_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Combining Half Marks" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly COMBINING_HALF_MARKS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Compatibility Forms" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly CJK_COMPATIBILITY_FORMS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Small Form Variants" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly SMALL_FORM_VARIANTS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Arabic Presentation Forms-B" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly ARABIC_PRESENTATION_FORMS_B: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Halfwidth and Fullwidth Forms" Unicode character
                 * block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly HALFWIDTH_AND_FULLWIDTH_FORMS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Specials" Unicode character block.
                 * @since 1.2
                 */
                // @ts-ignore
                readonly SPECIALS: java.lang.Character.UnicodeBlock
                /**
                 * @deprecated As of J2SE 5, use {#link #HIGH_SURROGATES},
                 *              {@link #HIGH_PRIVATE_USE_SURROGATES}, and
                 *              {@link #LOW_SURROGATES}. These new constants match
                 *              the block definitions of the Unicode Standard.
                 *              The {@link #of(char)} and {@link #of(int)} methods
                 *              return the new constants, not SURROGATES_AREA.
                 */
                // @ts-ignore
                readonly SURROGATES_AREA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Syriac" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly SYRIAC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Thaana" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly THAANA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Sinhala" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly SINHALA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Myanmar" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly MYANMAR: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ethiopic" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly ETHIOPIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cherokee" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly CHEROKEE: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Unified Canadian Aboriginal Syllabics" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ogham" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly OGHAM: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Runic" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly RUNIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Khmer" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly KHMER: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Mongolian" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly MONGOLIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Braille Patterns" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly BRAILLE_PATTERNS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Radicals Supplement" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly CJK_RADICALS_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Kangxi Radicals" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly KANGXI_RADICALS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ideographic Description Characters" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly IDEOGRAPHIC_DESCRIPTION_CHARACTERS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Bopomofo Extended" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly BOPOMOFO_EXTENDED: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Unified Ideographs Extension A" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Yi Syllables" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly YI_SYLLABLES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Yi Radicals" Unicode character block.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly YI_RADICALS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cyrillic Supplementary" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly CYRILLIC_SUPPLEMENTARY: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tagalog" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly TAGALOG: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Hanunoo" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly HANUNOO: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Buhid" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly BUHID: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tagbanwa" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly TAGBANWA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Limbu" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly LIMBU: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tai Le" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly TAI_LE: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Khmer Symbols" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly KHMER_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Phonetic Extensions" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly PHONETIC_EXTENSIONS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Miscellaneous Mathematical Symbols-A" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Supplemental Arrows-A" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly SUPPLEMENTAL_ARROWS_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Supplemental Arrows-B" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly SUPPLEMENTAL_ARROWS_B: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Miscellaneous Mathematical Symbols-B" Unicode
                 * character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Supplemental Mathematical Operators" Unicode
                 * character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly SUPPLEMENTAL_MATHEMATICAL_OPERATORS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Miscellaneous Symbols and Arrows" Unicode character
                 * block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly MISCELLANEOUS_SYMBOLS_AND_ARROWS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Katakana Phonetic Extensions" Unicode character
                 * block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly KATAKANA_PHONETIC_EXTENSIONS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Yijing Hexagram Symbols" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly YIJING_HEXAGRAM_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Variation Selectors" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly VARIATION_SELECTORS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Linear B Syllabary" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly LINEAR_B_SYLLABARY: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Linear B Ideograms" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly LINEAR_B_IDEOGRAMS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Aegean Numbers" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly AEGEAN_NUMBERS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Old Italic" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly OLD_ITALIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Gothic" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly GOTHIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ugaritic" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly UGARITIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Deseret" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly DESERET: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Shavian" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly SHAVIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Osmanya" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly OSMANYA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cypriot Syllabary" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly CYPRIOT_SYLLABARY: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Byzantine Musical Symbols" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly BYZANTINE_MUSICAL_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Musical Symbols" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly MUSICAL_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tai Xuan Jing Symbols" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly TAI_XUAN_JING_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Mathematical Alphanumeric Symbols" Unicode
                 * character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly MATHEMATICAL_ALPHANUMERIC_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Unified Ideographs Extension B" Unicode
                 * character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Compatibility Ideographs Supplement" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tags" Unicode character block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly TAGS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Variation Selectors Supplement" Unicode character
                 * block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly VARIATION_SELECTORS_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Supplementary Private Use Area-A" Unicode character
                 * block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly SUPPLEMENTARY_PRIVATE_USE_AREA_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Supplementary Private Use Area-B" Unicode character
                 * block.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly SUPPLEMENTARY_PRIVATE_USE_AREA_B: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "High Surrogates" Unicode character block.
                 * This block represents codepoint values in the high surrogate
                 * range: U+D800 through U+DB7F
                 * @since 1.5
                 */
                // @ts-ignore
                readonly HIGH_SURROGATES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "High Private Use Surrogates" Unicode character
                 * block.
                 * This block represents codepoint values in the private use high
                 * surrogate range: U+DB80 through U+DBFF
                 * @since 1.5
                 */
                // @ts-ignore
                readonly HIGH_PRIVATE_USE_SURROGATES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Low Surrogates" Unicode character block.
                 * This block represents codepoint values in the low surrogate
                 * range: U+DC00 through U+DFFF
                 * @since 1.5
                 */
                // @ts-ignore
                readonly LOW_SURROGATES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Arabic Supplement" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ARABIC_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "NKo" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly NKO: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Samaritan" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly SAMARITAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Mandaic" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly MANDAIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ethiopic Supplement" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ETHIOPIC_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Unified Canadian Aboriginal Syllabics Extended"
                 * Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "New Tai Lue" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly NEW_TAI_LUE: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Buginese" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly BUGINESE: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tai Tham" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly TAI_THAM: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Balinese" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly BALINESE: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Sundanese" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly SUNDANESE: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Batak" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly BATAK: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Lepcha" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly LEPCHA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ol Chiki" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly OL_CHIKI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Vedic Extensions" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly VEDIC_EXTENSIONS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Phonetic Extensions Supplement" Unicode character
                 * block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly PHONETIC_EXTENSIONS_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Combining Diacritical Marks Supplement" Unicode
                 * character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly COMBINING_DIACRITICAL_MARKS_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Glagolitic" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly GLAGOLITIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Latin Extended-C" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly LATIN_EXTENDED_C: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Coptic" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly COPTIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Georgian Supplement" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly GEORGIAN_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tifinagh" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly TIFINAGH: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ethiopic Extended" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ETHIOPIC_EXTENDED: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cyrillic Extended-A" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CYRILLIC_EXTENDED_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Supplemental Punctuation" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly SUPPLEMENTAL_PUNCTUATION: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Strokes" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CJK_STROKES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Lisu" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly LISU: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Vai" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly VAI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cyrillic Extended-B" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CYRILLIC_EXTENDED_B: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Bamum" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly BAMUM: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Modifier Tone Letters" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly MODIFIER_TONE_LETTERS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Latin Extended-D" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly LATIN_EXTENDED_D: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Syloti Nagri" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly SYLOTI_NAGRI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Common Indic Number Forms" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly COMMON_INDIC_NUMBER_FORMS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Phags-pa" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly PHAGS_PA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Saurashtra" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly SAURASHTRA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Devanagari Extended" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly DEVANAGARI_EXTENDED: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Kayah Li" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly KAYAH_LI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Rejang" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly REJANG: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Hangul Jamo Extended-A" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly HANGUL_JAMO_EXTENDED_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Javanese" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly JAVANESE: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cham" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CHAM: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Myanmar Extended-A" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly MYANMAR_EXTENDED_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Tai Viet" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly TAI_VIET: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ethiopic Extended-A" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ETHIOPIC_EXTENDED_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Meetei Mayek" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly MEETEI_MAYEK: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Hangul Jamo Extended-B" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly HANGUL_JAMO_EXTENDED_B: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Vertical Forms" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly VERTICAL_FORMS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ancient Greek Numbers" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ANCIENT_GREEK_NUMBERS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ancient Symbols" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ANCIENT_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Phaistos Disc" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly PHAISTOS_DISC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Lycian" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly LYCIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Carian" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CARIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Old Persian" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly OLD_PERSIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Imperial Aramaic" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly IMPERIAL_ARAMAIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Phoenician" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly PHOENICIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Lydian" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly LYDIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Kharoshthi" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly KHAROSHTHI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Old South Arabian" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly OLD_SOUTH_ARABIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Avestan" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly AVESTAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Inscriptional Parthian" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly INSCRIPTIONAL_PARTHIAN: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Inscriptional Pahlavi" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly INSCRIPTIONAL_PAHLAVI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Old Turkic" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly OLD_TURKIC: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Rumi Numeral Symbols" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly RUMI_NUMERAL_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Brahmi" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly BRAHMI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Kaithi" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly KAITHI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cuneiform" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CUNEIFORM: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Cuneiform Numbers and Punctuation" Unicode
                 * character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CUNEIFORM_NUMBERS_AND_PUNCTUATION: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Egyptian Hieroglyphs" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly EGYPTIAN_HIEROGLYPHS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Bamum Supplement" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly BAMUM_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Kana Supplement" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly KANA_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Ancient Greek Musical Notation" Unicode character
                 * block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ANCIENT_GREEK_MUSICAL_NOTATION: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Counting Rod Numerals" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly COUNTING_ROD_NUMERALS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Mahjong Tiles" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly MAHJONG_TILES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Domino Tiles" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly DOMINO_TILES: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Playing Cards" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly PLAYING_CARDS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Enclosed Alphanumeric Supplement" Unicode character
                 * block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ENCLOSED_ALPHANUMERIC_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Enclosed Ideographic Supplement" Unicode character
                 * block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ENCLOSED_IDEOGRAPHIC_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Miscellaneous Symbols And Pictographs" Unicode
                 * character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Emoticons" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly EMOTICONS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Transport And Map Symbols" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly TRANSPORT_AND_MAP_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Alchemical Symbols" Unicode character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly ALCHEMICAL_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Unified Ideographs Extension C" Unicode
                 * character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "CJK Unified Ideographs Extension D" Unicode
                 * character block.
                 * @since 1.7
                 */
                // @ts-ignore
                readonly CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Arabic Extended-A" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly ARABIC_EXTENDED_A: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Sundanese Supplement" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly SUNDANESE_SUPPLEMENT: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Meetei Mayek Extensions" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly MEETEI_MAYEK_EXTENSIONS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Meroitic Hieroglyphs" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly MEROITIC_HIEROGLYPHS: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Meroitic Cursive" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly MEROITIC_CURSIVE: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Sora Sompeng" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly SORA_SOMPENG: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Chakma" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly CHAKMA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Sharada" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly SHARADA: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Takri" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly TAKRI: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Miao" Unicode character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly MIAO: java.lang.Character.UnicodeBlock
                /**
                 * Constant for the "Arabic Mathematical Alphabetic Symbols" Unicode
                 * character block.
                 * @since 1.8
                 */
                // @ts-ignore
                readonly ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS: java.lang.Character.UnicodeBlock
                /**
                 * Returns the object representing the Unicode block containing the
                 * given character, or {@code null} if the character is not a
                 * member of a defined block.
                 * <p><b>Note:</b> This method cannot handle
                 * <a href="Character.html#supplementary"> supplementary
                 * characters</a>.  To support all Unicode characters, including
                 * supplementary characters, use the {@link #of(int)} method.
                 * @param c  The character in question
                 * @return The {#code UnicodeBlock} instance representing the
                 *           Unicode block of which this character is a member, or
                 *           {@code null} if the character is not a member of any
                 *           Unicode block
                 */
                // @ts-ignore
                of(c: string): java.lang.Character.UnicodeBlock
                /**
                 * Returns the object representing the Unicode block
                 * containing the given character (Unicode code point), or
                 * {@code null} if the character is not a member of a
                 * defined block.
                 * @param codePoint the character (Unicode code point) in question.
                 * @return The {#code UnicodeBlock} instance representing the
                 *           Unicode block of which this character is a member, or
                 *           {@code null} if the character is not a member of any
                 *           Unicode block
                 * @exception IllegalArgumentException if the specified
                 *  {#code codePoint} is an invalid Unicode code point.
                 * @see Character#isValidCodePoint(int)
                 * @since 1.5
                 */
                // @ts-ignore
                of(codePoint: number /*int*/): java.lang.Character.UnicodeBlock
                /**
                 * Returns the UnicodeBlock with the given name. Block
                 * names are determined by The Unicode Standard. The file
                 * Blocks-&lt;version&gt;.txt defines blocks for a particular
                 * version of the standard. The {@link Character} class specifies
                 * the version of the standard that it supports.
                 * <p>
                 * This method accepts block names in the following forms:
                 * <ol>
                 * <li> Canonical block names as defined by the Unicode Standard.
                 * For example, the standard defines a "Basic Latin" block. Therefore, this
                 * method accepts "Basic Latin" as a valid block name. The documentation of
                 * each UnicodeBlock provides the canonical name.
                 * <li>Canonical block names with all spaces removed. For example, "BasicLatin"
                 * is a valid block name for the "Basic Latin" block.
                 * <li>The text representation of each constant UnicodeBlock identifier.
                 * For example, this method will return the {@link #BASIC_LATIN} block if
                 * provided with the "BASIC_LATIN" name. This form replaces all spaces and
                 * hyphens in the canonical name with underscores.
                 * </ol>
                 * Finally, character case is ignored for all of the valid block name forms.
                 * For example, "BASIC_LATIN" and "basic_latin" are both valid block names.
                 * The en_US locale's case mapping rules are used to provide case-insensitive
                 * string comparisons for block name validation.
                 * <p>
                 * If the Unicode Standard changes block names, both the previous and
                 * current names will be accepted.
                 * @param blockName A {#code UnicodeBlock} name.
                 * @return The {#code UnicodeBlock} instance identified
                 *          by {@code blockName}
                 * @throws IllegalArgumentException if {#code blockName} is an
                 *          invalid name
                 * @throws NullPointerException if {#code blockName} is null
                 * @since 1.5
                 */
                // @ts-ignore
                forName(blockName: string): java.lang.Character.UnicodeBlock
            }
        }
    }
}

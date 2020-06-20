declare namespace java {
    namespace awt {
        namespace im {
            /**
             * Defines additional Unicode subsets for use by input methods.  Unlike the
             * UnicodeBlock subsets defined in the <code>{@link
             * java.lang.Character.UnicodeBlock}</code> class, these constants do not
             * directly correspond to Unicode code blocks.
             * @since 1.2
             */
            // @ts-ignore
            class InputSubset extends java.lang.Character.Subset {
                /**
                 * Constant for all Latin characters, including the characters
                 * in the BASIC_LATIN, LATIN_1_SUPPLEMENT, LATIN_EXTENDED_A,
                 * LATIN_EXTENDED_B Unicode character blocks.
                 */
                // @ts-ignore
                readonly LATIN: java.awt.im.InputSubset
                /**
                 * Constant for the digits included in the BASIC_LATIN Unicode character
                 * block.
                 */
                // @ts-ignore
                readonly LATIN_DIGITS: java.awt.im.InputSubset
                /**
                 * Constant for all Han characters used in writing Traditional Chinese,
                 * including a subset of the CJK unified ideographs as well as Traditional
                 * Chinese Han characters that may be defined as surrogate characters.
                 */
                // @ts-ignore
                readonly TRADITIONAL_HANZI: java.awt.im.InputSubset
                /**
                 * Constant for all Han characters used in writing Simplified Chinese,
                 * including a subset of the CJK unified ideographs as well as Simplified
                 * Chinese Han characters that may be defined as surrogate characters.
                 */
                // @ts-ignore
                readonly SIMPLIFIED_HANZI: java.awt.im.InputSubset
                /**
                 * Constant for all Han characters used in writing Japanese, including a
                 * subset of the CJK unified ideographs as well as Japanese Han characters
                 * that may be defined as surrogate characters.
                 */
                // @ts-ignore
                readonly KANJI: java.awt.im.InputSubset
                /**
                 * Constant for all Han characters used in writing Korean, including a
                 * subset of the CJK unified ideographs as well as Korean Han characters
                 * that may be defined as surrogate characters.
                 */
                // @ts-ignore
                readonly HANJA: java.awt.im.InputSubset
                /**
                 * Constant for the halfwidth katakana subset of the Unicode halfwidth and
                 * fullwidth forms character block.
                 */
                // @ts-ignore
                readonly HALFWIDTH_KATAKANA: java.awt.im.InputSubset
                /**
                 * Constant for the fullwidth ASCII variants subset of the Unicode halfwidth and
                 * fullwidth forms character block.
                 * @since 1.3
                 */
                // @ts-ignore
                readonly FULLWIDTH_LATIN: java.awt.im.InputSubset
                /**
                 * Constant for the fullwidth digits included in the Unicode halfwidth and
                 * fullwidth forms character block.
                 * @since 1.3
                 */
                // @ts-ignore
                readonly FULLWIDTH_DIGITS: java.awt.im.InputSubset
            }
        }
    }
}

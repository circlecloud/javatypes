declare namespace java {
    namespace lang {
        namespace Character {
            /**
             * A family of character subsets representing the character scripts
             * defined in the <a href="http://www.unicode.org/reports/tr24/">
             * <i>Unicode Standard Annex #24: Script Names</i></a>. Every Unicode
             * character is assigned to a single Unicode script, either a specific
             * script, such as {@link Character.UnicodeScript#LATIN Latin}, or
             * one of the following three special values,
             * {@link Character.UnicodeScript#INHERITED Inherited},
             * {@link Character.UnicodeScript#COMMON Common} or
             * {@link Character.UnicodeScript#UNKNOWN Unknown}.
             * @since 1.7
             */
            // @ts-ignore
            class UnicodeScript extends java.lang.Enum<java.lang.Character.UnicodeScript> {
                /**
                 * Unicode script "Common".
                 */
                // @ts-ignore
                public static readonly COMMON: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Latin".
                 */
                // @ts-ignore
                public static readonly LATIN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Greek".
                 */
                // @ts-ignore
                public static readonly GREEK: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cyrillic".
                 */
                // @ts-ignore
                public static readonly CYRILLIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Armenian".
                 */
                // @ts-ignore
                public static readonly ARMENIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Hebrew".
                 */
                // @ts-ignore
                public static readonly HEBREW: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Arabic".
                 */
                // @ts-ignore
                public static readonly ARABIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Syriac".
                 */
                // @ts-ignore
                public static readonly SYRIAC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Thaana".
                 */
                // @ts-ignore
                public static readonly THAANA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Devanagari".
                 */
                // @ts-ignore
                public static readonly DEVANAGARI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Bengali".
                 */
                // @ts-ignore
                public static readonly BENGALI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Gurmukhi".
                 */
                // @ts-ignore
                public static readonly GURMUKHI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Gujarati".
                 */
                // @ts-ignore
                public static readonly GUJARATI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Oriya".
                 */
                // @ts-ignore
                public static readonly ORIYA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tamil".
                 */
                // @ts-ignore
                public static readonly TAMIL: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Telugu".
                 */
                // @ts-ignore
                public static readonly TELUGU: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Kannada".
                 */
                // @ts-ignore
                public static readonly KANNADA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Malayalam".
                 */
                // @ts-ignore
                public static readonly MALAYALAM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Sinhala".
                 */
                // @ts-ignore
                public static readonly SINHALA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Thai".
                 */
                // @ts-ignore
                public static readonly THAI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lao".
                 */
                // @ts-ignore
                public static readonly LAO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tibetan".
                 */
                // @ts-ignore
                public static readonly TIBETAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Myanmar".
                 */
                // @ts-ignore
                public static readonly MYANMAR: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Georgian".
                 */
                // @ts-ignore
                public static readonly GEORGIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Hangul".
                 */
                // @ts-ignore
                public static readonly HANGUL: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Ethiopic".
                 */
                // @ts-ignore
                public static readonly ETHIOPIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cherokee".
                 */
                // @ts-ignore
                public static readonly CHEROKEE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Canadian_Aboriginal".
                 */
                // @ts-ignore
                public static readonly CANADIAN_ABORIGINAL: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Ogham".
                 */
                // @ts-ignore
                public static readonly OGHAM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Runic".
                 */
                // @ts-ignore
                public static readonly RUNIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Khmer".
                 */
                // @ts-ignore
                public static readonly KHMER: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Mongolian".
                 */
                // @ts-ignore
                public static readonly MONGOLIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Hiragana".
                 */
                // @ts-ignore
                public static readonly HIRAGANA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Katakana".
                 */
                // @ts-ignore
                public static readonly KATAKANA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Bopomofo".
                 */
                // @ts-ignore
                public static readonly BOPOMOFO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Han".
                 */
                // @ts-ignore
                public static readonly HAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Yi".
                 */
                // @ts-ignore
                public static readonly YI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Old_Italic".
                 */
                // @ts-ignore
                public static readonly OLD_ITALIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Gothic".
                 */
                // @ts-ignore
                public static readonly GOTHIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Deseret".
                 */
                // @ts-ignore
                public static readonly DESERET: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Inherited".
                 */
                // @ts-ignore
                public static readonly INHERITED: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tagalog".
                 */
                // @ts-ignore
                public static readonly TAGALOG: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Hanunoo".
                 */
                // @ts-ignore
                public static readonly HANUNOO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Buhid".
                 */
                // @ts-ignore
                public static readonly BUHID: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tagbanwa".
                 */
                // @ts-ignore
                public static readonly TAGBANWA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Limbu".
                 */
                // @ts-ignore
                public static readonly LIMBU: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tai_Le".
                 */
                // @ts-ignore
                public static readonly TAI_LE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Linear_B".
                 */
                // @ts-ignore
                public static readonly LINEAR_B: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Ugaritic".
                 */
                // @ts-ignore
                public static readonly UGARITIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Shavian".
                 */
                // @ts-ignore
                public static readonly SHAVIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Osmanya".
                 */
                // @ts-ignore
                public static readonly OSMANYA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cypriot".
                 */
                // @ts-ignore
                public static readonly CYPRIOT: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Braille".
                 */
                // @ts-ignore
                public static readonly BRAILLE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Buginese".
                 */
                // @ts-ignore
                public static readonly BUGINESE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Coptic".
                 */
                // @ts-ignore
                public static readonly COPTIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "New_Tai_Lue".
                 */
                // @ts-ignore
                public static readonly NEW_TAI_LUE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Glagolitic".
                 */
                // @ts-ignore
                public static readonly GLAGOLITIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tifinagh".
                 */
                // @ts-ignore
                public static readonly TIFINAGH: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Syloti_Nagri".
                 */
                // @ts-ignore
                public static readonly SYLOTI_NAGRI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Old_Persian".
                 */
                // @ts-ignore
                public static readonly OLD_PERSIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Kharoshthi".
                 */
                // @ts-ignore
                public static readonly KHAROSHTHI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Balinese".
                 */
                // @ts-ignore
                public static readonly BALINESE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cuneiform".
                 */
                // @ts-ignore
                public static readonly CUNEIFORM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Phoenician".
                 */
                // @ts-ignore
                public static readonly PHOENICIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Phags_Pa".
                 */
                // @ts-ignore
                public static readonly PHAGS_PA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Nko".
                 */
                // @ts-ignore
                public static readonly NKO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Sundanese".
                 */
                // @ts-ignore
                public static readonly SUNDANESE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Batak".
                 */
                // @ts-ignore
                public static readonly BATAK: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lepcha".
                 */
                // @ts-ignore
                public static readonly LEPCHA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Ol_Chiki".
                 */
                // @ts-ignore
                public static readonly OL_CHIKI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Vai".
                 */
                // @ts-ignore
                public static readonly VAI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Saurashtra".
                 */
                // @ts-ignore
                public static readonly SAURASHTRA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Kayah_Li".
                 */
                // @ts-ignore
                public static readonly KAYAH_LI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Rejang".
                 */
                // @ts-ignore
                public static readonly REJANG: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lycian".
                 */
                // @ts-ignore
                public static readonly LYCIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Carian".
                 */
                // @ts-ignore
                public static readonly CARIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lydian".
                 */
                // @ts-ignore
                public static readonly LYDIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cham".
                 */
                // @ts-ignore
                public static readonly CHAM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tai_Tham".
                 */
                // @ts-ignore
                public static readonly TAI_THAM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tai_Viet".
                 */
                // @ts-ignore
                public static readonly TAI_VIET: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Avestan".
                 */
                // @ts-ignore
                public static readonly AVESTAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Egyptian_Hieroglyphs".
                 */
                // @ts-ignore
                public static readonly EGYPTIAN_HIEROGLYPHS: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Samaritan".
                 */
                // @ts-ignore
                public static readonly SAMARITAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Mandaic".
                 */
                // @ts-ignore
                public static readonly MANDAIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lisu".
                 */
                // @ts-ignore
                public static readonly LISU: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Bamum".
                 */
                // @ts-ignore
                public static readonly BAMUM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Javanese".
                 */
                // @ts-ignore
                public static readonly JAVANESE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Meetei_Mayek".
                 */
                // @ts-ignore
                public static readonly MEETEI_MAYEK: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Imperial_Aramaic".
                 */
                // @ts-ignore
                public static readonly IMPERIAL_ARAMAIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Old_South_Arabian".
                 */
                // @ts-ignore
                public static readonly OLD_SOUTH_ARABIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Inscriptional_Parthian".
                 */
                // @ts-ignore
                public static readonly INSCRIPTIONAL_PARTHIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Inscriptional_Pahlavi".
                 */
                // @ts-ignore
                public static readonly INSCRIPTIONAL_PAHLAVI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Old_Turkic".
                 */
                // @ts-ignore
                public static readonly OLD_TURKIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Brahmi".
                 */
                // @ts-ignore
                public static readonly BRAHMI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Kaithi".
                 */
                // @ts-ignore
                public static readonly KAITHI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Meroitic Hieroglyphs".
                 */
                // @ts-ignore
                public static readonly MEROITIC_HIEROGLYPHS: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Meroitic Cursive".
                 */
                // @ts-ignore
                public static readonly MEROITIC_CURSIVE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Sora Sompeng".
                 */
                // @ts-ignore
                public static readonly SORA_SOMPENG: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Chakma".
                 */
                // @ts-ignore
                public static readonly CHAKMA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Sharada".
                 */
                // @ts-ignore
                public static readonly SHARADA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Takri".
                 */
                // @ts-ignore
                public static readonly TAKRI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Miao".
                 */
                // @ts-ignore
                public static readonly MIAO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Unknown".
                 */
                // @ts-ignore
                public static readonly UNKNOWN: java.lang.Character.UnicodeScript
                // @ts-ignore
                public static values(): java.lang.Character.UnicodeScript[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.lang.Character.UnicodeScript
                /**
                 * Returns the enum constant representing the Unicode script of which
                 * the given character (Unicode code point) is assigned to.
                 * @param codePoint the character (Unicode code point) in question.
                 * @return The {#code UnicodeScript} constant representing the
                 *           Unicode script of which this character is assigned to.
                 * @exception IllegalArgumentException if the specified
                 *  {#code codePoint} is an invalid Unicode code point.
                 * @see Character#isValidCodePoint(int)
                 */
                // @ts-ignore
                public static of(codePoint: number /*int*/): java.lang.Character.UnicodeScript
                /**
                 * Returns the UnicodeScript constant with the given Unicode script
                 * name or the script name alias. Script names and their aliases are
                 * determined by The Unicode Standard. The files Scripts&lt;version&gt;.txt
                 * and PropertyValueAliases&lt;version&gt;.txt define script names
                 * and the script name aliases for a particular version of the
                 * standard. The {@link Character} class specifies the version of
                 * the standard that it supports.
                 * <p>
                 * Character case is ignored for all of the valid script names.
                 * The en_US locale's case mapping rules are used to provide
                 * case-insensitive string comparisons for script name validation.
                 * <p>
                 * @param scriptName A {#code UnicodeScript} name.
                 * @return The {#code UnicodeScript} constant identified
                 *          by {@code scriptName}
                 * @throws IllegalArgumentException if {#code scriptName} is an
                 *          invalid name
                 * @throws NullPointerException if {#code scriptName} is null
                 */
                // @ts-ignore
                public static forName(scriptName: java.lang.String | string): java.lang.Character.UnicodeScript
            }
        }
    }
}

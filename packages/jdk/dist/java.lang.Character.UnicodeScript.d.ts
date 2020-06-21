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
                readonly COMMON: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Latin".
                 */
                // @ts-ignore
                readonly LATIN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Greek".
                 */
                // @ts-ignore
                readonly GREEK: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cyrillic".
                 */
                // @ts-ignore
                readonly CYRILLIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Armenian".
                 */
                // @ts-ignore
                readonly ARMENIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Hebrew".
                 */
                // @ts-ignore
                readonly HEBREW: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Arabic".
                 */
                // @ts-ignore
                readonly ARABIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Syriac".
                 */
                // @ts-ignore
                readonly SYRIAC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Thaana".
                 */
                // @ts-ignore
                readonly THAANA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Devanagari".
                 */
                // @ts-ignore
                readonly DEVANAGARI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Bengali".
                 */
                // @ts-ignore
                readonly BENGALI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Gurmukhi".
                 */
                // @ts-ignore
                readonly GURMUKHI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Gujarati".
                 */
                // @ts-ignore
                readonly GUJARATI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Oriya".
                 */
                // @ts-ignore
                readonly ORIYA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tamil".
                 */
                // @ts-ignore
                readonly TAMIL: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Telugu".
                 */
                // @ts-ignore
                readonly TELUGU: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Kannada".
                 */
                // @ts-ignore
                readonly KANNADA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Malayalam".
                 */
                // @ts-ignore
                readonly MALAYALAM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Sinhala".
                 */
                // @ts-ignore
                readonly SINHALA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Thai".
                 */
                // @ts-ignore
                readonly THAI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lao".
                 */
                // @ts-ignore
                readonly LAO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tibetan".
                 */
                // @ts-ignore
                readonly TIBETAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Myanmar".
                 */
                // @ts-ignore
                readonly MYANMAR: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Georgian".
                 */
                // @ts-ignore
                readonly GEORGIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Hangul".
                 */
                // @ts-ignore
                readonly HANGUL: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Ethiopic".
                 */
                // @ts-ignore
                readonly ETHIOPIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cherokee".
                 */
                // @ts-ignore
                readonly CHEROKEE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Canadian_Aboriginal".
                 */
                // @ts-ignore
                readonly CANADIAN_ABORIGINAL: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Ogham".
                 */
                // @ts-ignore
                readonly OGHAM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Runic".
                 */
                // @ts-ignore
                readonly RUNIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Khmer".
                 */
                // @ts-ignore
                readonly KHMER: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Mongolian".
                 */
                // @ts-ignore
                readonly MONGOLIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Hiragana".
                 */
                // @ts-ignore
                readonly HIRAGANA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Katakana".
                 */
                // @ts-ignore
                readonly KATAKANA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Bopomofo".
                 */
                // @ts-ignore
                readonly BOPOMOFO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Han".
                 */
                // @ts-ignore
                readonly HAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Yi".
                 */
                // @ts-ignore
                readonly YI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Old_Italic".
                 */
                // @ts-ignore
                readonly OLD_ITALIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Gothic".
                 */
                // @ts-ignore
                readonly GOTHIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Deseret".
                 */
                // @ts-ignore
                readonly DESERET: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Inherited".
                 */
                // @ts-ignore
                readonly INHERITED: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tagalog".
                 */
                // @ts-ignore
                readonly TAGALOG: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Hanunoo".
                 */
                // @ts-ignore
                readonly HANUNOO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Buhid".
                 */
                // @ts-ignore
                readonly BUHID: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tagbanwa".
                 */
                // @ts-ignore
                readonly TAGBANWA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Limbu".
                 */
                // @ts-ignore
                readonly LIMBU: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tai_Le".
                 */
                // @ts-ignore
                readonly TAI_LE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Linear_B".
                 */
                // @ts-ignore
                readonly LINEAR_B: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Ugaritic".
                 */
                // @ts-ignore
                readonly UGARITIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Shavian".
                 */
                // @ts-ignore
                readonly SHAVIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Osmanya".
                 */
                // @ts-ignore
                readonly OSMANYA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cypriot".
                 */
                // @ts-ignore
                readonly CYPRIOT: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Braille".
                 */
                // @ts-ignore
                readonly BRAILLE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Buginese".
                 */
                // @ts-ignore
                readonly BUGINESE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Coptic".
                 */
                // @ts-ignore
                readonly COPTIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "New_Tai_Lue".
                 */
                // @ts-ignore
                readonly NEW_TAI_LUE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Glagolitic".
                 */
                // @ts-ignore
                readonly GLAGOLITIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tifinagh".
                 */
                // @ts-ignore
                readonly TIFINAGH: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Syloti_Nagri".
                 */
                // @ts-ignore
                readonly SYLOTI_NAGRI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Old_Persian".
                 */
                // @ts-ignore
                readonly OLD_PERSIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Kharoshthi".
                 */
                // @ts-ignore
                readonly KHAROSHTHI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Balinese".
                 */
                // @ts-ignore
                readonly BALINESE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cuneiform".
                 */
                // @ts-ignore
                readonly CUNEIFORM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Phoenician".
                 */
                // @ts-ignore
                readonly PHOENICIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Phags_Pa".
                 */
                // @ts-ignore
                readonly PHAGS_PA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Nko".
                 */
                // @ts-ignore
                readonly NKO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Sundanese".
                 */
                // @ts-ignore
                readonly SUNDANESE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Batak".
                 */
                // @ts-ignore
                readonly BATAK: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lepcha".
                 */
                // @ts-ignore
                readonly LEPCHA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Ol_Chiki".
                 */
                // @ts-ignore
                readonly OL_CHIKI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Vai".
                 */
                // @ts-ignore
                readonly VAI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Saurashtra".
                 */
                // @ts-ignore
                readonly SAURASHTRA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Kayah_Li".
                 */
                // @ts-ignore
                readonly KAYAH_LI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Rejang".
                 */
                // @ts-ignore
                readonly REJANG: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lycian".
                 */
                // @ts-ignore
                readonly LYCIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Carian".
                 */
                // @ts-ignore
                readonly CARIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lydian".
                 */
                // @ts-ignore
                readonly LYDIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Cham".
                 */
                // @ts-ignore
                readonly CHAM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tai_Tham".
                 */
                // @ts-ignore
                readonly TAI_THAM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Tai_Viet".
                 */
                // @ts-ignore
                readonly TAI_VIET: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Avestan".
                 */
                // @ts-ignore
                readonly AVESTAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Egyptian_Hieroglyphs".
                 */
                // @ts-ignore
                readonly EGYPTIAN_HIEROGLYPHS: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Samaritan".
                 */
                // @ts-ignore
                readonly SAMARITAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Mandaic".
                 */
                // @ts-ignore
                readonly MANDAIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Lisu".
                 */
                // @ts-ignore
                readonly LISU: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Bamum".
                 */
                // @ts-ignore
                readonly BAMUM: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Javanese".
                 */
                // @ts-ignore
                readonly JAVANESE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Meetei_Mayek".
                 */
                // @ts-ignore
                readonly MEETEI_MAYEK: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Imperial_Aramaic".
                 */
                // @ts-ignore
                readonly IMPERIAL_ARAMAIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Old_South_Arabian".
                 */
                // @ts-ignore
                readonly OLD_SOUTH_ARABIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Inscriptional_Parthian".
                 */
                // @ts-ignore
                readonly INSCRIPTIONAL_PARTHIAN: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Inscriptional_Pahlavi".
                 */
                // @ts-ignore
                readonly INSCRIPTIONAL_PAHLAVI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Old_Turkic".
                 */
                // @ts-ignore
                readonly OLD_TURKIC: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Brahmi".
                 */
                // @ts-ignore
                readonly BRAHMI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Kaithi".
                 */
                // @ts-ignore
                readonly KAITHI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Meroitic Hieroglyphs".
                 */
                // @ts-ignore
                readonly MEROITIC_HIEROGLYPHS: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Meroitic Cursive".
                 */
                // @ts-ignore
                readonly MEROITIC_CURSIVE: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Sora Sompeng".
                 */
                // @ts-ignore
                readonly SORA_SOMPENG: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Chakma".
                 */
                // @ts-ignore
                readonly CHAKMA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Sharada".
                 */
                // @ts-ignore
                readonly SHARADA: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Takri".
                 */
                // @ts-ignore
                readonly TAKRI: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Miao".
                 */
                // @ts-ignore
                readonly MIAO: java.lang.Character.UnicodeScript
                /**
                 * Unicode script "Unknown".
                 */
                // @ts-ignore
                readonly UNKNOWN: java.lang.Character.UnicodeScript
                // @ts-ignore
                values(): java.lang.Character.UnicodeScript[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.lang.Character.UnicodeScript
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
                of(codePoint: number /*int*/): java.lang.Character.UnicodeScript
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
                forName(scriptName: java.lang.String | string): java.lang.Character.UnicodeScript
            }
        }
    }
}

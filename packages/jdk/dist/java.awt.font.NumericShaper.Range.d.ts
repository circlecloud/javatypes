declare namespace java {
    namespace awt {
        namespace font {
            namespace NumericShaper {
                /**
                 * A {@code NumericShaper.Range} represents a Unicode range of a
                 * script having its own decimal digits. For example, the {@link
                 * NumericShaper.Range#THAI} range has the Thai digits, THAI DIGIT
                 * ZERO (U+0E50) to THAI DIGIT NINE (U+0E59).
                 * <p>The <code>Range</code> enum replaces the traditional bit
                 * mask-based values (e.g., {@link NumericShaper#ARABIC}), and
                 * supports more Unicode ranges than the bit mask-based ones. For
                 * example, the following code using the bit mask:
                 * <blockquote><pre>
                 * NumericShaper.getContextualShaper(NumericShaper.ARABIC |
                 * NumericShaper.TAMIL,
                 * NumericShaper.EUROPEAN);
                 * </pre></blockquote>
                 * can be written using this enum as:
                 * <blockquote><pre>
                 * NumericShaper.getContextualShaper(EnumSet.of(
                 * NumericShaper.Range.ARABIC,
                 * NumericShaper.Range.TAMIL),
                 * NumericShaper.Range.EUROPEAN);
                 * </pre></blockquote>
                 * @since 1.7
                 */
                // @ts-ignore
                class Range extends java.lang.Enum<java.awt.font.NumericShaper.Range> {
                    /**
                     * The Latin (European) range with the Latin (ASCII) digits.
                     */
                    // @ts-ignore
                    public static readonly EUROPEAN: java.awt.font.NumericShaper.Range
                    /**
                     * The Arabic range with the Arabic-Indic digits.
                     */
                    // @ts-ignore
                    public static readonly ARABIC: java.awt.font.NumericShaper.Range
                    /**
                     * The Arabic range with the Eastern Arabic-Indic digits.
                     */
                    // @ts-ignore
                    public static readonly EASTERN_ARABIC: java.awt.font.NumericShaper.Range
                    /**
                     * The Devanagari range with the Devanagari digits.
                     */
                    // @ts-ignore
                    public static readonly DEVANAGARI: java.awt.font.NumericShaper.Range
                    /**
                     * The Bengali range with the Bengali digits.
                     */
                    // @ts-ignore
                    public static readonly BENGALI: java.awt.font.NumericShaper.Range
                    /**
                     * The Gurmukhi range with the Gurmukhi digits.
                     */
                    // @ts-ignore
                    public static readonly GURMUKHI: java.awt.font.NumericShaper.Range
                    /**
                     * The Gujarati range with the Gujarati digits.
                     */
                    // @ts-ignore
                    public static readonly GUJARATI: java.awt.font.NumericShaper.Range
                    /**
                     * The Oriya range with the Oriya digits.
                     */
                    // @ts-ignore
                    public static readonly ORIYA: java.awt.font.NumericShaper.Range
                    /**
                     * The Tamil range with the Tamil digits.
                     */
                    // @ts-ignore
                    public static readonly TAMIL: java.awt.font.NumericShaper.Range
                    /**
                     * The Telugu range with the Telugu digits.
                     */
                    // @ts-ignore
                    public static readonly TELUGU: java.awt.font.NumericShaper.Range
                    /**
                     * The Kannada range with the Kannada digits.
                     */
                    // @ts-ignore
                    public static readonly KANNADA: java.awt.font.NumericShaper.Range
                    /**
                     * The Malayalam range with the Malayalam digits.
                     */
                    // @ts-ignore
                    public static readonly MALAYALAM: java.awt.font.NumericShaper.Range
                    /**
                     * The Thai range with the Thai digits.
                     */
                    // @ts-ignore
                    public static readonly THAI: java.awt.font.NumericShaper.Range
                    /**
                     * The Lao range with the Lao digits.
                     */
                    // @ts-ignore
                    public static readonly LAO: java.awt.font.NumericShaper.Range
                    /**
                     * The Tibetan range with the Tibetan digits.
                     */
                    // @ts-ignore
                    public static readonly TIBETAN: java.awt.font.NumericShaper.Range
                    /**
                     * The Myanmar range with the Myanmar digits.
                     */
                    // @ts-ignore
                    public static readonly MYANMAR: java.awt.font.NumericShaper.Range
                    /**
                     * The Ethiopic range with the Ethiopic digits. Ethiopic
                     * does not have a decimal digit 0 so Latin (European) 0 is
                     * used.
                     */
                    // @ts-ignore
                    public static readonly ETHIOPIC: java.awt.font.NumericShaper.Range
                    /**
                     * The Khmer range with the Khmer digits.
                     */
                    // @ts-ignore
                    public static readonly KHMER: java.awt.font.NumericShaper.Range
                    /**
                     * The Mongolian range with the Mongolian digits.
                     */
                    // @ts-ignore
                    public static readonly MONGOLIAN: java.awt.font.NumericShaper.Range
                    /**
                     * The N'Ko range with the N'Ko digits.
                     */
                    // @ts-ignore
                    public static readonly NKO: java.awt.font.NumericShaper.Range
                    /**
                     * The Myanmar range with the Myanmar Shan digits.
                     */
                    // @ts-ignore
                    public static readonly MYANMAR_SHAN: java.awt.font.NumericShaper.Range
                    /**
                     * The Limbu range with the Limbu digits.
                     */
                    // @ts-ignore
                    public static readonly LIMBU: java.awt.font.NumericShaper.Range
                    /**
                     * The New Tai Lue range with the New Tai Lue digits.
                     */
                    // @ts-ignore
                    public static readonly NEW_TAI_LUE: java.awt.font.NumericShaper.Range
                    /**
                     * The Balinese range with the Balinese digits.
                     */
                    // @ts-ignore
                    public static readonly BALINESE: java.awt.font.NumericShaper.Range
                    /**
                     * The Sundanese range with the Sundanese digits.
                     */
                    // @ts-ignore
                    public static readonly SUNDANESE: java.awt.font.NumericShaper.Range
                    /**
                     * The Lepcha range with the Lepcha digits.
                     */
                    // @ts-ignore
                    public static readonly LEPCHA: java.awt.font.NumericShaper.Range
                    /**
                     * The Ol Chiki range with the Ol Chiki digits.
                     */
                    // @ts-ignore
                    public static readonly OL_CHIKI: java.awt.font.NumericShaper.Range
                    /**
                     * The Vai range with the Vai digits.
                     */
                    // @ts-ignore
                    public static readonly VAI: java.awt.font.NumericShaper.Range
                    /**
                     * The Saurashtra range with the Saurashtra digits.
                     */
                    // @ts-ignore
                    public static readonly SAURASHTRA: java.awt.font.NumericShaper.Range
                    /**
                     * The Kayah Li range with the Kayah Li digits.
                     */
                    // @ts-ignore
                    public static readonly KAYAH_LI: java.awt.font.NumericShaper.Range
                    /**
                     * The Cham range with the Cham digits.
                     */
                    // @ts-ignore
                    public static readonly CHAM: java.awt.font.NumericShaper.Range
                    /**
                     * The Tai Tham Hora range with the Tai Tham Hora digits.
                     */
                    // @ts-ignore
                    public static readonly TAI_THAM_HORA: java.awt.font.NumericShaper.Range
                    /**
                     * The Tai Tham Tham range with the Tai Tham Tham digits.
                     */
                    // @ts-ignore
                    public static readonly TAI_THAM_THAM: java.awt.font.NumericShaper.Range
                    /**
                     * The Javanese range with the Javanese digits.
                     */
                    // @ts-ignore
                    public static readonly JAVANESE: java.awt.font.NumericShaper.Range
                    /**
                     * The Meetei Mayek range with the Meetei Mayek digits.
                     */
                    // @ts-ignore
                    public static readonly MEETEI_MAYEK: java.awt.font.NumericShaper.Range
                    // @ts-ignore
                    public static values(): java.awt.font.NumericShaper.Range[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): java.awt.font.NumericShaper.Range
                }
            }
        }
    }
}

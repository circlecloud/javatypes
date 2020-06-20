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
                    // @ts-ignore
                    values(): java.awt.font.NumericShaper.Range[]
                    // @ts-ignore
                    valueOf(name: string): java.awt.font.NumericShaper.Range
                }
            }
        }
    }
}

declare namespace java {
    namespace time {
        namespace format {
            /**
             * Enumeration of the style of text formatting and parsing.
             * <p>
             * Text styles define three sizes for the formatted text - 'full', 'short' and 'narrow'.
             * Each of these three sizes is available in both 'standard' and 'stand-alone' variations.
             * <p>
             * The difference between the three sizes is obvious in most languages.
             * For example, in English the 'full' month is 'January', the 'short' month is 'Jan'
             * and the 'narrow' month is 'J'. Note that the narrow size is often not unique.
             * For example, 'January', 'June' and 'July' all have the 'narrow' text 'J'.
             * <p>
             * The difference between the 'standard' and 'stand-alone' forms is trickier to describe
             * as there is no difference in English. However, in other languages there is a difference
             * in the word used when the text is used alone, as opposed to in a complete date.
             * For example, the word used for a month when used alone in a date picker is different
             * to the word used for month in association with a day and year in a date.
             * @implSpec This is immutable and thread-safe enum.
             */
            // @ts-ignore
            class TextStyle extends java.lang.Enum<java.time.format.TextStyle> {
                // @ts-ignore
                values(): java.time.format.TextStyle[]
                // @ts-ignore
                valueOf(name: string): java.time.format.TextStyle
                /**
                 * Returns true if the Style is a stand-alone style.
                 * @return true if the style is a stand-alone style.
                 */
                // @ts-ignore
                isStandalone(): boolean
                /**
                 * Returns the stand-alone style with the same size.
                 * @return the stand-alone style with the same size
                 */
                // @ts-ignore
                asStandalone(): java.time.format.TextStyle
                /**
                 * Returns the normal style with the same size.
                 * @return the normal style with the same size
                 */
                // @ts-ignore
                asNormal(): java.time.format.TextStyle
            }
        }
    }
}

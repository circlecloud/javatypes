declare namespace java {
    namespace text {
        namespace Normalizer {
            /**
             * This enum provides constants of the four Unicode normalization forms
             * that are described in
             * <a href="http://www.unicode.org/unicode/reports/tr15/tr15-23.html">
             * Unicode Standard Annex #15 &mdash; Unicode Normalization Forms</a>
             * and two methods to access them.
             * @since 1.6
             */
            // @ts-ignore
            class Form extends java.lang.Enum<java.text.Normalizer.Form> {
                /**
                 * Canonical decomposition.
                 */
                // @ts-ignore
                readonly NFD: java.text.Normalizer.Form
                /**
                 * Canonical decomposition, followed by canonical composition.
                 */
                // @ts-ignore
                readonly NFC: java.text.Normalizer.Form
                /**
                 * Compatibility decomposition.
                 */
                // @ts-ignore
                readonly NFKD: java.text.Normalizer.Form
                /**
                 * Compatibility decomposition, followed by canonical composition.
                 */
                // @ts-ignore
                readonly NFKC: java.text.Normalizer.Form
                // @ts-ignore
                values(): java.text.Normalizer.Form[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.text.Normalizer.Form
            }
        }
    }
}

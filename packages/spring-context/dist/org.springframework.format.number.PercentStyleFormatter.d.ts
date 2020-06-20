declare namespace org {
    namespace springframework {
        namespace format {
            namespace number {
                /**
                 * A formatter for number values in percent style.
                 * <p>Delegates to {@link java.text.NumberFormat#getPercentInstance(Locale)}.
                 * Configures BigDecimal parsing so there is no loss in precision.
                 * The {@link #parse(String, Locale)} routine always returns a BigDecimal.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 4.2
                 * @see #setLenient
                 */
                // @ts-ignore
                class PercentStyleFormatter extends org.springframework.format.number.AbstractNumberFormatter {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getNumberFormat(locale: java.util.Locale): java.text.NumberFormat
                }
            }
        }
    }
}

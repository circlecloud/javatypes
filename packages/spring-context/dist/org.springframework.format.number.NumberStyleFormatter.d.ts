declare namespace org {
    namespace springframework {
        namespace format {
            namespace number {
                /**
                 * A general-purpose number formatter using NumberFormat's number style.
                 * <p>Delegates to {@link java.text.NumberFormat#getInstance(Locale)}.
                 * Configures BigDecimal parsing so there is no loss in precision.
                 * Allows configuration over the decimal number pattern.
                 * The {@link #parse(String, Locale)} routine always returns a BigDecimal.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 4.2
                 * @see #setPattern
                 * @see #setLenient
                 */
                // @ts-ignore
                class NumberStyleFormatter extends org.springframework.format.number.AbstractNumberFormatter {
                    /**
                     * Create a new NumberStyleFormatter without a pattern.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new NumberStyleFormatter with the specified pattern.
                     * @param pattern the format pattern
                     * @see #setPattern
                     */
                    // @ts-ignore
                    constructor(pattern: java.lang.String | string)
                    /**
                     * Specify the pattern to use to format number values.
                     * If not specified, the default DecimalFormat pattern is used.
                     * @see java.text.DecimalFormat#applyPattern(String)
                     */
                    // @ts-ignore
                    public setPattern(pattern: java.lang.String | string): void
                    // @ts-ignore
                    public getNumberFormat(locale: java.util.Locale): java.text.NumberFormat
                }
            }
        }
    }
}

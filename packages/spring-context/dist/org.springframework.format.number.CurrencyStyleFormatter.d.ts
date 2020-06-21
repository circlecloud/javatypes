declare namespace org {
    namespace springframework {
        namespace format {
            namespace number {
                /**
                 * A BigDecimal formatter for number values in currency style.
                 * <p>Delegates to {@link java.text.NumberFormat#getCurrencyInstance(Locale)}.
                 * Configures BigDecimal parsing so there is no loss of precision.
                 * Can apply a specified {@link java.math.RoundingMode} to parsed values.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 4.2
                 * @see #setLenient
                 * @see #setRoundingMode
                 */
                // @ts-ignore
                class CurrencyStyleFormatter extends org.springframework.format.number.AbstractNumberFormatter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Specify the desired number of fraction digits.
                     * Default is 2.
                     */
                    // @ts-ignore
                    public setFractionDigits(fractionDigits: number /*int*/): void
                    /**
                     * Specify the rounding mode to use for decimal parsing.
                     * Default is {@link java.math.RoundingMode#UNNECESSARY}.
                     */
                    // @ts-ignore
                    public setRoundingMode(roundingMode: java.math.RoundingMode): void
                    /**
                     * Specify the currency, if known.
                     */
                    // @ts-ignore
                    public setCurrency(currency: java.util.Currency): void
                    /**
                     * Specify the pattern to use to format number values.
                     * If not specified, the default DecimalFormat pattern is used.
                     * @see java.text.DecimalFormat#applyPattern(String)
                     */
                    // @ts-ignore
                    public setPattern(pattern: java.lang.String | string): void
                    // @ts-ignore
                    public parse(text: java.lang.String | string, locale: java.util.Locale): java.math.BigDecimal
                    // @ts-ignore
                    getNumberFormat(locale: java.util.Locale): java.text.NumberFormat
                }
            }
        }
    }
}

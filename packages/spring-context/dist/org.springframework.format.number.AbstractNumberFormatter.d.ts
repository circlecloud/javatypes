declare namespace org {
    namespace springframework {
        namespace format {
            namespace number {
                /**
                 * Abstract formatter for Numbers,
                 * providing a {@link #getNumberFormat(java.util.Locale)} template method.
                 * @author Juergen Hoeller
                 * @author Keith Donald
                 * @since 3.0
                 */
                // @ts-ignore
                abstract class AbstractNumberFormatter extends java.lang.Object implements org.springframework.format.Formatter<java.lang.Number> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Specify whether or not parsing is to be lenient. Default is false.
                     * <p>With lenient parsing, the parser may allow inputs that do not precisely match the format.
                     * With strict parsing, inputs must match the format exactly.
                     */
                    // @ts-ignore
                    public setLenient(lenient: boolean): void
                    // @ts-ignore
                    public print(number: java.lang.Number, locale: java.util.Locale): string
                    // @ts-ignore
                    public parse(text: java.lang.String | string, locale: java.util.Locale): java.lang.Number
                    /**
                     * Obtain a concrete NumberFormat for the specified locale.
                     * @param locale the current locale
                     * @return the NumberFormat instance (never {#code null})
                     */
                    // @ts-ignore
                    abstract getNumberFormat(locale: java.util.Locale): java.text.NumberFormat
                }
            }
        }
    }
}

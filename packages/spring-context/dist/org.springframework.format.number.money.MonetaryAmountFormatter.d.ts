declare namespace org {
    namespace springframework {
        namespace format {
            namespace number {
                namespace money {
                    /**
                     * Formatter for JSR-354 {@link javax.money.MonetaryAmount} values,
                     * delegating to {@link javax.money.format.MonetaryAmountFormat#format}
                     * and {@link javax.money.format.MonetaryAmountFormat#parse}.
                     * @author Juergen Hoeller
                     * @since 4.2
                     * @see #getMonetaryAmountFormat
                     */
                    // @ts-ignore
                    class MonetaryAmountFormatter extends java.lang.Object implements org.springframework.format.Formatter<MonetaryAmount> {
                        /**
                         * Create a locale-driven MonetaryAmountFormatter.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new MonetaryAmountFormatter for the given format name.
                         * @param formatName the format name, to be resolved by the JSR-354
                         *  provider at runtime
                         */
                        // @ts-ignore
                        constructor(formatName: java.lang.String | string)
                        /**
                         * Specify the format name, to be resolved by the JSR-354 provider
                         * at runtime.
                         * <p>Default is none, obtaining a {@link MonetaryAmountFormat}
                         * based on the current locale.
                         */
                        // @ts-ignore
                        public setFormatName(formatName: java.lang.String | string): void
                        // @ts-ignore
                        public print(object: MonetaryAmount, locale: java.util.Locale): string
                        // @ts-ignore
                        public parse(text: java.lang.String | string, locale: java.util.Locale): MonetaryAmount
                        /**
                         * Obtain a MonetaryAmountFormat for the given locale.
                         * <p>The default implementation simply calls
                         * {@link javax.money.format.MonetaryFormats#getAmountFormat}
                         * with either the configured format name or the given locale.
                         * @param locale the current locale
                         * @return the MonetaryAmountFormat (never {#code null})
                         * @see #setFormatName
                         */
                        // @ts-ignore
                        getMonetaryAmountFormat(locale: java.util.Locale): MonetaryAmountFormat
                    }
                }
            }
        }
    }
}

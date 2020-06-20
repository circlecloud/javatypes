declare namespace org {
    namespace springframework {
        namespace format {
            namespace number {
                namespace money {
                    /**
                     * Formatter for JSR-354 {@link javax.money.CurrencyUnit} values,
                     * from and to currency code Strings.
                     * @author Juergen Hoeller
                     * @since 4.2
                     */
                    // @ts-ignore
                    class CurrencyUnitFormatter extends java.lang.Object implements org.springframework.format.Formatter<CurrencyUnit> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        print(object: CurrencyUnit, locale: java.util.Locale): java.lang.String
                        // @ts-ignore
                        parse(text: string, locale: java.util.Locale): CurrencyUnit
                    }
                }
            }
        }
    }
}

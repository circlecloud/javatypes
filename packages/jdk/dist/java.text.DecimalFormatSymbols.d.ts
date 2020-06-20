declare namespace java {
    namespace text {
        /**
         * This class represents the set of symbols (such as the decimal separator,
         * the grouping separator, and so on) needed by <code>DecimalFormat</code>
         * to format numbers. <code>DecimalFormat</code> creates for itself an instance of
         * <code>DecimalFormatSymbols</code> from its locale data.  If you need to change any
         * of these symbols, you can get the <code>DecimalFormatSymbols</code> object from
         * your <code>DecimalFormat</code> and modify it.
         * @see java.util.Locale
         * @see DecimalFormat
         * @author Mark Davis
         * @author Alan Liu
         */
        // @ts-ignore
        class DecimalFormatSymbols extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
            /**
             * Create a DecimalFormatSymbols object for the default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * This constructor can only construct instances for the locales
             * supported by the Java runtime environment, not for those
             * supported by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider}
             * implementations. For full locale coverage, use the
             * {@link #getInstance(Locale) getInstance} method.
             * <p>This is equivalent to calling
             * {@link #DecimalFormatSymbols(Locale)
             * DecimalFormatSymbols(Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             */
            // @ts-ignore
            constructor()
            /**
             * Create a DecimalFormatSymbols object for the given locale.
             * This constructor can only construct instances for the locales
             * supported by the Java runtime environment, not for those
             * supported by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider}
             * implementations. For full locale coverage, use the
             * {@link #getInstance(Locale) getInstance} method.
             * If the specified locale contains the {@link java.util.Locale#UNICODE_LOCALE_EXTENSION}
             * for the numbering system, the instance is initialized with the specified numbering
             * system if the JRE implementation supports it. For example,
             * <pre>
             * NumberFormat.getNumberInstance(Locale.forLanguageTag("th-TH-u-nu-thai"))
             * </pre>
             * This may return a {@code NumberFormat} instance with the Thai numbering system,
             * instead of the Latin numbering system.
             * @param locale the desired locale
             * @exception NullPointerException if <code>locale</code> is null
             */
            // @ts-ignore
            constructor(locale: java.util.Locale)
            /**
             * Returns an array of all locales for which the
             * <code>getInstance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported by the Java
             * runtime and by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider}
             * implementations.  It must contain at least a <code>Locale</code>
             * instance equal to {@link java.util.Locale#US Locale.US}.
             * @return an array of locales for which localized
             *          <code>DecimalFormatSymbols</code> instances are available.
             * @since 1.6
             */
            // @ts-ignore
            getAvailableLocales(): java.util.Locale[]
            /**
             * Gets the <code>DecimalFormatSymbols</code> instance for the default
             * locale.  This method provides access to <code>DecimalFormatSymbols</code>
             * instances for locales supported by the Java runtime itself as well
             * as for those supported by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider
             * DecimalFormatSymbolsProvider} implementations.
             * <p>This is equivalent to calling
             * {@link #getInstance(Locale)
             * getInstance(Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @return a <code>DecimalFormatSymbols</code> instance.
             * @since 1.6
             */
            // @ts-ignore
            getInstance(): java.text.DecimalFormatSymbols
            /**
             * Gets the <code>DecimalFormatSymbols</code> instance for the specified
             * locale.  This method provides access to <code>DecimalFormatSymbols</code>
             * instances for locales supported by the Java runtime itself as well
             * as for those supported by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider
             * DecimalFormatSymbolsProvider} implementations.
             * If the specified locale contains the {@link java.util.Locale#UNICODE_LOCALE_EXTENSION}
             * for the numbering system, the instance is initialized with the specified numbering
             * system if the JRE implementation supports it. For example,
             * <pre>
             * NumberFormat.getNumberInstance(Locale.forLanguageTag("th-TH-u-nu-thai"))
             * </pre>
             * This may return a {@code NumberFormat} instance with the Thai numbering system,
             * instead of the Latin numbering system.
             * @param locale the desired locale.
             * @return a <code>DecimalFormatSymbols</code> instance.
             * @exception NullPointerException if <code>locale</code> is null
             * @since 1.6
             */
            // @ts-ignore
            getInstance(locale: java.util.Locale): java.text.DecimalFormatSymbols
            /**
             * Gets the character used for zero. Different for Arabic, etc.
             * @return the character used for zero
             */
            // @ts-ignore
            getZeroDigit(): char
            /**
             * Sets the character used for zero. Different for Arabic, etc.
             * @param zeroDigit the character used for zero
             */
            // @ts-ignore
            setZeroDigit(zeroDigit: string): void
            /**
             * Gets the character used for thousands separator. Different for French, etc.
             * @return the grouping separator
             */
            // @ts-ignore
            getGroupingSeparator(): char
            /**
             * Sets the character used for thousands separator. Different for French, etc.
             * @param groupingSeparator the grouping separator
             */
            // @ts-ignore
            setGroupingSeparator(groupingSeparator: string): void
            /**
             * Gets the character used for decimal sign. Different for French, etc.
             * @return the character used for decimal sign
             */
            // @ts-ignore
            getDecimalSeparator(): char
            /**
             * Sets the character used for decimal sign. Different for French, etc.
             * @param decimalSeparator the character used for decimal sign
             */
            // @ts-ignore
            setDecimalSeparator(decimalSeparator: string): void
            /**
             * Gets the character used for per mille sign. Different for Arabic, etc.
             * @return the character used for per mille sign
             */
            // @ts-ignore
            getPerMill(): char
            /**
             * Sets the character used for per mille sign. Different for Arabic, etc.
             * @param perMill the character used for per mille sign
             */
            // @ts-ignore
            setPerMill(perMill: string): void
            /**
             * Gets the character used for percent sign. Different for Arabic, etc.
             * @return the character used for percent sign
             */
            // @ts-ignore
            getPercent(): char
            /**
             * Sets the character used for percent sign. Different for Arabic, etc.
             * @param percent the character used for percent sign
             */
            // @ts-ignore
            setPercent(percent: string): void
            /**
             * Gets the character used for a digit in a pattern.
             * @return the character used for a digit in a pattern
             */
            // @ts-ignore
            getDigit(): char
            /**
             * Sets the character used for a digit in a pattern.
             * @param digit the character used for a digit in a pattern
             */
            // @ts-ignore
            setDigit(digit: string): void
            /**
             * Gets the character used to separate positive and negative subpatterns
             * in a pattern.
             * @return the pattern separator
             */
            // @ts-ignore
            getPatternSeparator(): char
            /**
             * Sets the character used to separate positive and negative subpatterns
             * in a pattern.
             * @param patternSeparator the pattern separator
             */
            // @ts-ignore
            setPatternSeparator(patternSeparator: string): void
            /**
             * Gets the string used to represent infinity. Almost always left
             * unchanged.
             * @return the string representing infinity
             */
            // @ts-ignore
            getInfinity(): java.lang.String
            /**
             * Sets the string used to represent infinity. Almost always left
             * unchanged.
             * @param infinity the string representing infinity
             */
            // @ts-ignore
            setInfinity(infinity: string): void
            /**
             * Gets the string used to represent "not a number". Almost always left
             * unchanged.
             * @return the string representing "not a number"
             */
            // @ts-ignore
            getNaN(): java.lang.String
            /**
             * Sets the string used to represent "not a number". Almost always left
             * unchanged.
             * @param NaN the string representing "not a number"
             */
            // @ts-ignore
            setNaN(NaN: string): void
            /**
             * Gets the character used to represent minus sign. If no explicit
             * negative format is specified, one is formed by prefixing
             * minusSign to the positive format.
             * @return the character representing minus sign
             */
            // @ts-ignore
            getMinusSign(): char
            /**
             * Sets the character used to represent minus sign. If no explicit
             * negative format is specified, one is formed by prefixing
             * minusSign to the positive format.
             * @param minusSign the character representing minus sign
             */
            // @ts-ignore
            setMinusSign(minusSign: string): void
            /**
             * Returns the currency symbol for the currency of these
             * DecimalFormatSymbols in their locale.
             * @return the currency symbol
             * @since 1.2
             */
            // @ts-ignore
            getCurrencySymbol(): java.lang.String
            /**
             * Sets the currency symbol for the currency of these
             * DecimalFormatSymbols in their locale.
             * @param currency the currency symbol
             * @since 1.2
             */
            // @ts-ignore
            setCurrencySymbol(currency: string): void
            /**
             * Returns the ISO 4217 currency code of the currency of these
             * DecimalFormatSymbols.
             * @return the currency code
             * @since 1.2
             */
            // @ts-ignore
            getInternationalCurrencySymbol(): java.lang.String
            /**
             * Sets the ISO 4217 currency code of the currency of these
             * DecimalFormatSymbols.
             * If the currency code is valid (as defined by
             * {@link java.util.Currency#getInstance(java.lang.String) Currency.getInstance}),
             * this also sets the currency attribute to the corresponding Currency
             * instance and the currency symbol attribute to the currency's symbol
             * in the DecimalFormatSymbols' locale. If the currency code is not valid,
             * then the currency attribute is set to null and the currency symbol
             * attribute is not modified.
             * @param currencyCode the currency code
             * @see #setCurrency
             * @see #setCurrencySymbol
             * @since 1.2
             */
            // @ts-ignore
            setInternationalCurrencySymbol(currencyCode: string): void
            /**
             * Gets the currency of these DecimalFormatSymbols. May be null if the
             * currency symbol attribute was previously set to a value that's not
             * a valid ISO 4217 currency code.
             * @return the currency used, or null
             * @since 1.4
             */
            // @ts-ignore
            getCurrency(): java.util.Currency
            /**
             * Sets the currency of these DecimalFormatSymbols.
             * This also sets the currency symbol attribute to the currency's symbol
             * in the DecimalFormatSymbols' locale, and the international currency
             * symbol attribute to the currency's ISO 4217 currency code.
             * @param currency the new currency to be used
             * @exception NullPointerException if <code>currency</code> is null
             * @since 1.4
             * @see #setCurrencySymbol
             * @see #setInternationalCurrencySymbol
             */
            // @ts-ignore
            setCurrency(currency: java.util.Currency): void
            /**
             * Returns the monetary decimal separator.
             * @return the monetary decimal separator
             * @since 1.2
             */
            // @ts-ignore
            getMonetaryDecimalSeparator(): char
            /**
             * Sets the monetary decimal separator.
             * @param sep the monetary decimal separator
             * @since 1.2
             */
            // @ts-ignore
            setMonetaryDecimalSeparator(sep: string): void
            /**
             * Returns the string used to separate the mantissa from the exponent.
             * Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.
             * @return the exponent separator string
             * @see #setExponentSeparator(java.lang.String)
             * @since 1.6
             */
            // @ts-ignore
            getExponentSeparator(): java.lang.String
            /**
             * Sets the string used to separate the mantissa from the exponent.
             * Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.
             * @param exp the exponent separator string
             * @exception NullPointerException if <code>exp</code> is null
             * @see #getExponentSeparator()
             * @since 1.6
             */
            // @ts-ignore
            setExponentSeparator(exp: string): void
            /**
             * Standard override.
             */
            // @ts-ignore
            clone(): java.lang.Object
            /**
             * Override equals.
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Override hashCode.
             */
            // @ts-ignore
            hashCode(): int
        }
    }
}

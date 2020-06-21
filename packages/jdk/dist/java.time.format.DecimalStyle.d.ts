declare namespace java {
    namespace time {
        namespace format {
            /**
             * Localized decimal style used in date and time formatting.
             * <p>
             * A significant part of dealing with dates and times is the localization.
             * This class acts as a central point for accessing the information.
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class DecimalStyle extends java.lang.Object {
                /**
                 * The standard set of non-localized decimal style symbols.
                 * <p>
                 * This uses standard ASCII characters for zero, positive, negative and a dot for the decimal point.
                 */
                // @ts-ignore
                public static readonly STANDARD: java.time.format.DecimalStyle
                /**
                 * Lists all the locales that are supported.
                 * <p>
                 * The locale 'en_US' will always be present.
                 * @return a Set of Locales for which localization is supported
                 */
                // @ts-ignore
                public static getAvailableLocales(): Array<java.util.Locale>
                /**
                 * Obtains the DecimalStyle for the default
                 * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
                 * <p>
                 * This method provides access to locale sensitive decimal style symbols.
                 * <p>
                 * This is equivalent to calling
                 * {@link #of(Locale)
                 * of(Locale.getDefault(Locale.Category.FORMAT))}.
                 * @see java.util.Locale.Category#FORMAT
                 * @return the decimal style, not null
                 */
                // @ts-ignore
                public static ofDefaultLocale(): java.time.format.DecimalStyle
                /**
                 * Obtains the DecimalStyle for the specified locale.
                 * <p>
                 * This method provides access to locale sensitive decimal style symbols.
                 * @param locale  the locale, not null
                 * @return the decimal style, not null
                 */
                // @ts-ignore
                public static of(locale: java.util.Locale): java.time.format.DecimalStyle
                /**
                 * Gets the character that represents zero.
                 * <p>
                 * The character used to represent digits may vary by culture.
                 * This method specifies the zero character to use, which implies the characters for one to nine.
                 * @return the character for zero
                 */
                // @ts-ignore
                public getZeroDigit(): string
                /**
                 * Returns a copy of the info with a new character that represents zero.
                 * <p>
                 * The character used to represent digits may vary by culture.
                 * This method specifies the zero character to use, which implies the characters for one to nine.
                 * @param zeroDigit  the character for zero
                 * @return a copy with a new character that represents zero, not null
                 */
                // @ts-ignore
                public withZeroDigit(zeroDigit: string): java.time.format.DecimalStyle
                /**
                 * Gets the character that represents the positive sign.
                 * <p>
                 * The character used to represent a positive number may vary by culture.
                 * This method specifies the character to use.
                 * @return the character for the positive sign
                 */
                // @ts-ignore
                public getPositiveSign(): string
                /**
                 * Returns a copy of the info with a new character that represents the positive sign.
                 * <p>
                 * The character used to represent a positive number may vary by culture.
                 * This method specifies the character to use.
                 * @param positiveSign  the character for the positive sign
                 * @return a copy with a new character that represents the positive sign, not null
                 */
                // @ts-ignore
                public withPositiveSign(positiveSign: string): java.time.format.DecimalStyle
                /**
                 * Gets the character that represents the negative sign.
                 * <p>
                 * The character used to represent a negative number may vary by culture.
                 * This method specifies the character to use.
                 * @return the character for the negative sign
                 */
                // @ts-ignore
                public getNegativeSign(): string
                /**
                 * Returns a copy of the info with a new character that represents the negative sign.
                 * <p>
                 * The character used to represent a negative number may vary by culture.
                 * This method specifies the character to use.
                 * @param negativeSign  the character for the negative sign
                 * @return a copy with a new character that represents the negative sign, not null
                 */
                // @ts-ignore
                public withNegativeSign(negativeSign: string): java.time.format.DecimalStyle
                /**
                 * Gets the character that represents the decimal point.
                 * <p>
                 * The character used to represent a decimal point may vary by culture.
                 * This method specifies the character to use.
                 * @return the character for the decimal point
                 */
                // @ts-ignore
                public getDecimalSeparator(): string
                /**
                 * Returns a copy of the info with a new character that represents the decimal point.
                 * <p>
                 * The character used to represent a decimal point may vary by culture.
                 * This method specifies the character to use.
                 * @param decimalSeparator  the character for the decimal point
                 * @return a copy with a new character that represents the decimal point, not null
                 */
                // @ts-ignore
                public withDecimalSeparator(decimalSeparator: string): java.time.format.DecimalStyle
                /**
                 * Checks if this DecimalStyle is equal to another DecimalStyle.
                 * @param obj  the object to check, null returns false
                 * @return true if this is equal to the other date
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * A hash code for this DecimalStyle.
                 * @return a suitable hash code
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string describing this DecimalStyle.
                 * @return a string description, not null
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

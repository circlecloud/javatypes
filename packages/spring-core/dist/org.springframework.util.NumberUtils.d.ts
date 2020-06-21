declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Miscellaneous utility methods for number conversion and parsing.
             * <p>Mainly for internal use within the framework; consider Apache's
             * Commons Lang for a more comprehensive suite of number utilities.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @since 1.1.2
             */
            // @ts-ignore
            abstract class NumberUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Standard number types (all immutable):
                 * Byte, Short, Integer, Long, BigInteger, Float, Double, BigDecimal.
                 */
                // @ts-ignore
                public static readonly STANDARD_NUMBER_TYPES: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>
                /**
                 * Convert the given number into an instance of the given target class.
                 * @param number the number to convert
                 * @param targetClass the target class to convert to
                 * @return the converted number
                 * @throws IllegalArgumentException if the target class is not supported
                 *  (i.e. not a standard Number subclass as included in the JDK)
                 * @see java.lang.Byte
                 * @see java.lang.Short
                 * @see java.lang.Integer
                 * @see java.lang.Long
                 * @see java.math.BigInteger
                 * @see java.lang.Float
                 * @see java.lang.Double
                 * @see java.math.BigDecimal
                 */
                // @ts-ignore
                public static convertNumberToTargetClass<T extends java.lang.Number>(number: java.lang.Number, targetClass: java.lang.Class<T>): T
                /**
                 * Parse the given {@code text} into a {@link Number} instance of the given
                 * target class, using the corresponding {@code decode} / {@code valueOf} method.
                 * <p>Trims all whitespace (leading, trailing, and in between characters) from
                 * the input {@code String} before attempting to parse the number.
                 * <p>Supports numbers in hex format (with leading "0x", "0X", or "#") as well.
                 * @param text the text to convert
                 * @param targetClass the target class to parse into
                 * @return the parsed number
                 * @throws IllegalArgumentException if the target class is not supported
                 *  (i.e. not a standard Number subclass as included in the JDK)
                 * @see Byte#decode
                 * @see Short#decode
                 * @see Integer#decode
                 * @see Long#decode
                 * @see #decodeBigInteger(String)
                 * @see Float#valueOf
                 * @see Double#valueOf
                 * @see java.math.BigDecimal#BigDecimal(String)
                 */
                // @ts-ignore
                public static parseNumber<T extends java.lang.Number>(text: java.lang.String | string, targetClass: java.lang.Class<T>): T
                /**
                 * Parse the given {@code text} into a {@link Number} instance of the
                 * given target class, using the supplied {@link NumberFormat}.
                 * <p>Trims the input {@code String} before attempting to parse the number.
                 * @param text the text to convert
                 * @param targetClass the target class to parse into
                 * @param numberFormat the {#code NumberFormat} to use for parsing (if
                 *  {@code null}, this method falls back to {@link #parseNumber(String, Class)})
                 * @return the parsed number
                 * @throws IllegalArgumentException if the target class is not supported
                 *  (i.e. not a standard Number subclass as included in the JDK)
                 * @see java.text.NumberFormat#parse
                 * @see #convertNumberToTargetClass
                 * @see #parseNumber(String, Class)
                 */
                // @ts-ignore
                public static parseNumber<T extends java.lang.Number>(text: java.lang.String | string, targetClass: java.lang.Class<T>, numberFormat: java.text.NumberFormat): T
            }
        }
    }
}

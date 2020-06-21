declare namespace java {
    namespace time {
        namespace format {
            /**
             * Enumeration of ways to handle the positive/negative sign.
             * <p>
             * The formatting engine allows the positive and negative signs of numbers
             * to be controlled using this enum.
             * See {@link DateTimeFormatterBuilder} for usage.
             * @implSpec This is an immutable and thread-safe enum.
             * @since 1.8
             */
            // @ts-ignore
            class SignStyle extends java.lang.Enum<java.time.format.SignStyle> {
                /**
                 * Style to output the sign only if the value is negative.
                 * <p>
                 * In strict parsing, the negative sign will be accepted and the positive sign rejected.
                 * In lenient parsing, any sign will be accepted.
                 */
                // @ts-ignore
                readonly NORMAL: java.time.format.SignStyle
                /**
                 * Style to always output the sign, where zero will output '+'.
                 * <p>
                 * In strict parsing, the absence of a sign will be rejected.
                 * In lenient parsing, any sign will be accepted, with the absence
                 * of a sign treated as a positive number.
                 */
                // @ts-ignore
                readonly ALWAYS: java.time.format.SignStyle
                /**
                 * Style to never output sign, only outputting the absolute value.
                 * <p>
                 * In strict parsing, any sign will be rejected.
                 * In lenient parsing, any sign will be accepted unless the width is fixed.
                 */
                // @ts-ignore
                readonly NEVER: java.time.format.SignStyle
                /**
                 * Style to block negative values, throwing an exception on printing.
                 * <p>
                 * In strict parsing, any sign will be rejected.
                 * In lenient parsing, any sign will be accepted unless the width is fixed.
                 */
                // @ts-ignore
                readonly NOT_NEGATIVE: java.time.format.SignStyle
                /**
                 * Style to always output the sign if the value exceeds the pad width.
                 * A negative value will always output the '-' sign.
                 * <p>
                 * In strict parsing, the sign will be rejected unless the pad width is exceeded.
                 * In lenient parsing, any sign will be accepted, with the absence
                 * of a sign treated as a positive number.
                 */
                // @ts-ignore
                readonly EXCEEDS_PAD: java.time.format.SignStyle
                // @ts-ignore
                values(): java.time.format.SignStyle[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.time.format.SignStyle
            }
        }
    }
}

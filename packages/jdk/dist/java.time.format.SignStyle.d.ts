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
                // @ts-ignore
                values(): java.time.format.SignStyle[]
                // @ts-ignore
                valueOf(name: string): java.time.format.SignStyle
            }
        }
    }
}

declare namespace java {
    namespace time {
        namespace format {
            /**
             * Enumeration of different ways to resolve dates and times.
             * <p>
             * Parsing a text string occurs in two phases.
             * Phase 1 is a basic text parse according to the fields added to the builder.
             * Phase 2 resolves the parsed field-value pairs into date and/or time objects.
             * This style is used to control how phase 2, resolving, happens.
             * @implSpec This is an immutable and thread-safe enum.
             * @since 1.8
             */
            // @ts-ignore
            class ResolverStyle extends java.lang.Enum<java.time.format.ResolverStyle> {
                /**
                 * Style to resolve dates and times strictly.
                 * <p>
                 * Using strict resolution will ensure that all parsed values are within
                 * the outer range of valid values for the field. Individual fields may
                 * be further processed for strictness.
                 * <p>
                 * For example, resolving year-month and day-of-month in the ISO calendar
                 * system using strict mode will ensure that the day-of-month is valid
                 * for the year-month, rejecting invalid values.
                 */
                // @ts-ignore
                public static readonly STRICT: java.time.format.ResolverStyle
                /**
                 * Style to resolve dates and times in a smart, or intelligent, manner.
                 * <p>
                 * Using smart resolution will perform the sensible default for each
                 * field, which may be the same as strict, the same as lenient, or a third
                 * behavior. Individual fields will interpret this differently.
                 * <p>
                 * For example, resolving year-month and day-of-month in the ISO calendar
                 * system using smart mode will ensure that the day-of-month is from
                 * 1 to 31, converting any value beyond the last valid day-of-month to be
                 * the last valid day-of-month.
                 */
                // @ts-ignore
                public static readonly SMART: java.time.format.ResolverStyle
                /**
                 * Style to resolve dates and times leniently.
                 * <p>
                 * Using lenient resolution will resolve the values in an appropriate
                 * lenient manner. Individual fields will interpret this differently.
                 * <p>
                 * For example, lenient mode allows the month in the ISO calendar system
                 * to be outside the range 1 to 12.
                 * For example, month 15 is treated as being 3 months after month 12.
                 */
                // @ts-ignore
                public static readonly LENIENT: java.time.format.ResolverStyle
                // @ts-ignore
                public static values(): java.time.format.ResolverStyle[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.time.format.ResolverStyle
            }
        }
    }
}

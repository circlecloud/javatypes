declare namespace java {
    namespace time {
        namespace temporal {
            /**
             * A standard set of fields.
             * <p>
             * This set of fields provide field-based access to manipulate a date, time or date-time.
             * The standard set of fields can be extended by implementing {@link TemporalField}.
             * <p>
             * These fields are intended to be applicable in multiple calendar systems.
             * For example, most non-ISO calendar systems define dates as a year, month and day,
             * just with slightly different rules.
             * The documentation of each field explains how it operates.
             * @implSpec This is a final, immutable and thread-safe enum.
             * @since 1.8
             */
            // @ts-ignore
            class ChronoField extends java.lang.Enum<java.time.temporal.ChronoField> implements java.time.temporal.TemporalField {
                // @ts-ignore
                values(): java.time.temporal.ChronoField[]
                // @ts-ignore
                valueOf(name: string): java.time.temporal.ChronoField
                // @ts-ignore
                getDisplayName(locale: java.util.Locale): java.lang.String
                // @ts-ignore
                getBaseUnit(): java.time.temporal.TemporalUnit
                // @ts-ignore
                getRangeUnit(): java.time.temporal.TemporalUnit
                /**
                 * Gets the range of valid values for the field.
                 * <p>
                 * All fields can be expressed as a {@code long} integer.
                 * This method returns an object that describes the valid range for that value.
                 * <p>
                 * This method returns the range of the field in the ISO-8601 calendar system.
                 * This range may be incorrect for other calendar systems.
                 * Use {@link Chronology#range(ChronoField)} to access the correct range
                 * for a different calendar system.
                 * <p>
                 * Note that the result only describes the minimum and maximum valid values
                 * and it is important not to read too much into them. For example, there
                 * could be values within the range that are invalid for the field.
                 * @return the range of valid values for the field, not null
                 */
                // @ts-ignore
                range(): java.time.temporal.ValueRange
                /**
                 * Checks if this field represents a component of a date.
                 * <p>
                 * Fields from day-of-week to era are date-based.
                 * @return true if it is a component of a date
                 */
                // @ts-ignore
                isDateBased(): boolean
                /**
                 * Checks if this field represents a component of a time.
                 * <p>
                 * Fields from nano-of-second to am-pm-of-day are time-based.
                 * @return true if it is a component of a time
                 */
                // @ts-ignore
                isTimeBased(): boolean
                /**
                 * Checks that the specified value is valid for this field.
                 * <p>
                 * This validates that the value is within the outer range of valid values
                 * returned by {@link #range()}.
                 * <p>
                 * This method checks against the range of the field in the ISO-8601 calendar system.
                 * This range may be incorrect for other calendar systems.
                 * Use {@link Chronology#range(ChronoField)} to access the correct range
                 * for a different calendar system.
                 * @param value  the value to check
                 * @return the value that was passed in
                 */
                // @ts-ignore
                checkValidValue(value: number /*long*/): long
                /**
                 * Checks that the specified value is valid and fits in an {@code int}.
                 * <p>
                 * This validates that the value is within the outer range of valid values
                 * returned by {@link #range()}.
                 * It also checks that all valid values are within the bounds of an {@code int}.
                 * <p>
                 * This method checks against the range of the field in the ISO-8601 calendar system.
                 * This range may be incorrect for other calendar systems.
                 * Use {@link Chronology#range(ChronoField)} to access the correct range
                 * for a different calendar system.
                 * @param value  the value to check
                 * @return the value that was passed in
                 */
                // @ts-ignore
                checkValidIntValue(value: number /*long*/): int
                // @ts-ignore
                isSupportedBy(temporal: java.time.temporal.TemporalAccessor): boolean
                // @ts-ignore
                rangeRefinedBy(temporal: java.time.temporal.TemporalAccessor): java.time.temporal.ValueRange
                // @ts-ignore
                getFrom(temporal: java.time.temporal.TemporalAccessor): long
                // @ts-ignore
                adjustInto<R extends java.time.temporal.Temporal>(temporal: R extends java.time.temporal.Temporal, newValue: number /*long*/): R
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}

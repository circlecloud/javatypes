declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * An era in the Hijrah calendar system.
             * <p>
             * The Hijrah calendar system has only one era covering the
             * proleptic years greater than zero.
             * <p>
             * <b>Do not use {@code ordinal()} to obtain the numeric representation of {@code HijrahEra}.
             * Use {@code getValue()} instead.</b>
             * @implSpec This is an immutable and thread-safe enum.
             * @since 1.8
             */
            // @ts-ignore
            class HijrahEra extends java.lang.Enum<java.time.chrono.HijrahEra> implements java.time.chrono.Era {
                /**
                 * The singleton instance for the current era, 'Anno Hegirae',
                 * which has the numeric value 1.
                 */
                // @ts-ignore
                readonly AH: java.time.chrono.HijrahEra
                // @ts-ignore
                values(): java.time.chrono.HijrahEra[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.time.chrono.HijrahEra
                /**
                 * Obtains an instance of {@code HijrahEra} from an {@code int} value.
                 * <p>
                 * The current era, which is the only accepted value, has the value 1
                 * @param hijrahEra  the era to represent, only 1 supported
                 * @return the HijrahEra.AH singleton, not null
                 * @throws DateTimeException if the value is invalid
                 */
                // @ts-ignore
                of(hijrahEra: number /*int*/): java.time.chrono.HijrahEra
                /**
                 * Gets the numeric era {@code int} value.
                 * <p>
                 * The era AH has the value 1.
                 * @return the era value, 1 (AH)
                 */
                // @ts-ignore
                getValue(): number /*int*/
                /**
                 * Gets the range of valid values for the specified field.
                 * <p>
                 * The range object expresses the minimum and maximum valid values for a field.
                 * This era is used to enhance the accuracy of the returned range.
                 * If it is not possible to return the range, because the field is not supported
                 * or for some other reason, an exception is thrown.
                 * <p>
                 * If the field is a {@link ChronoField} then the query is implemented here.
                 * The {@code ERA} field returns the range.
                 * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
                 * <p>
                 * If the field is not a {@code ChronoField}, then the result of this method
                 * is obtained by invoking {@code TemporalField.rangeRefinedBy(TemporalAccessor)}
                 * passing {@code this} as the argument.
                 * Whether the range can be obtained is determined by the field.
                 * <p>
                 * The {@code ERA} field returns a range for the one valid Hijrah era.
                 * @param field  the field to query the range for, not null
                 * @return the range of valid values for the field, not null
                 * @throws DateTimeException if the range for the field cannot be obtained
                 * @throws UnsupportedTemporalTypeException if the unit is not supported
                 */
                // @ts-ignore
                range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            }
        }
    }
}

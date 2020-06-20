declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * An era in the Japanese Imperial calendar system.
             * <p>
             * This class defines the valid eras for the Japanese chronology.
             * Japan introduced the Gregorian calendar starting with Meiji 6.
             * Only Meiji and later eras are supported;
             * dates before Meiji 6, January 1 are not supported.
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class JapaneseEra extends java.lang.Object implements java.time.chrono.Era, java.io.Serializable {
                /**
                 * The singleton instance for the 'Meiji' era (1868-01-01 - 1912-07-29)
                 * which has the value -1.
                 */
                // @ts-ignore
                readonly MEIJI: java.time.chrono.JapaneseEra
                /**
                 * The singleton instance for the 'Taisho' era (1912-07-30 - 1926-12-24)
                 * which has the value 0.
                 */
                // @ts-ignore
                readonly TAISHO: java.time.chrono.JapaneseEra
                /**
                 * The singleton instance for the 'Showa' era (1926-12-25 - 1989-01-07)
                 * which has the value 1.
                 */
                // @ts-ignore
                readonly SHOWA: java.time.chrono.JapaneseEra
                /**
                 * The singleton instance for the 'Heisei' era (1989-01-08 - current)
                 * which has the value 2.
                 */
                // @ts-ignore
                readonly HEISEI: java.time.chrono.JapaneseEra
                /**
                 * Obtains an instance of {@code JapaneseEra} from an {@code int} value.
                 * <p>
                 * The {@link #SHOWA} era that contains 1970-01-01 (ISO calendar system) has the value 1
                 * Later era is numbered 2 ({@link #HEISEI}). Earlier eras are numbered 0 ({@link #TAISHO}),
                 * -1 ({@link #MEIJI}), only Meiji and later eras are supported.
                 * @param japaneseEra  the era to represent
                 * @return the {#code JapaneseEra} singleton, not null
                 * @throws DateTimeException if the value is invalid
                 */
                // @ts-ignore
                of(japaneseEra: number /*int*/): java.time.chrono.JapaneseEra
                /**
                 * Returns the {@code JapaneseEra} with the name.
                 * <p>
                 * The string must match exactly the name of the era.
                 * (Extraneous whitespace characters are not permitted.)
                 * @param japaneseEra  the japaneseEra name; non-null
                 * @return the {#code JapaneseEra} singleton, never null
                 * @throws IllegalArgumentException if there is not JapaneseEra with the specified name
                 */
                // @ts-ignore
                valueOf(japaneseEra: string): java.time.chrono.JapaneseEra
                /**
                 * Returns an array of JapaneseEras.
                 * <p>
                 * This method may be used to iterate over the JapaneseEras as follows:
                 * <pre>
                 * for (JapaneseEra c : JapaneseEra.values())
                 * System.out.println(c);
                 * </pre>
                 * @return an array of JapaneseEras
                 */
                // @ts-ignore
                values(): java.time.chrono.JapaneseEra[]
                /**
                 * {@inheritDoc}
                 * @param style {#inheritDoc}
                 * @param locale {#inheritDoc}
                 */
                // @ts-ignore
                getDisplayName(style: java.time.format.TextStyle, locale: java.util.Locale): java.lang.String
                /**
                 * Gets the numeric era {@code int} value.
                 * <p>
                 * The {@link #SHOWA} era that contains 1970-01-01 (ISO calendar system) has the value 1.
                 * Later eras are numbered from 2 ({@link #HEISEI}).
                 * Earlier eras are numbered 0 ({@link #TAISHO}), -1 ({@link #MEIJI})).
                 * @return the era value
                 */
                // @ts-ignore
                getValue(): int
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
                 * The range of valid Japanese eras can change over time due to the nature
                 * of the Japanese calendar system.
                 * @param field  the field to query the range for, not null
                 * @return the range of valid values for the field, not null
                 * @throws DateTimeException if the range for the field cannot be obtained
                 * @throws UnsupportedTemporalTypeException if the unit is not supported
                 */
                // @ts-ignore
                range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}

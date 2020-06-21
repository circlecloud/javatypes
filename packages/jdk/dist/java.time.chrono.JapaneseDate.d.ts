declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * A date in the Japanese Imperial calendar system.
             * <p>
             * This date operates using the {@linkplain JapaneseChronology Japanese Imperial calendar}.
             * This calendar system is primarily used in Japan.
             * <p>
             * The Japanese Imperial calendar system is the same as the ISO calendar system
             * apart from the era-based year numbering. The proleptic-year is defined to be
             * equal to the ISO proleptic-year.
             * <p>
             * Japan introduced the Gregorian calendar starting with Meiji 6.
             * Only Meiji and later eras are supported;
             * dates before Meiji 6, January 1 are not supported.
             * <p>
             * For example, the Japanese year "Heisei 24" corresponds to ISO year "2012".<br>
             * Calling {@code japaneseDate.get(YEAR_OF_ERA)} will return 24.<br>
             * Calling {@code japaneseDate.get(YEAR)} will return 2012.<br>
             * Calling {@code japaneseDate.get(ERA)} will return 2, corresponding to
             * {@code JapaneseChronology.ERA_HEISEI}.<br>
             * <p>
             * This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
             * class; use of identity-sensitive operations (including reference equality
             * ({@code ==}), identity hash code, or synchronization) on instances of
             * {@code JapaneseDate} may have unpredictable results and should be avoided.
             * The {@code equals} method should be used for comparisons.
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class JapaneseDate extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.JapaneseDate> implements java.time.chrono.ChronoLocalDate, java.io.Serializable {
                /**
                 * Obtains the current {@code JapaneseDate} from the system clock in the default time-zone.
                 * <p>
                 * This will query the {@link Clock#systemDefaultZone() system clock} in the default
                 * time-zone to obtain the current date.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 * @return the current date using the system clock and default time-zone, not null
                 */
                // @ts-ignore
                public static now(): java.time.chrono.JapaneseDate
                /**
                 * Obtains the current {@code JapaneseDate} from the system clock in the specified time-zone.
                 * <p>
                 * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date.
                 * Specifying the time-zone avoids dependence on the default time-zone.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 * @param zone  the zone ID to use, not null
                 * @return the current date using the system clock, not null
                 */
                // @ts-ignore
                public static now(zone: java.time.ZoneId): java.time.chrono.JapaneseDate
                /**
                 * Obtains the current {@code JapaneseDate} from the specified clock.
                 * <p>
                 * This will query the specified clock to obtain the current date - today.
                 * Using this method allows the use of an alternate clock for testing.
                 * The alternate clock may be introduced using {@linkplain Clock dependency injection}.
                 * @param clock  the clock to use, not null
                 * @return the current date, not null
                 * @throws DateTimeException if the current date cannot be obtained
                 */
                // @ts-ignore
                public static now(clock: java.time.Clock): java.time.chrono.JapaneseDate
                /**
                 * Obtains a {@code JapaneseDate} representing a date in the Japanese calendar
                 * system from the era, year-of-era, month-of-year and day-of-month fields.
                 * <p>
                 * This returns a {@code JapaneseDate} with the specified fields.
                 * The day must be valid for the year and month, otherwise an exception will be thrown.
                 * <p>
                 * The Japanese month and day-of-month are the same as those in the
                 * ISO calendar system. They are not reset when the era changes.
                 * For example:
                 * <pre>
                 * 6th Jan Showa 64 = ISO 1989-01-06
                 * 7th Jan Showa 64 = ISO 1989-01-07
                 * 8th Jan Heisei 1 = ISO 1989-01-08
                 * 9th Jan Heisei 1 = ISO 1989-01-09
                 * </pre>
                 * @param era  the Japanese era, not null
                 * @param yearOfEra  the Japanese year-of-era
                 * @param month  the Japanese month-of-year, from 1 to 12
                 * @param dayOfMonth  the Japanese day-of-month, from 1 to 31
                 * @return the date in Japanese calendar system, not null
                 * @throws DateTimeException if the value of any field is out of range,
                 *   or if the day-of-month is invalid for the month-year,
                 *   or if the date is not a Japanese era
                 */
                // @ts-ignore
                public static of(era: java.time.chrono.JapaneseEra, yearOfEra: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.JapaneseDate
                /**
                 * Obtains a {@code JapaneseDate} representing a date in the Japanese calendar
                 * system from the proleptic-year, month-of-year and day-of-month fields.
                 * <p>
                 * This returns a {@code JapaneseDate} with the specified fields.
                 * The day must be valid for the year and month, otherwise an exception will be thrown.
                 * <p>
                 * The Japanese proleptic year, month and day-of-month are the same as those
                 * in the ISO calendar system. They are not reset when the era changes.
                 * @param prolepticYear  the Japanese proleptic-year
                 * @param month  the Japanese month-of-year, from 1 to 12
                 * @param dayOfMonth  the Japanese day-of-month, from 1 to 31
                 * @return the date in Japanese calendar system, not null
                 * @throws DateTimeException if the value of any field is out of range,
                 *   or if the day-of-month is invalid for the month-year
                 */
                // @ts-ignore
                public static of(prolepticYear: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.JapaneseDate
                /**
                 * Obtains a {@code JapaneseDate} from a temporal object.
                 * <p>
                 * This obtains a date in the Japanese calendar system based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code JapaneseDate}.
                 * <p>
                 * The conversion typically uses the {@link ChronoField#EPOCH_DAY EPOCH_DAY}
                 * field, which is standardized across calendar systems.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code JapaneseDate::from}.
                 * @param temporal  the temporal object to convert, not null
                 * @return the date in Japanese calendar system, not null
                 * @throws DateTimeException if unable to convert to a {#code JapaneseDate}
                 */
                // @ts-ignore
                public static from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.JapaneseDate
                /**
                 * Gets the chronology of this date, which is the Japanese calendar system.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 * @return the Japanese chronology, not null
                 */
                // @ts-ignore
                public getChronology(): java.time.chrono.JapaneseChronology
                /**
                 * Gets the era applicable at this date.
                 * <p>
                 * The Japanese calendar system has multiple eras defined by {@link JapaneseEra}.
                 * @return the era applicable at this date, not null
                 */
                // @ts-ignore
                public getEra(): java.time.chrono.JapaneseEra
                /**
                 * Returns the length of the month represented by this date.
                 * <p>
                 * This returns the length of the month in days.
                 * Month lengths match those of the ISO calendar system.
                 * @return the length of the month in days
                 */
                // @ts-ignore
                public lengthOfMonth(): number /*int*/
                // @ts-ignore
                public lengthOfYear(): number /*int*/
                /**
                 * Checks if the specified field is supported.
                 * <p>
                 * This checks if this date can be queried for the specified field.
                 * If false, then calling the {@link #range(TemporalField) range} and
                 * {@link #get(TemporalField) get} methods will throw an exception.
                 * <p>
                 * If the field is a {@link ChronoField} then the query is implemented here.
                 * The supported fields are:
                 * <ul>
                 * <li>{@code DAY_OF_WEEK}
                 * <li>{@code DAY_OF_MONTH}
                 * <li>{@code DAY_OF_YEAR}
                 * <li>{@code EPOCH_DAY}
                 * <li>{@code MONTH_OF_YEAR}
                 * <li>{@code PROLEPTIC_MONTH}
                 * <li>{@code YEAR_OF_ERA}
                 * <li>{@code YEAR}
                 * <li>{@code ERA}
                 * </ul>
                 * All other {@code ChronoField} instances will return false.
                 * <p>
                 * If the field is not a {@code ChronoField}, then the result of this method
                 * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
                 * passing {@code this} as the argument.
                 * Whether the field is supported is determined by the field.
                 * @param field  the field to check, null returns false
                 * @return true if the field is supported on this date, false if not
                 */
                // @ts-ignore
                public isSupported(field: java.time.temporal.TemporalField): boolean
                // @ts-ignore
                public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange
                // @ts-ignore
                public getLong(field: java.time.temporal.TemporalField): number /*long*/
                // @ts-ignore
                public with(field: java.time.temporal.TemporalField, newValue: number /*long*/): java.time.chrono.JapaneseDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException {#inheritDoc}
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.JapaneseDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException {#inheritDoc}
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                public plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException {#inheritDoc}
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                public minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate
                // @ts-ignore
                public plus(amountToAdd: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate
                // @ts-ignore
                public minus(amountToAdd: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate
                // @ts-ignore
                public atTime(localTime: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<java.time.chrono.JapaneseDate>
                // @ts-ignore
                public until(endDate: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
                // @ts-ignore
                public toEpochDay(): number /*long*/
                /**
                 * Compares this date to another date, including the chronology.
                 * <p>
                 * Compares this {@code JapaneseDate} with another ensuring that the date is the same.
                 * <p>
                 * Only objects of type {@code JapaneseDate} are compared, other types return false.
                 * To compare the dates of two {@code TemporalAccessor} instances, including dates
                 * in two different chronologies, use {@link ChronoField#EPOCH_DAY} as a comparator.
                 * @param obj  the object to check, null returns false
                 * @return true if this is equal to the other date
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * A hash code for this date.
                 * @return a suitable hash code based only on the Chronology and the date
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}

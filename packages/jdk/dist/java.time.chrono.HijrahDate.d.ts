declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * A date in the Hijrah calendar system.
             * <p>
             * This date operates using one of several variants of the
             * {@linkplain HijrahChronology Hijrah calendar}.
             * <p>
             * The Hijrah calendar has a different total of days in a year than
             * Gregorian calendar, and the length of each month is based on the period
             * of a complete revolution of the moon around the earth
             * (as between successive new moons).
             * Refer to the {@link HijrahChronology} for details of supported variants.
             * <p>
             * Each HijrahDate is created bound to a particular HijrahChronology,
             * The same chronology is propagated to each HijrahDate computed from the date.
             * To use a different Hijrah variant, its HijrahChronology can be used
             * to create new HijrahDate instances.
             * Alternatively, the {@link #withVariant} method can be used to convert
             * to a new HijrahChronology.
             * <p>
             * This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
             * class; use of identity-sensitive operations (including reference equality
             * ({@code ==}), identity hash code, or synchronization) on instances of
             * {@code HijrahDate} may have unpredictable results and should be avoided.
             * The {@code equals} method should be used for comparisons.
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class HijrahDate extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.HijrahDate> implements java.time.chrono.ChronoLocalDate, java.io.Serializable {
                /**
                 * Obtains the current {@code HijrahDate} of the Islamic Umm Al-Qura calendar
                 * in the default time-zone.
                 * <p>
                 * This will query the {@link Clock#systemDefaultZone() system clock} in the default
                 * time-zone to obtain the current date.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 * @return the current date using the system clock and default time-zone, not null
                 */
                // @ts-ignore
                public static now(): java.time.chrono.HijrahDate
                /**
                 * Obtains the current {@code HijrahDate} of the Islamic Umm Al-Qura calendar
                 * in the specified time-zone.
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
                public static now(zone: java.time.ZoneId): java.time.chrono.HijrahDate
                /**
                 * Obtains the current {@code HijrahDate} of the Islamic Umm Al-Qura calendar
                 * from the specified clock.
                 * <p>
                 * This will query the specified clock to obtain the current date - today.
                 * Using this method allows the use of an alternate clock for testing.
                 * The alternate clock may be introduced using {@linkplain Clock dependency injection}.
                 * @param clock  the clock to use, not null
                 * @return the current date, not null
                 * @throws DateTimeException if the current date cannot be obtained
                 */
                // @ts-ignore
                public static now(clock: java.time.Clock): java.time.chrono.HijrahDate
                /**
                 * Obtains a {@code HijrahDate} of the Islamic Umm Al-Qura calendar
                 * from the proleptic-year, month-of-year and day-of-month fields.
                 * <p>
                 * This returns a {@code HijrahDate} with the specified fields.
                 * The day must be valid for the year and month, otherwise an exception will be thrown.
                 * @param prolepticYear  the Hijrah proleptic-year
                 * @param month  the Hijrah month-of-year, from 1 to 12
                 * @param dayOfMonth  the Hijrah day-of-month, from 1 to 30
                 * @return the date in Hijrah calendar system, not null
                 * @throws DateTimeException if the value of any field is out of range,
                 *   or if the day-of-month is invalid for the month-year
                 */
                // @ts-ignore
                public static of(prolepticYear: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.HijrahDate
                /**
                 * Obtains a {@code HijrahDate} of the Islamic Umm Al-Qura calendar from a temporal object.
                 * <p>
                 * This obtains a date in the Hijrah calendar system based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code HijrahDate}.
                 * <p>
                 * The conversion typically uses the {@link ChronoField#EPOCH_DAY EPOCH_DAY}
                 * field, which is standardized across calendar systems.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code HijrahDate::from}.
                 * @param temporal  the temporal object to convert, not null
                 * @return the date in Hijrah calendar system, not null
                 * @throws DateTimeException if unable to convert to a {#code HijrahDate}
                 */
                // @ts-ignore
                public static from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.HijrahDate
                /**
                 * Gets the chronology of this date, which is the Hijrah calendar system.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 * @return the Hijrah chronology, not null
                 */
                // @ts-ignore
                public getChronology(): java.time.chrono.HijrahChronology
                /**
                 * Gets the era applicable at this date.
                 * <p>
                 * The Hijrah calendar system has one era, 'AH',
                 * defined by {@link HijrahEra}.
                 * @return the era applicable at this date, not null
                 */
                // @ts-ignore
                public getEra(): java.time.chrono.HijrahEra
                /**
                 * Returns the length of the month represented by this date.
                 * <p>
                 * This returns the length of the month in days.
                 * Month lengths in the Hijrah calendar system vary between 29 and 30 days.
                 * @return the length of the month in days
                 */
                // @ts-ignore
                public lengthOfMonth(): number /*int*/
                /**
                 * Returns the length of the year represented by this date.
                 * <p>
                 * This returns the length of the year in days.
                 * A Hijrah calendar system year is typically shorter than
                 * that of the ISO calendar system.
                 * @return the length of the year in days
                 */
                // @ts-ignore
                public lengthOfYear(): number /*int*/
                // @ts-ignore
                public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange
                // @ts-ignore
                public getLong(field: java.time.temporal.TemporalField): number /*long*/
                // @ts-ignore
                public with(field: java.time.temporal.TemporalField, newValue: number /*long*/): java.time.chrono.HijrahDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException if unable to make the adjustment.
                 *      For example, if the adjuster requires an ISO chronology
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.HijrahDate
                /**
                 * Returns a {@code HijrahDate} with the Chronology requested.
                 * <p>
                 * The year, month, and day are checked against the new requested
                 * HijrahChronology.  If the chronology has a shorter month length
                 * for the month, the day is reduced to be the last day of the month.
                 * @param chronology the new HijrahChonology, non-null
                 * @return a HijrahDate with the requested HijrahChronology, non-null
                 */
                // @ts-ignore
                public withVariant(chronology: java.time.chrono.HijrahChronology): java.time.chrono.HijrahDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException {#inheritDoc}
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                public plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.HijrahDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException {#inheritDoc}
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                public minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.HijrahDate
                // @ts-ignore
                public toEpochDay(): number /*long*/
                /**
                 * Checks if the year is a leap year, according to the Hijrah calendar system rules.
                 * @return true if this date is in a leap year
                 */
                // @ts-ignore
                public isLeapYear(): boolean
                // @ts-ignore
                public plus(amountToAdd: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.chrono.HijrahDate
                // @ts-ignore
                public minus(amountToSubtract: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.chrono.HijrahDate
                // @ts-ignore
                public atTime(localTime: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<java.time.chrono.HijrahDate>
                // @ts-ignore
                public until(endDate: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
                /**
                 * Compares this date to another date, including the chronology.
                 * <p>
                 * Compares this {@code HijrahDate} with another ensuring that the date is the same.
                 * <p>
                 * Only objects of type {@code HijrahDate} are compared, other types return false.
                 * To compare the dates of two {@code TemporalAccessor} instances, including dates
                 * in two different chronologies, use {@link ChronoField#EPOCH_DAY} as a comparator.
                 * @param obj  the object to check, null returns false
                 * @return true if this is equal to the other date and the Chronologies are equal
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

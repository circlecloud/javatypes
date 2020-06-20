declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * A date in the Thai Buddhist calendar system.
             * <p>
             * This date operates using the {@linkplain ThaiBuddhistChronology Thai Buddhist calendar}.
             * This calendar system is primarily used in Thailand.
             * Dates are aligned such that {@code 2484-01-01 (Buddhist)} is {@code 1941-01-01 (ISO)}.
             * <p>
             * This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
             * class; use of identity-sensitive operations (including reference equality
             * ({@code ==}), identity hash code, or synchronization) on instances of
             * {@code ThaiBuddhistDate} may have unpredictable results and should be avoided.
             * The {@code equals} method should be used for comparisons.
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class ThaiBuddhistDate extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.ThaiBuddhistDate> implements java.time.chrono.ChronoLocalDate, java.io.Serializable {
                /**
                 * Obtains the current {@code ThaiBuddhistDate} from the system clock in the default time-zone.
                 * <p>
                 * This will query the {@link Clock#systemDefaultZone() system clock} in the default
                 * time-zone to obtain the current date.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 * @return the current date using the system clock and default time-zone, not null
                 */
                // @ts-ignore
                now(): java.time.chrono.ThaiBuddhistDate
                /**
                 * Obtains the current {@code ThaiBuddhistDate} from the system clock in the specified time-zone.
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
                now(zone: java.time.ZoneId): java.time.chrono.ThaiBuddhistDate
                /**
                 * Obtains the current {@code ThaiBuddhistDate} from the specified clock.
                 * <p>
                 * This will query the specified clock to obtain the current date - today.
                 * Using this method allows the use of an alternate clock for testing.
                 * The alternate clock may be introduced using {@linkplain Clock dependency injection}.
                 * @param clock  the clock to use, not null
                 * @return the current date, not null
                 * @throws DateTimeException if the current date cannot be obtained
                 */
                // @ts-ignore
                now(clock: java.time.Clock): java.time.chrono.ThaiBuddhistDate
                /**
                 * Obtains a {@code ThaiBuddhistDate} representing a date in the Thai Buddhist calendar
                 * system from the proleptic-year, month-of-year and day-of-month fields.
                 * <p>
                 * This returns a {@code ThaiBuddhistDate} with the specified fields.
                 * The day must be valid for the year and month, otherwise an exception will be thrown.
                 * @param prolepticYear  the Thai Buddhist proleptic-year
                 * @param month  the Thai Buddhist month-of-year, from 1 to 12
                 * @param dayOfMonth  the Thai Buddhist day-of-month, from 1 to 31
                 * @return the date in Thai Buddhist calendar system, not null
                 * @throws DateTimeException if the value of any field is out of range,
                 *   or if the day-of-month is invalid for the month-year
                 */
                // @ts-ignore
                of(prolepticYear: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.ThaiBuddhistDate
                /**
                 * Obtains a {@code ThaiBuddhistDate} from a temporal object.
                 * <p>
                 * This obtains a date in the Thai Buddhist calendar system based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code ThaiBuddhistDate}.
                 * <p>
                 * The conversion typically uses the {@link ChronoField#EPOCH_DAY EPOCH_DAY}
                 * field, which is standardized across calendar systems.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code ThaiBuddhistDate::from}.
                 * @param temporal  the temporal object to convert, not null
                 * @return the date in Thai Buddhist calendar system, not null
                 * @throws DateTimeException if unable to convert to a {#code ThaiBuddhistDate}
                 */
                // @ts-ignore
                from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ThaiBuddhistDate
                /**
                 * Gets the chronology of this date, which is the Thai Buddhist calendar system.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 * @return the Thai Buddhist chronology, not null
                 */
                // @ts-ignore
                getChronology(): java.time.chrono.ThaiBuddhistChronology
                /**
                 * Gets the era applicable at this date.
                 * <p>
                 * The Thai Buddhist calendar system has two eras, 'BE' and 'BEFORE_BE',
                 * defined by {@link ThaiBuddhistEra}.
                 * @return the era applicable at this date, not null
                 */
                // @ts-ignore
                getEra(): java.time.chrono.ThaiBuddhistEra
                /**
                 * Returns the length of the month represented by this date.
                 * <p>
                 * This returns the length of the month in days.
                 * Month lengths match those of the ISO calendar system.
                 * @return the length of the month in days
                 */
                // @ts-ignore
                lengthOfMonth(): int
                // @ts-ignore
                range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange
                // @ts-ignore
                getLong(field: java.time.temporal.TemporalField): long
                // @ts-ignore
                with(field: java.time.temporal.TemporalField, newValue: number /*long*/): java.time.chrono.ThaiBuddhistDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException {#inheritDoc}
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.ThaiBuddhistDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException {#inheritDoc}
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ThaiBuddhistDate
                /**
                 * {@inheritDoc}
                 * @throws DateTimeException {#inheritDoc}
                 * @throws ArithmeticException {#inheritDoc}
                 */
                // @ts-ignore
                minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ThaiBuddhistDate
                // @ts-ignore
                plus(amountToAdd: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.chrono.ThaiBuddhistDate
                // @ts-ignore
                minus(amountToAdd: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.chrono.ThaiBuddhistDate
                // @ts-ignore
                atTime(localTime: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<java.time.chrono.ThaiBuddhistDate>
                // @ts-ignore
                until(endDate: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
                // @ts-ignore
                toEpochDay(): long
                /**
                 * Compares this date to another date, including the chronology.
                 * <p>
                 * Compares this {@code ThaiBuddhistDate} with another ensuring that the date is the same.
                 * <p>
                 * Only objects of type {@code ThaiBuddhistDate} are compared, other types return false.
                 * To compare the dates of two {@code TemporalAccessor} instances, including dates
                 * in two different chronologies, use {@link ChronoField#EPOCH_DAY} as a comparator.
                 * @param obj  the object to check, null returns false
                 * @return true if this is equal to the other date
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * A hash code for this date.
                 * @return a suitable hash code based only on the Chronology and the date
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}

declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * The Thai Buddhist calendar system.
             * <p>
             * This chronology defines the rules of the Thai Buddhist calendar system.
             * This calendar system is primarily used in Thailand.
             * Dates are aligned such that {@code 2484-01-01 (Buddhist)} is {@code 1941-01-01 (ISO)}.
             * <p>
             * The fields are defined as follows:
             * <ul>
             * <li>era - There are two eras, the current 'Buddhist' (ERA_BE) and the previous era (ERA_BEFORE_BE).
             * <li>year-of-era - The year-of-era for the current era increases uniformly from the epoch at year one.
             * For the previous era the year increases from one as time goes backwards.
             * The value for the current era is equal to the ISO proleptic-year plus 543.
             * <li>proleptic-year - The proleptic year is the same as the year-of-era for the
             * current era. For the previous era, years have zero, then negative values.
             * The value is equal to the ISO proleptic-year plus 543.
             * <li>month-of-year - The ThaiBuddhist month-of-year exactly matches ISO.
             * <li>day-of-month - The ThaiBuddhist day-of-month exactly matches ISO.
             * <li>day-of-year - The ThaiBuddhist day-of-year exactly matches ISO.
             * <li>leap-year - The ThaiBuddhist leap-year pattern exactly matches ISO, such that the two calendars
             * are never out of step.
             * </ul>
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class ThaiBuddhistChronology extends java.time.chrono.AbstractChronology implements java.io.Serializable {
                /**
                 * Singleton instance of the Buddhist chronology.
                 */
                // @ts-ignore
                public static readonly INSTANCE: java.time.chrono.ThaiBuddhistChronology
                /**
                 * Gets the ID of the chronology - 'ThaiBuddhist'.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * @return the chronology ID - 'ThaiBuddhist'
                 * @see #getCalendarType()
                 */
                // @ts-ignore
                public getId(): string
                /**
                 * Gets the calendar type of the underlying calendar system - 'buddhist'.
                 * <p>
                 * The calendar type is an identifier defined by the
                 * <em>Unicode Locale Data Markup Language (LDML)</em> specification.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * It can also be used as part of a locale, accessible via
                 * {@link Locale#getUnicodeLocaleType(String)} with the key 'ca'.
                 * @return the calendar system type - 'buddhist'
                 * @see #getId()
                 */
                // @ts-ignore
                public getCalendarType(): string
                /**
                 * Obtains a local date in Thai Buddhist calendar system from the
                 * era, year-of-era, month-of-year and day-of-month fields.
                 * @param era  the Thai Buddhist era, not null
                 * @param yearOfEra  the year-of-era
                 * @param month  the month-of-year
                 * @param dayOfMonth  the day-of-month
                 * @return the Thai Buddhist local date, not null
                 * @throws DateTimeException if unable to create the date
                 * @throws ClassCastException if the {#code era} is not a {@code ThaiBuddhistEra}
                 */
                // @ts-ignore
                public date(era: java.time.chrono.Era, yearOfEra: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.ThaiBuddhistDate
                /**
                 * Obtains a local date in Thai Buddhist calendar system from the
                 * proleptic-year, month-of-year and day-of-month fields.
                 * @param prolepticYear  the proleptic-year
                 * @param month  the month-of-year
                 * @param dayOfMonth  the day-of-month
                 * @return the Thai Buddhist local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                public date(prolepticYear: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.ThaiBuddhistDate
                /**
                 * Obtains a local date in Thai Buddhist calendar system from the
                 * era, year-of-era and day-of-year fields.
                 * @param era  the Thai Buddhist era, not null
                 * @param yearOfEra  the year-of-era
                 * @param dayOfYear  the day-of-year
                 * @return the Thai Buddhist local date, not null
                 * @throws DateTimeException if unable to create the date
                 * @throws ClassCastException if the {#code era} is not a {@code ThaiBuddhistEra}
                 */
                // @ts-ignore
                public dateYearDay(era: java.time.chrono.Era, yearOfEra: number /*int*/, dayOfYear: number /*int*/): java.time.chrono.ThaiBuddhistDate
                /**
                 * Obtains a local date in Thai Buddhist calendar system from the
                 * proleptic-year and day-of-year fields.
                 * @param prolepticYear  the proleptic-year
                 * @param dayOfYear  the day-of-year
                 * @return the Thai Buddhist local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                public dateYearDay(prolepticYear: number /*int*/, dayOfYear: number /*int*/): java.time.chrono.ThaiBuddhistDate
                /**
                 * Obtains a local date in the Thai Buddhist calendar system from the epoch-day.
                 * @param epochDay  the epoch day
                 * @return the Thai Buddhist local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                public dateEpochDay(epochDay: number /*long*/): java.time.chrono.ThaiBuddhistDate
                // @ts-ignore
                public dateNow(): java.time.chrono.ThaiBuddhistDate
                // @ts-ignore
                public dateNow(zone: java.time.ZoneId): java.time.chrono.ThaiBuddhistDate
                // @ts-ignore
                public dateNow(clock: java.time.Clock): java.time.chrono.ThaiBuddhistDate
                // @ts-ignore
                public date(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ThaiBuddhistDate
                // @ts-ignore
                public localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<java.time.chrono.ThaiBuddhistDate>
                // @ts-ignore
                public zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<java.time.chrono.ThaiBuddhistDate>
                // @ts-ignore
                public zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<java.time.chrono.ThaiBuddhistDate>
                /**
                 * Checks if the specified year is a leap year.
                 * <p>
                 * Thai Buddhist leap years occur exactly in line with ISO leap years.
                 * This method does not validate the year passed in, and only has a
                 * well-defined result for years in the supported range.
                 * @param prolepticYear  the proleptic-year to check, not validated for range
                 * @return true if the year is a leap year
                 */
                // @ts-ignore
                public isLeapYear(prolepticYear: number /*long*/): boolean
                // @ts-ignore
                public prolepticYear(era: java.time.chrono.Era, yearOfEra: number /*int*/): number /*int*/
                // @ts-ignore
                public eraOf(eraValue: number /*int*/): java.time.chrono.ThaiBuddhistEra
                // @ts-ignore
                public eras(): Array<java.time.chrono.Era>
                // @ts-ignore
                public range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange
                // @ts-ignore
                public resolveDate(fieldValues: java.util.Map<java.time.temporal.TemporalField, java.lang.Long | number>, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.ThaiBuddhistDate
            }
        }
    }
}

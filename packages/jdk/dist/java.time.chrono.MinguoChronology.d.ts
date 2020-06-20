declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * The Minguo calendar system.
             * <p>
             * This chronology defines the rules of the Minguo calendar system.
             * This calendar system is primarily used in the Republic of China, often known as Taiwan.
             * Dates are aligned such that {@code 0001-01-01 (Minguo)} is {@code 1912-01-01 (ISO)}.
             * <p>
             * The fields are defined as follows:
             * <ul>
             * <li>era - There are two eras, the current 'Republic' (ERA_ROC) and the previous era (ERA_BEFORE_ROC).
             * <li>year-of-era - The year-of-era for the current era increases uniformly from the epoch at year one.
             * For the previous era the year increases from one as time goes backwards.
             * The value for the current era is equal to the ISO proleptic-year minus 1911.
             * <li>proleptic-year - The proleptic year is the same as the year-of-era for the
             * current era. For the previous era, years have zero, then negative values.
             * The value is equal to the ISO proleptic-year minus 1911.
             * <li>month-of-year - The Minguo month-of-year exactly matches ISO.
             * <li>day-of-month - The Minguo day-of-month exactly matches ISO.
             * <li>day-of-year - The Minguo day-of-year exactly matches ISO.
             * <li>leap-year - The Minguo leap-year pattern exactly matches ISO, such that the two calendars
             * are never out of step.
             * </ul>
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class MinguoChronology extends java.time.chrono.AbstractChronology implements java.io.Serializable {
                /**
                 * Singleton instance for the Minguo chronology.
                 */
                // @ts-ignore
                readonly INSTANCE: java.time.chrono.MinguoChronology
                /**
                 * Gets the ID of the chronology - 'Minguo'.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * @return the chronology ID - 'Minguo'
                 * @see #getCalendarType()
                 */
                // @ts-ignore
                getId(): java.lang.String
                /**
                 * Gets the calendar type of the underlying calendar system - 'roc'.
                 * <p>
                 * The calendar type is an identifier defined by the
                 * <em>Unicode Locale Data Markup Language (LDML)</em> specification.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * It can also be used as part of a locale, accessible via
                 * {@link Locale#getUnicodeLocaleType(String)} with the key 'ca'.
                 * @return the calendar system type - 'roc'
                 * @see #getId()
                 */
                // @ts-ignore
                getCalendarType(): java.lang.String
                /**
                 * Obtains a local date in Minguo calendar system from the
                 * era, year-of-era, month-of-year and day-of-month fields.
                 * @param era  the Minguo era, not null
                 * @param yearOfEra  the year-of-era
                 * @param month  the month-of-year
                 * @param dayOfMonth  the day-of-month
                 * @return the Minguo local date, not null
                 * @throws DateTimeException if unable to create the date
                 * @throws ClassCastException if the {#code era} is not a {@code MinguoEra}
                 */
                // @ts-ignore
                date(era: java.time.chrono.Era, yearOfEra: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.MinguoDate
                /**
                 * Obtains a local date in Minguo calendar system from the
                 * proleptic-year, month-of-year and day-of-month fields.
                 * @param prolepticYear  the proleptic-year
                 * @param month  the month-of-year
                 * @param dayOfMonth  the day-of-month
                 * @return the Minguo local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                date(prolepticYear: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.MinguoDate
                /**
                 * Obtains a local date in Minguo calendar system from the
                 * era, year-of-era and day-of-year fields.
                 * @param era  the Minguo era, not null
                 * @param yearOfEra  the year-of-era
                 * @param dayOfYear  the day-of-year
                 * @return the Minguo local date, not null
                 * @throws DateTimeException if unable to create the date
                 * @throws ClassCastException if the {#code era} is not a {@code MinguoEra}
                 */
                // @ts-ignore
                dateYearDay(era: java.time.chrono.Era, yearOfEra: number /*int*/, dayOfYear: number /*int*/): java.time.chrono.MinguoDate
                /**
                 * Obtains a local date in Minguo calendar system from the
                 * proleptic-year and day-of-year fields.
                 * @param prolepticYear  the proleptic-year
                 * @param dayOfYear  the day-of-year
                 * @return the Minguo local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                dateYearDay(prolepticYear: number /*int*/, dayOfYear: number /*int*/): java.time.chrono.MinguoDate
                /**
                 * Obtains a local date in the Minguo calendar system from the epoch-day.
                 * @param epochDay  the epoch day
                 * @return the Minguo local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                dateEpochDay(epochDay: number /*long*/): java.time.chrono.MinguoDate
                // @ts-ignore
                dateNow(): java.time.chrono.MinguoDate
                // @ts-ignore
                dateNow(zone: java.time.ZoneId): java.time.chrono.MinguoDate
                // @ts-ignore
                dateNow(clock: java.time.Clock): java.time.chrono.MinguoDate
                // @ts-ignore
                date(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.MinguoDate
                // @ts-ignore
                localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<java.time.chrono.MinguoDate>
                // @ts-ignore
                zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<java.time.chrono.MinguoDate>
                // @ts-ignore
                zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<java.time.chrono.MinguoDate>
                /**
                 * Checks if the specified year is a leap year.
                 * <p>
                 * Minguo leap years occur exactly in line with ISO leap years.
                 * This method does not validate the year passed in, and only has a
                 * well-defined result for years in the supported range.
                 * @param prolepticYear  the proleptic-year to check, not validated for range
                 * @return true if the year is a leap year
                 */
                // @ts-ignore
                isLeapYear(prolepticYear: number /*long*/): boolean
                // @ts-ignore
                prolepticYear(era: java.time.chrono.Era, yearOfEra: number /*int*/): int
                // @ts-ignore
                eraOf(eraValue: number /*int*/): java.time.chrono.MinguoEra
                // @ts-ignore
                eras(): java.util.List<java.time.chrono.Era>
                // @ts-ignore
                range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange
                // @ts-ignore
                resolveDate(fieldValues: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.MinguoDate
            }
        }
    }
}

declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * The Japanese Imperial calendar system.
             * <p>
             * This chronology defines the rules of the Japanese Imperial calendar system.
             * This calendar system is primarily used in Japan.
             * The Japanese Imperial calendar system is the same as the ISO calendar system
             * apart from the era-based year numbering.
             * <p>
             * Japan introduced the Gregorian calendar starting with Meiji 6.
             * Only Meiji and later eras are supported;
             * dates before Meiji 6, January 1 are not supported.
             * <p>
             * The supported {@code ChronoField} instances are:
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
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class JapaneseChronology extends java.time.chrono.AbstractChronology implements java.io.Serializable {
                /**
                 * Singleton instance for Japanese chronology.
                 */
                // @ts-ignore
                readonly INSTANCE: java.time.chrono.JapaneseChronology
                /**
                 * Gets the ID of the chronology - 'Japanese'.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * @return the chronology ID - 'Japanese'
                 * @see #getCalendarType()
                 */
                // @ts-ignore
                getId(): java.lang.String
                /**
                 * Gets the calendar type of the underlying calendar system - 'japanese'.
                 * <p>
                 * The calendar type is an identifier defined by the
                 * <em>Unicode Locale Data Markup Language (LDML)</em> specification.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * It can also be used as part of a locale, accessible via
                 * {@link Locale#getUnicodeLocaleType(String)} with the key 'ca'.
                 * @return the calendar system type - 'japanese'
                 * @see #getId()
                 */
                // @ts-ignore
                getCalendarType(): java.lang.String
                /**
                 * Obtains a local date in Japanese calendar system from the
                 * era, year-of-era, month-of-year and day-of-month fields.
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
                 * @param yearOfEra  the year-of-era
                 * @param month  the month-of-year
                 * @param dayOfMonth  the day-of-month
                 * @return the Japanese local date, not null
                 * @throws DateTimeException if unable to create the date
                 * @throws ClassCastException if the {#code era} is not a {@code JapaneseEra}
                 */
                // @ts-ignore
                date(era: java.time.chrono.Era, yearOfEra: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.JapaneseDate
                /**
                 * Obtains a local date in Japanese calendar system from the
                 * proleptic-year, month-of-year and day-of-month fields.
                 * <p>
                 * The Japanese proleptic year, month and day-of-month are the same as those
                 * in the ISO calendar system. They are not reset when the era changes.
                 * @param prolepticYear  the proleptic-year
                 * @param month  the month-of-year
                 * @param dayOfMonth  the day-of-month
                 * @return the Japanese local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                date(prolepticYear: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.JapaneseDate
                /**
                 * Obtains a local date in Japanese calendar system from the
                 * era, year-of-era and day-of-year fields.
                 * <p>
                 * The day-of-year in this factory is expressed relative to the start of the year-of-era.
                 * This definition changes the normal meaning of day-of-year only in those years
                 * where the year-of-era is reset to one due to a change in the era.
                 * For example:
                 * <pre>
                 * 6th Jan Showa 64 = day-of-year 6
                 * 7th Jan Showa 64 = day-of-year 7
                 * 8th Jan Heisei 1 = day-of-year 1
                 * 9th Jan Heisei 1 = day-of-year 2
                 * </pre>
                 * @param era  the Japanese era, not null
                 * @param yearOfEra  the year-of-era
                 * @param dayOfYear  the day-of-year
                 * @return the Japanese local date, not null
                 * @throws DateTimeException if unable to create the date
                 * @throws ClassCastException if the {#code era} is not a {@code JapaneseEra}
                 */
                // @ts-ignore
                dateYearDay(era: java.time.chrono.Era, yearOfEra: number /*int*/, dayOfYear: number /*int*/): java.time.chrono.JapaneseDate
                /**
                 * Obtains a local date in Japanese calendar system from the
                 * proleptic-year and day-of-year fields.
                 * <p>
                 * The day-of-year in this factory is expressed relative to the start of the proleptic year.
                 * The Japanese proleptic year and day-of-year are the same as those in the ISO calendar system.
                 * They are not reset when the era changes.
                 * @param prolepticYear  the proleptic-year
                 * @param dayOfYear  the day-of-year
                 * @return the Japanese local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                dateYearDay(prolepticYear: number /*int*/, dayOfYear: number /*int*/): java.time.chrono.JapaneseDate
                /**
                 * Obtains a local date in the Japanese calendar system from the epoch-day.
                 * @param epochDay  the epoch day
                 * @return the Japanese local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                dateEpochDay(epochDay: number /*long*/): java.time.chrono.JapaneseDate
                // @ts-ignore
                dateNow(): java.time.chrono.JapaneseDate
                // @ts-ignore
                dateNow(zone: java.time.ZoneId): java.time.chrono.JapaneseDate
                // @ts-ignore
                dateNow(clock: java.time.Clock): java.time.chrono.JapaneseDate
                // @ts-ignore
                date(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.JapaneseDate
                // @ts-ignore
                localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<java.time.chrono.JapaneseDate>
                // @ts-ignore
                zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<java.time.chrono.JapaneseDate>
                // @ts-ignore
                zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<java.time.chrono.JapaneseDate>
                /**
                 * Checks if the specified year is a leap year.
                 * <p>
                 * Japanese calendar leap years occur exactly in line with ISO leap years.
                 * This method does not validate the year passed in, and only has a
                 * well-defined result for years in the supported range.
                 * @param prolepticYear  the proleptic-year to check, not validated for range
                 * @return true if the year is a leap year
                 */
                // @ts-ignore
                isLeapYear(prolepticYear: number /*long*/): boolean
                // @ts-ignore
                prolepticYear(era: java.time.chrono.Era, yearOfEra: number /*int*/): int
                /**
                 * Returns the calendar system era object from the given numeric value.
                 * See the description of each Era for the numeric values of:
                 * {@link JapaneseEra#HEISEI}, {@link JapaneseEra#SHOWA},{@link JapaneseEra#TAISHO},
                 * {@link JapaneseEra#MEIJI}), only Meiji and later eras are supported.
                 * @param eraValue  the era value
                 * @return the Japanese {#code Era} for the given numeric era value
                 * @throws DateTimeException if {#code eraValue} is invalid
                 */
                // @ts-ignore
                eraOf(eraValue: number /*int*/): java.time.chrono.JapaneseEra
                // @ts-ignore
                eras(): java.util.List<java.time.chrono.Era>
                // @ts-ignore
                range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange
                // @ts-ignore
                resolveDate(fieldValues: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.JapaneseDate
            }
        }
    }
}

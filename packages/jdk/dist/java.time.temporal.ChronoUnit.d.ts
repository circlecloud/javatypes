declare namespace java {
    namespace time {
        namespace temporal {
            /**
             * A standard set of date periods units.
             * <p>
             * This set of units provide unit-based access to manipulate a date, time or date-time.
             * The standard set of units can be extended by implementing {@link TemporalUnit}.
             * <p>
             * These units are intended to be applicable in multiple calendar systems.
             * For example, most non-ISO calendar systems define units of years, months and days,
             * just with slightly different rules.
             * The documentation of each unit explains how it operates.
             * @implSpec This is a final, immutable and thread-safe enum.
             * @since 1.8
             */
            // @ts-ignore
            class ChronoUnit extends java.lang.Enum<java.time.temporal.ChronoUnit> implements java.time.temporal.TemporalUnit {
                /**
                 * Unit that represents the concept of a nanosecond, the smallest supported unit of time.
                 * For the ISO calendar system, it is equal to the 1,000,000,000th part of the second unit.
                 */
                // @ts-ignore
                readonly NANOS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a microsecond.
                 * For the ISO calendar system, it is equal to the 1,000,000th part of the second unit.
                 */
                // @ts-ignore
                readonly MICROS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a millisecond.
                 * For the ISO calendar system, it is equal to the 1000th part of the second unit.
                 */
                // @ts-ignore
                readonly MILLIS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a second.
                 * For the ISO calendar system, it is equal to the second in the SI system
                 * of units, except around a leap-second.
                 */
                // @ts-ignore
                readonly SECONDS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a minute.
                 * For the ISO calendar system, it is equal to 60 seconds.
                 */
                // @ts-ignore
                readonly MINUTES: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of an hour.
                 * For the ISO calendar system, it is equal to 60 minutes.
                 */
                // @ts-ignore
                readonly HOURS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of half a day, as used in AM/PM.
                 * For the ISO calendar system, it is equal to 12 hours.
                 */
                // @ts-ignore
                readonly HALF_DAYS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a day.
                 * For the ISO calendar system, it is the standard day from midnight to midnight.
                 * The estimated duration of a day is {@code 24 Hours}.
                 * <p>
                 * When used with other calendar systems it must correspond to the day defined by
                 * the rising and setting of the Sun on Earth. It is not required that days begin
                 * at midnight - when converting between calendar systems, the date should be
                 * equivalent at midday.
                 */
                // @ts-ignore
                readonly DAYS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a week.
                 * For the ISO calendar system, it is equal to 7 days.
                 * <p>
                 * When used with other calendar systems it must correspond to an integral number of days.
                 */
                // @ts-ignore
                readonly WEEKS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a month.
                 * For the ISO calendar system, the length of the month varies by month-of-year.
                 * The estimated duration of a month is one twelfth of {@code 365.2425 Days}.
                 * <p>
                 * When used with other calendar systems it must correspond to an integral number of days.
                 */
                // @ts-ignore
                readonly MONTHS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a year.
                 * For the ISO calendar system, it is equal to 12 months.
                 * The estimated duration of a year is {@code 365.2425 Days}.
                 * <p>
                 * When used with other calendar systems it must correspond to an integral number of days
                 * or months roughly equal to a year defined by the passage of the Earth around the Sun.
                 */
                // @ts-ignore
                readonly YEARS: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a decade.
                 * For the ISO calendar system, it is equal to 10 years.
                 * <p>
                 * When used with other calendar systems it must correspond to an integral number of days
                 * and is normally an integral number of years.
                 */
                // @ts-ignore
                readonly DECADES: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a century.
                 * For the ISO calendar system, it is equal to 100 years.
                 * <p>
                 * When used with other calendar systems it must correspond to an integral number of days
                 * and is normally an integral number of years.
                 */
                // @ts-ignore
                readonly CENTURIES: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of a millennium.
                 * For the ISO calendar system, it is equal to 1000 years.
                 * <p>
                 * When used with other calendar systems it must correspond to an integral number of days
                 * and is normally an integral number of years.
                 */
                // @ts-ignore
                readonly MILLENNIA: java.time.temporal.ChronoUnit
                /**
                 * Unit that represents the concept of an era.
                 * The ISO calendar system doesn't have eras thus it is impossible to add
                 * an era to a date or date-time.
                 * The estimated duration of the era is artificially defined as {@code 1,000,000,000 Years}.
                 * <p>
                 * When used with other calendar systems there are no restrictions on the unit.
                 */
                // @ts-ignore
                readonly ERAS: java.time.temporal.ChronoUnit
                /**
                 * Artificial unit that represents the concept of forever.
                 * This is primarily used with {@link TemporalField} to represent unbounded fields
                 * such as the year or era.
                 * The estimated duration of the era is artificially defined as the largest duration
                 * supported by {@code Duration}.
                 */
                // @ts-ignore
                readonly FOREVER: java.time.temporal.ChronoUnit
                // @ts-ignore
                values(): java.time.temporal.ChronoUnit[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.time.temporal.ChronoUnit
                /**
                 * Gets the estimated duration of this unit in the ISO calendar system.
                 * <p>
                 * All of the units in this class have an estimated duration.
                 * Days vary due to daylight saving time, while months have different lengths.
                 * @return the estimated duration of this unit, not null
                 */
                // @ts-ignore
                getDuration(): java.time.Duration
                /**
                 * Checks if the duration of the unit is an estimate.
                 * <p>
                 * All time units in this class are considered to be accurate, while all date
                 * units in this class are considered to be estimated.
                 * <p>
                 * This definition ignores leap seconds, but considers that Days vary due to
                 * daylight saving time and months have different lengths.
                 * @return true if the duration is estimated, false if accurate
                 */
                // @ts-ignore
                isDurationEstimated(): boolean
                /**
                 * Checks if this unit is a date unit.
                 * <p>
                 * All units from days to eras inclusive are date-based.
                 * Time-based units and {@code FOREVER} return false.
                 * @return true if a date unit, false if a time unit
                 */
                // @ts-ignore
                isDateBased(): boolean
                /**
                 * Checks if this unit is a time unit.
                 * <p>
                 * All units from nanos to half-days inclusive are time-based.
                 * Date-based units and {@code FOREVER} return false.
                 * @return true if a time unit, false if a date unit
                 */
                // @ts-ignore
                isTimeBased(): boolean
                // @ts-ignore
                isSupportedBy(temporal: java.time.temporal.Temporal): boolean
                // @ts-ignore
                addTo<R extends java.time.temporal.Temporal>(temporal: R, amount: number /*long*/): R
                // @ts-ignore
                between(temporal1Inclusive: java.time.temporal.Temporal, temporal2Exclusive: java.time.temporal.Temporal): number /*long*/
                // @ts-ignore
                toString(): string
            }
        }
    }
}

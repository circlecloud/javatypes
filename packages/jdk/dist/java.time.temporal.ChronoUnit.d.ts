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
                // @ts-ignore
                values(): java.time.temporal.ChronoUnit[]
                // @ts-ignore
                valueOf(name: string): java.time.temporal.ChronoUnit
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
                addTo<R extends java.time.temporal.Temporal>(temporal: R extends java.time.temporal.Temporal, amount: number /*long*/): R
                // @ts-ignore
                between(temporal1Inclusive: java.time.temporal.Temporal, temporal2Exclusive: java.time.temporal.Temporal): long
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}

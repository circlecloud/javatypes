declare namespace java {
    namespace time {
        namespace zone {
            /**
             * A rule expressing how to create a transition.
             * <p>
             * This class allows rules for identifying future transitions to be expressed.
             * A rule might be written in many forms:
             * <ul>
             * <li>the 16th March
             * <li>the Sunday on or after the 16th March
             * <li>the Sunday on or before the 16th March
             * <li>the last Sunday in February
             * </ul>
             * These different rule types can be expressed and queried.
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class ZoneOffsetTransitionRule extends java.lang.Object implements java.io.Serializable {
                /**
                 * Obtains an instance defining the yearly rule to create transitions between two offsets.
                 * <p>
                 * Applications should normally obtain an instance from {@link ZoneRules}.
                 * This factory is only intended for use when creating {@link ZoneRules}.
                 * @param month  the month of the month-day of the first day of the cutover week, not null
                 * @param dayOfMonthIndicator  the day of the month-day of the cutover week, positive if the week is that
                 *   day or later, negative if the week is that day or earlier, counting from the last day of the month,
                 *   from -28 to 31 excluding 0
                 * @param dayOfWeek  the required day-of-week, null if the month-day should not be changed
                 * @param time  the cutover time in the 'before' offset, not null
                 * @param timeEndOfDay  whether the time is midnight at the end of day
                 * @param timeDefnition  how to interpret the cutover
                 * @param standardOffset  the standard offset in force at the cutover, not null
                 * @param offsetBefore  the offset before the cutover, not null
                 * @param offsetAfter  the offset after the cutover, not null
                 * @return the rule, not null
                 * @throws IllegalArgumentException if the day of month indicator is invalid
                 * @throws IllegalArgumentException if the end of day flag is true when the time is not midnight
                 */
                // @ts-ignore
                public static of(month: java.time.Month, dayOfMonthIndicator: number /*int*/, dayOfWeek: java.time.DayOfWeek, time: java.time.LocalTime, timeEndOfDay: boolean, timeDefnition: java.time.zone.ZoneOffsetTransitionRule.TimeDefinition, standardOffset: java.time.ZoneOffset, offsetBefore: java.time.ZoneOffset, offsetAfter: java.time.ZoneOffset): java.time.zone.ZoneOffsetTransitionRule
                /**
                 * Gets the month of the transition.
                 * <p>
                 * If the rule defines an exact date then the month is the month of that date.
                 * <p>
                 * If the rule defines a week where the transition might occur, then the month
                 * if the month of either the earliest or latest possible date of the cutover.
                 * @return the month of the transition, not null
                 */
                // @ts-ignore
                public getMonth(): java.time.Month
                /**
                 * Gets the indicator of the day-of-month of the transition.
                 * <p>
                 * If the rule defines an exact date then the day is the month of that date.
                 * <p>
                 * If the rule defines a week where the transition might occur, then the day
                 * defines either the start of the end of the transition week.
                 * <p>
                 * If the value is positive, then it represents a normal day-of-month, and is the
                 * earliest possible date that the transition can be.
                 * The date may refer to 29th February which should be treated as 1st March in non-leap years.
                 * <p>
                 * If the value is negative, then it represents the number of days back from the
                 * end of the month where {@code -1} is the last day of the month.
                 * In this case, the day identified is the latest possible date that the transition can be.
                 * @return the day-of-month indicator, from -28 to 31 excluding 0
                 */
                // @ts-ignore
                public getDayOfMonthIndicator(): number /*int*/
                /**
                 * Gets the day-of-week of the transition.
                 * <p>
                 * If the rule defines an exact date then this returns null.
                 * <p>
                 * If the rule defines a week where the cutover might occur, then this method
                 * returns the day-of-week that the month-day will be adjusted to.
                 * If the day is positive then the adjustment is later.
                 * If the day is negative then the adjustment is earlier.
                 * @return the day-of-week that the transition occurs, null if the rule defines an exact date
                 */
                // @ts-ignore
                public getDayOfWeek(): java.time.DayOfWeek
                /**
                 * Gets the local time of day of the transition which must be checked with
                 * {@link #isMidnightEndOfDay()}.
                 * <p>
                 * The time is converted into an instant using the time definition.
                 * @return the local time of day of the transition, not null
                 */
                // @ts-ignore
                public getLocalTime(): java.time.LocalTime
                /**
                 * Is the transition local time midnight at the end of day.
                 * <p>
                 * The transition may be represented as occurring at 24:00.
                 * @return whether a local time of midnight is at the start or end of the day
                 */
                // @ts-ignore
                public isMidnightEndOfDay(): boolean
                /**
                 * Gets the time definition, specifying how to convert the time to an instant.
                 * <p>
                 * The local time can be converted to an instant using the standard offset,
                 * the wall offset or UTC.
                 * @return the time definition, not null
                 */
                // @ts-ignore
                public getTimeDefinition(): java.time.zone.ZoneOffsetTransitionRule.TimeDefinition
                /**
                 * Gets the standard offset in force at the transition.
                 * @return the standard offset, not null
                 */
                // @ts-ignore
                public getStandardOffset(): java.time.ZoneOffset
                /**
                 * Gets the offset before the transition.
                 * @return the offset before, not null
                 */
                // @ts-ignore
                public getOffsetBefore(): java.time.ZoneOffset
                /**
                 * Gets the offset after the transition.
                 * @return the offset after, not null
                 */
                // @ts-ignore
                public getOffsetAfter(): java.time.ZoneOffset
                /**
                 * Creates a transition instance for the specified year.
                 * <p>
                 * Calculations are performed using the ISO-8601 chronology.
                 * @param year  the year to create a transition for, not null
                 * @return the transition instance, not null
                 */
                // @ts-ignore
                public createTransition(year: number /*int*/): java.time.zone.ZoneOffsetTransition
                /**
                 * Checks if this object equals another.
                 * <p>
                 * The entire state of the object is compared.
                 * @param otherRule  the other object to compare to, null returns false
                 * @return true if equal
                 */
                // @ts-ignore
                public equals(otherRule: java.lang.Object | any): boolean
                /**
                 * Returns a suitable hash code.
                 * @return the hash code
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string describing this object.
                 * @return a string for debugging, not null
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

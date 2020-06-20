declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace support {
                /**
                 * Date sequence generator for a
                 * <a href="https://www.manpagez.com/man/5/crontab/">Crontab pattern</a>,
                 * allowing clients to specify a pattern that the sequence matches.
                 * <p>The pattern is a list of six single space-separated fields: representing
                 * second, minute, hour, day, month, weekday. Month and weekday names can be
                 * given as the first three letters of the English names.
                 * <p>Example patterns:
                 * <ul>
                 * <li>"0 0 * * * *" = the top of every hour of every day.</li>
                 * <li>"*&#47;10 * * * * *" = every ten seconds.</li>
                 * <li>"0 0 8-10 * * *" = 8, 9 and 10 o'clock of every day.</li>
                 * <li>"0 0 6,19 * * *" = 6:00 AM and 7:00 PM every day.</li>
                 * <li>"0 0/30 8-10 * * *" = 8:00, 8:30, 9:00, 9:30, 10:00 and 10:30 every day.</li>
                 * <li>"0 0 9-17 * * MON-FRI" = on the hour nine-to-five weekdays</li>
                 * <li>"0 0 0 25 12 ?" = every Christmas Day at midnight</li>
                 * </ul>
                 * @author Dave Syer
                 * @author Juergen Hoeller
                 * @author Ruslan Sibgatullin
                 * @since 3.0
                 * @see CronTrigger
                 */
                // @ts-ignore
                class CronSequenceGenerator extends java.lang.Object {
                    /**
                     * Construct a {@link CronSequenceGenerator} from the pattern provided,
                     * using the default {@link TimeZone}.
                     * @param expression a space-separated list of time fields
                     * @throws IllegalArgumentException if the pattern cannot be parsed
                     * @see java.util.TimeZone#getDefault()
                     */
                    // @ts-ignore
                    constructor(expression: string)
                    /**
                     * Construct a {@link CronSequenceGenerator} from the pattern provided,
                     * using the specified {@link TimeZone}.
                     * @param expression a space-separated list of time fields
                     * @param timeZone the TimeZone to use for generated trigger times
                     * @throws IllegalArgumentException if the pattern cannot be parsed
                     */
                    // @ts-ignore
                    constructor(expression: string, timeZone: java.util.TimeZone)
                    /**
                     * Get the next {@link Date} in the sequence matching the Cron pattern and
                     * after the value provided. The return value will have a whole number of
                     * seconds, and will be after the input value.
                     * @param date a seed value
                     * @return the next value matching the pattern
                     */
                    // @ts-ignore
                    next(date: java.util.Date): java.util.Date
                    /**
                     * Determine whether the specified expression represents a valid cron pattern.
                     * @param expression the expression to evaluate
                     * @return {#code true} if the given expression is a valid cron expression
                     * @since 4.3
                     */
                    // @ts-ignore
                    isValidExpression(expression: string): boolean
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}

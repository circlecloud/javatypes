declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace support {
                /**
                 * {@link Trigger} implementation for cron expressions.
                 * Wraps a {@link CronSequenceGenerator}.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see CronSequenceGenerator
                 */
                // @ts-ignore
                class CronTrigger extends java.lang.Object implements org.springframework.scheduling.Trigger {
                    /**
                     * Build a {@link CronTrigger} from the pattern provided in the default time zone.
                     * @param expression a space-separated list of time fields, following cron
                     *  expression conventions
                     */
                    // @ts-ignore
                    constructor(expression: java.lang.String | string)
                    /**
                     * Build a {@link CronTrigger} from the pattern provided in the given time zone.
                     * @param expression a space-separated list of time fields, following cron
                     *  expression conventions
                     * @param timeZone a time zone in which the trigger times will be generated
                     */
                    // @ts-ignore
                    constructor(expression: java.lang.String | string, timeZone: java.util.TimeZone)
                    /**
                     * Return the cron pattern that this trigger has been built with.
                     */
                    // @ts-ignore
                    public getExpression(): string
                    /**
                     * Determine the next execution time according to the given trigger context.
                     * <p>Next execution times are calculated based on the
                     * {@linkplain TriggerContext#lastCompletionTime completion time} of the
                     * previous execution; therefore, overlapping executions won't occur.
                     */
                    // @ts-ignore
                    public nextExecutionTime(triggerContext: org.springframework.scheduling.TriggerContext): java.util.Date
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}

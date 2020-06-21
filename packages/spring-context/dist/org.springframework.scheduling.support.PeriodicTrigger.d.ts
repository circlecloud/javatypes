declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace support {
                /**
                 * A trigger for periodic task execution. The period may be applied as either
                 * fixed-rate or fixed-delay, and an initial delay value may also be configured.
                 * The default initial delay is 0, and the default behavior is fixed-delay
                 * (i.e. the interval between successive executions is measured from each
                 * <i>completion</i> time). To measure the interval between the
                 * scheduled <i>start</i> time of each execution instead, set the
                 * 'fixedRate' property to {@code true}.
                 * <p>Note that the TaskScheduler interface already defines methods for scheduling
                 * tasks at fixed-rate or with fixed-delay. Both also support an optional value
                 * for the initial delay. Those methods should be used directly whenever
                 * possible. The value of this Trigger implementation is that it can be used
                 * within components that rely on the Trigger abstraction. For example, it may
                 * be convenient to allow periodic triggers, cron-based triggers, and even
                 * custom Trigger implementations to be used interchangeably.
                 * @author Mark Fisher
                 * @since 3.0
                 */
                // @ts-ignore
                class PeriodicTrigger extends java.lang.Object implements org.springframework.scheduling.Trigger {
                    /**
                     * Create a trigger with the given period in milliseconds.
                     */
                    // @ts-ignore
                    constructor(period: number /*long*/)
                    /**
                     * Create a trigger with the given period and time unit. The time unit will
                     * apply not only to the period but also to any 'initialDelay' value, if
                     * configured on this Trigger later via {@link #setInitialDelay(long)}.
                     */
                    // @ts-ignore
                    constructor(period: number /*long*/, timeUnit: java.util.concurrent.TimeUnit)
                    /**
                     * Return this trigger's period.
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    public getPeriod(): number /*long*/
                    /**
                     * Return this trigger's time unit (milliseconds by default).
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    public getTimeUnit(): java.util.concurrent.TimeUnit
                    /**
                     * Specify the delay for the initial execution. It will be evaluated in
                     * terms of this trigger's {@link TimeUnit}. If no time unit was explicitly
                     * provided upon instantiation, the default is milliseconds.
                     */
                    // @ts-ignore
                    public setInitialDelay(initialDelay: number /*long*/): void
                    /**
                     * Return the initial delay, or 0 if none.
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    public getInitialDelay(): number /*long*/
                    /**
                     * Specify whether the periodic interval should be measured between the
                     * scheduled start times rather than between actual completion times.
                     * The latter, "fixed delay" behavior, is the default.
                     */
                    // @ts-ignore
                    public setFixedRate(fixedRate: boolean): void
                    /**
                     * Return whether this trigger uses fixed rate ({@code true}) or
                     * fixed delay ({@code false}) behavior.
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    public isFixedRate(): boolean
                    /**
                     * Returns the time after which a task should run again.
                     */
                    // @ts-ignore
                    public nextExecutionTime(triggerContext: org.springframework.scheduling.TriggerContext): java.util.Date
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}

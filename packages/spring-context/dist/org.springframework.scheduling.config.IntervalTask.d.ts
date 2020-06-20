declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * {@link Task} implementation defining a {@code Runnable} to be executed at a given
                 * millisecond interval which may be treated as fixed-rate or fixed-delay depending on
                 * context.
                 * @author Chris Beams
                 * @since 3.2
                 * @see ScheduledTaskRegistrar#addFixedRateTask(IntervalTask)
                 * @see ScheduledTaskRegistrar#addFixedDelayTask(IntervalTask)
                 */
                // @ts-ignore
                class IntervalTask extends org.springframework.scheduling.config.Task {
                    /**
                     * Create a new {@code IntervalTask}.
                     * @param runnable the underlying task to execute
                     * @param interval how often in milliseconds the task should be executed
                     * @param initialDelay the initial delay before first execution of the task
                     */
                    // @ts-ignore
                    constructor(runnable: java.lang.Runnable, interval: number /*long*/, initialDelay: number /*long*/)
                    /**
                     * Create a new {@code IntervalTask} with no initial delay.
                     * @param runnable the underlying task to execute
                     * @param interval how often in milliseconds the task should be executed
                     */
                    // @ts-ignore
                    constructor(runnable: java.lang.Runnable, interval: number /*long*/)
                    /**
                     * Return how often in milliseconds the task should be executed.
                     */
                    // @ts-ignore
                    getInterval(): long
                    /**
                     * Return the initial delay before first execution of the task.
                     */
                    // @ts-ignore
                    getInitialDelay(): long
                }
            }
        }
    }
}

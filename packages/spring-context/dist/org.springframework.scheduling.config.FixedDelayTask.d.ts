declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * Specialization of {@link IntervalTask} for fixed-delay semantics.
                 * @author Juergen Hoeller
                 * @since 5.0.2
                 * @see org.springframework.scheduling.annotation.Scheduled#fixedDelay()
                 * @see ScheduledTaskRegistrar#addFixedDelayTask(IntervalTask)
                 */
                // @ts-ignore
                class FixedDelayTask extends org.springframework.scheduling.config.IntervalTask {
                    /**
                     * Create a new {@code FixedDelayTask}.
                     * @param runnable the underlying task to execute
                     * @param interval how often in milliseconds the task should be executed
                     * @param initialDelay the initial delay before first execution of the task
                     */
                    // @ts-ignore
                    constructor(runnable: java.lang.Runnable, interval: number /*long*/, initialDelay: number /*long*/)
                }
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * {@link TriggerTask} implementation defining a {@code Runnable} to be executed according
                 * to a {@linkplain org.springframework.scheduling.support.CronSequenceGenerator standard
                 * cron expression}.
                 * @author Chris Beams
                 * @since 3.2
                 * @see org.springframework.scheduling.annotation.Scheduled#cron()
                 * @see ScheduledTaskRegistrar#addCronTask(CronTask)
                 */
                // @ts-ignore
                class CronTask extends org.springframework.scheduling.config.TriggerTask {
                    /**
                     * Create a new {@code CronTask}.
                     * @param runnable the underlying task to execute
                     * @param expression the cron expression defining when the task should be executed
                     */
                    // @ts-ignore
                    constructor(runnable: java.lang.Runnable, expression: string)
                    /**
                     * Create a new {@code CronTask}.
                     * @param runnable the underlying task to execute
                     * @param cronTrigger the cron trigger defining when the task should be executed
                     */
                    // @ts-ignore
                    constructor(runnable: java.lang.Runnable, cronTrigger: org.springframework.scheduling.support.CronTrigger)
                    /**
                     * Return the cron expression defining when the task should be executed.
                     */
                    // @ts-ignore
                    getExpression(): java.lang.String
                }
            }
        }
    }
}

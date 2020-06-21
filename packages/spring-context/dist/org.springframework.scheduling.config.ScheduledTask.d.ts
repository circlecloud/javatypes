declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * A representation of a scheduled task at runtime,
                 * used as a return value for scheduling methods.
                 * @author Juergen Hoeller
                 * @since 4.3
                 * @see ScheduledTaskRegistrar#scheduleCronTask(CronTask)
                 * @see ScheduledTaskRegistrar#scheduleFixedRateTask(FixedRateTask)
                 * @see ScheduledTaskRegistrar#scheduleFixedDelayTask(FixedDelayTask)
                 */
                // @ts-ignore
                class ScheduledTask extends java.lang.Object {
                    /**
                     * Return the underlying task (typically a {@link CronTask},
                     * {@link FixedRateTask} or {@link FixedDelayTask}).
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    public getTask(): org.springframework.scheduling.config.Task
                    /**
                     * Trigger cancellation of this scheduled task.
                     */
                    // @ts-ignore
                    public cancel(): void
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}

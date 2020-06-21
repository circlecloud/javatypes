declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * {@link Task} implementation defining a {@code Runnable} to be executed
                 * according to a given {@link Trigger}.
                 * @author Chris Beams
                 * @since 3.2
                 * @see ScheduledTaskRegistrar#addTriggerTask(TriggerTask)
                 * @see org.springframework.scheduling.TaskScheduler#schedule(Runnable, Trigger)
                 */
                // @ts-ignore
                class TriggerTask extends org.springframework.scheduling.config.Task {
                    /**
                     * Create a new {@link TriggerTask}.
                     * @param runnable the underlying task to execute
                     * @param trigger specifies when the task should be executed
                     */
                    // @ts-ignore
                    constructor(runnable: java.lang.Runnable, trigger: org.springframework.scheduling.Trigger)
                    /**
                     * Return the associated trigger.
                     */
                    // @ts-ignore
                    public getTrigger(): org.springframework.scheduling.Trigger
                }
            }
        }
    }
}

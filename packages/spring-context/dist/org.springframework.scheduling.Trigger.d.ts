declare namespace org {
    namespace springframework {
        namespace scheduling {
            /**
             * Common interface for trigger objects that determine the next execution time
             * of a task that they get associated with.
             * @author Juergen Hoeller
             * @since 3.0
             * @see TaskScheduler#schedule(Runnable, Trigger)
             * @see org.springframework.scheduling.support.CronTrigger
             */
            // @ts-ignore
            interface Trigger {
                /**
                 * Determine the next execution time according to the given trigger context.
                 * @param triggerContext context object encapsulating last execution times
                 *  and last completion time
                 * @return the next execution time as defined by the trigger,
                 *  or {#code null} if the trigger won't fire anymore
                 */
                // @ts-ignore
                nextExecutionTime(triggerContext: org.springframework.scheduling.TriggerContext): java.util.Date
            }
        }
    }
}

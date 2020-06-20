declare namespace org {
    namespace springframework {
        namespace scheduling {
            /**
             * Context object encapsulating last execution times and last completion time
             * of a given task.
             * @author Juergen Hoeller
             * @since 3.0
             */
            // @ts-ignore
            interface TriggerContext {
                /**
                 * Return the last <i>scheduled</i> execution time of the task,
                 * or {@code null} if not scheduled before.
                 */
                // @ts-ignore
                lastScheduledExecutionTime(): java.util.Date
                /**
                 * Return the last <i>actual</i> execution time of the task,
                 * or {@code null} if not scheduled before.
                 */
                // @ts-ignore
                lastActualExecutionTime(): java.util.Date
                /**
                 * Return the last completion time of the task,
                 * or {@code null} if not scheduled before.
                 */
                // @ts-ignore
                lastCompletionTime(): java.util.Date
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace support {
                /**
                 * Simple data holder implementation of the {@link TriggerContext} interface.
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class SimpleTriggerContext extends java.lang.Object implements org.springframework.scheduling.TriggerContext {
                    /**
                     * Create a SimpleTriggerContext with all time values set to {@code null}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a SimpleTriggerContext with the given time values.
                     * @param lastScheduledExecutionTime last <i>scheduled</i> execution time
                     * @param lastActualExecutionTime last <i>actual</i> execution time
                     * @param lastCompletionTime last completion time
                     */
                    // @ts-ignore
                    constructor(lastScheduledExecutionTime: java.util.Date, lastActualExecutionTime: java.util.Date, lastCompletionTime: java.util.Date)
                    /**
                     * Update this holder's state with the latest time values.
                     * @param lastScheduledExecutionTime last <i>scheduled</i> execution time
                     * @param lastActualExecutionTime last <i>actual</i> execution time
                     * @param lastCompletionTime last completion time
                     */
                    // @ts-ignore
                    update(lastScheduledExecutionTime: java.util.Date, lastActualExecutionTime: java.util.Date, lastCompletionTime: java.util.Date): void
                    // @ts-ignore
                    lastScheduledExecutionTime(): java.util.Date
                    // @ts-ignore
                    lastActualExecutionTime(): java.util.Date
                    // @ts-ignore
                    lastCompletionTime(): java.util.Date
                }
            }
        }
    }
}

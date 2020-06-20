declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * Holder class defining a {@code Runnable} to be executed as a task, typically at a
                 * scheduled time or interval. See subclass hierarchy for various scheduling approaches.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.2
                 */
                // @ts-ignore
                class Task extends java.lang.Object {
                    /**
                     * Create a new {@code Task}.
                     * @param runnable the underlying task to execute
                     */
                    // @ts-ignore
                    constructor(runnable: java.lang.Runnable)
                    /**
                     * Return the underlying task.
                     */
                    // @ts-ignore
                    getRunnable(): java.lang.Runnable
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}

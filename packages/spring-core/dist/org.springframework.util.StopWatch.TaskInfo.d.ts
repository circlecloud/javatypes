declare namespace org {
    namespace springframework {
        namespace util {
            namespace StopWatch {
                /**
                 * Nested class to hold data about one task executed within the {@code StopWatch}.
                 */
                // @ts-ignore
                class TaskInfo extends java.lang.Object {
                    /**
                     * Get the name of this task.
                     */
                    // @ts-ignore
                    getTaskName(): java.lang.String
                    /**
                     * Get the time in nanoseconds this task took.
                     * @since 5.2
                     * @see #getTimeMillis()
                     * @see #getTimeSeconds()
                     */
                    // @ts-ignore
                    getTimeNanos(): long
                    /**
                     * Get the time in milliseconds this task took.
                     * @see #getTimeNanos()
                     * @see #getTimeSeconds()
                     */
                    // @ts-ignore
                    getTimeMillis(): long
                    /**
                     * Get the time in seconds this task took.
                     * @see #getTimeMillis()
                     * @see #getTimeNanos()
                     */
                    // @ts-ignore
                    getTimeSeconds(): double
                }
            }
        }
    }
}

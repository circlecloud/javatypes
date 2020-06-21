declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * Exception indicating that the result of a value-producing task,
             * such as a {@link FutureTask}, cannot be retrieved because the task
             * was cancelled.
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            class CancellationException extends java.lang.IllegalStateException {
                /**
                 * Constructs a {@code CancellationException} with no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a {@code CancellationException} with the specified detail
                 * message.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
            }
        }
    }
}

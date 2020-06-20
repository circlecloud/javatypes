declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * Exception thrown when an error or other exception is encountered
             * in the course of completing a result or task.
             * @since 1.8
             * @author Doug Lea
             */
            // @ts-ignore
            class CompletionException extends java.lang.RuntimeException {
                /**
                 * Constructs a {@code CompletionException} with no detail message.
                 * The cause is not initialized, and may subsequently be
                 * initialized by a call to {@link #initCause(Throwable) initCause}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a {@code CompletionException} with the specified detail
                 * message. The cause is not initialized, and may subsequently be
                 * initialized by a call to {@link #initCause(Throwable) initCause}.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Constructs a {@code CompletionException} with the specified detail
                 * message and cause.
                 * @param message the detail message
                 * @param cause the cause (which is saved for later retrieval by the
                 *          {#link #getCause()} method)
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
                /**
                 * Constructs a {@code CompletionException} with the specified cause.
                 * The detail message is set to {@code (cause == null ? null :
                 * cause.toString())} (which typically contains the class and
                 * detail message of {@code cause}).
                 * @param cause the cause (which is saved for later retrieval by the
                 *          {#link #getCause()} method)
                 */
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}

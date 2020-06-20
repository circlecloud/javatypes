declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * Exception thrown by an {@link Executor} when a task cannot be
             * accepted for execution.
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            class RejectedExecutionException extends java.lang.RuntimeException {
                /**
                 * Constructs a {@code RejectedExecutionException} with no detail message.
                 * The cause is not initialized, and may subsequently be
                 * initialized by a call to {@link #initCause(Throwable) initCause}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a {@code RejectedExecutionException} with the
                 * specified detail message. The cause is not initialized, and may
                 * subsequently be initialized by a call to {@link
                 * #initCause(Throwable) initCause}.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Constructs a {@code RejectedExecutionException} with the
                 * specified detail message and cause.
                 * @param message the detail message
                 * @param cause the cause (which is saved for later retrieval by the
                 *          {#link #getCause()} method)
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
                /**
                 * Constructs a {@code RejectedExecutionException} with the
                 * specified cause.  The detail message is set to {@code (cause ==
                 * null ? null : cause.toString())} (which typically contains
                 * the class and detail message of {@code cause}).
                 * @param cause the cause (which is saved for later retrieval by the
                 *          {#link #getCause()} method)
                 */
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}

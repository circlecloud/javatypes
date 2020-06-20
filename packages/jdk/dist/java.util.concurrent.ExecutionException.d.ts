declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * Exception thrown when attempting to retrieve the result of a task
             * that aborted by throwing an exception. This exception can be
             * inspected using the {@link #getCause()} method.
             * @see Future
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            class ExecutionException extends java.lang.Exception {
                /**
                 * Constructs an {@code ExecutionException} with no detail message.
                 * The cause is not initialized, and may subsequently be
                 * initialized by a call to {@link #initCause(Throwable) initCause}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an {@code ExecutionException} with the specified detail
                 * message. The cause is not initialized, and may subsequently be
                 * initialized by a call to {@link #initCause(Throwable) initCause}.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Constructs an {@code ExecutionException} with the specified detail
                 * message and cause.
                 * @param message the detail message
                 * @param cause the cause (which is saved for later retrieval by the
                 *          {#link #getCause()} method)
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
                /**
                 * Constructs an {@code ExecutionException} with the specified cause.
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

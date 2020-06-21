declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace support {
                /**
                 * Utility methods for decorating tasks with error handling.
                 * <p><b>NOTE:</b> This class is intended for internal use by Spring's scheduler
                 * implementations. It is only public so that it may be accessed from impl classes
                 * within other packages. It is <i>not</i> intended for general use.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                abstract class TaskUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * An ErrorHandler strategy that will log the Exception but perform
                     * no further handling. This will suppress the error so that
                     * subsequent executions of the task will not be prevented.
                     */
                    // @ts-ignore
                    public static readonly LOG_AND_SUPPRESS_ERROR_HANDLER: ErrorHandler
                    /**
                     * An ErrorHandler strategy that will log at error level and then
                     * re-throw the Exception. Note: this will typically prevent subsequent
                     * execution of a scheduled task.
                     */
                    // @ts-ignore
                    public static readonly LOG_AND_PROPAGATE_ERROR_HANDLER: ErrorHandler
                    /**
                     * Decorate the task for error handling. If the provided {@link ErrorHandler}
                     * is not {@code null}, it will be used. Otherwise, repeating tasks will have
                     * errors suppressed by default whereas one-shot tasks will have errors
                     * propagated by default since those errors may be expected through the
                     * returned {@link Future}. In both cases, the errors will be logged.
                     */
                    // @ts-ignore
                    public static decorateTaskWithErrorHandler(task: java.lang.Runnable, errorHandler: ErrorHandler, isRepeatingTask: boolean): org.springframework.scheduling.support.DelegatingErrorHandlingRunnable
                    /**
                     * Return the default {@link ErrorHandler} implementation based on the boolean
                     * value indicating whether the task will be repeating or not. For repeating tasks
                     * it will suppress errors, but for one-time tasks it will propagate. In both
                     * cases, the error will be logged.
                     */
                    // @ts-ignore
                    public static getDefaultErrorHandler(isRepeatingTask: boolean): ErrorHandler
                }
            }
        }
    }
}

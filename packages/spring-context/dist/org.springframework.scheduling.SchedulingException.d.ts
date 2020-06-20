declare namespace org {
    namespace springframework {
        namespace scheduling {
            /**
             * General exception to be thrown on scheduling failures,
             * such as the scheduler already having shut down.
             * Unchecked since scheduling failures are usually fatal.
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            class SchedulingException extends NestedRuntimeException {
                /**
                 * Constructor for SchedulingException.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Constructor for SchedulingException.
                 * @param msg the detail message
                 * @param cause the root cause (usually from using a underlying
                 *  scheduling API such as Quartz)
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}

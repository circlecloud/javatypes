declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Exception thrown during application context initialization.
             * @author Rod Johnson
             */
            // @ts-ignore
            class ApplicationContextException extends FatalBeanException {
                /**
                 * Create a new {@code ApplicationContextException}
                 * with the specified detail message and no root cause.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Create a new {@code ApplicationContextException}
                 * with the specified detail message and the given root cause.
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}

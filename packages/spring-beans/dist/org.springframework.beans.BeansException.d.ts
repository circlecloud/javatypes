declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Abstract superclass for all exceptions thrown in the beans package
             * and subpackages.
             * <p>Note that this is a runtime (unchecked) exception. Beans exceptions
             * are usually fatal; there is no reason for them to be checked.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            class BeansException extends NestedRuntimeException {
                /**
                 * Create a new BeansException with the specified message.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Create a new BeansException with the specified message
                 * and root cause.
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}

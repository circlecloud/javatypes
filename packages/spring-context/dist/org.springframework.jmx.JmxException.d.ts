declare namespace org {
    namespace springframework {
        namespace jmx {
            /**
             * General base exception to be thrown on JMX errors.
             * Unchecked since JMX failures are usually fatal.
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            class JmxException extends NestedRuntimeException {
                /**
                 * Constructor for JmxException.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Constructor for JmxException.
                 * @param msg the detail message
                 * @param cause the root cause (usually a raw JMX API exception)
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}

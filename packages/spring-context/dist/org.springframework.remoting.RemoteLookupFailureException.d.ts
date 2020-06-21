declare namespace org {
    namespace springframework {
        namespace remoting {
            /**
             * RemoteAccessException subclass to be thrown in case of a lookup failure,
             * typically if the lookup happens on demand for each method invocation.
             * @author Juergen Hoeller
             * @since 1.1
             */
            // @ts-ignore
            class RemoteLookupFailureException extends org.springframework.remoting.RemoteAccessException {
                /**
                 * Constructor for RemoteLookupFailureException.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                /**
                 * Constructor for RemoteLookupFailureException.
                 * @param msg message
                 * @param cause the root cause from the remoting API in use
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}

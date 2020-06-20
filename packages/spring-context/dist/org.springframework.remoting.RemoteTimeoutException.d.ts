declare namespace org {
    namespace springframework {
        namespace remoting {
            /**
             * RemoteAccessException subclass to be thrown when the execution
             * of the target method did not complete before a configurable
             * timeout, for example when a reply message was not received.
             * @author Stephane Nicoll
             * @since 4.2
             */
            // @ts-ignore
            class RemoteTimeoutException extends org.springframework.remoting.RemoteAccessException {
                /**
                 * Constructor for RemoteTimeoutException.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Constructor for RemoteTimeoutException.
                 * @param msg the detail message
                 * @param cause the root cause from the remoting API in use
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}

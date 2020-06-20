declare namespace org {
    namespace springframework {
        namespace remoting {
            /**
             * RemoteAccessException subclass to be thrown when no connection
             * could be established with a remote service.
             * @author Juergen Hoeller
             * @since 1.1
             */
            // @ts-ignore
            class RemoteConnectFailureException extends org.springframework.remoting.RemoteAccessException {
                /**
                 * Constructor for RemoteConnectFailureException.
                 * @param msg the detail message
                 * @param cause the root cause from the remoting API in use
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace remoting {
            /**
             * RemoteAccessException subclass to be thrown in case of a failure
             * within the client-side proxy for a remote service, for example
             * when a method was not found on the underlying RMI stub.
             * @author Juergen Hoeller
             * @since 1.2.8
             * @see RemoteInvocationFailureException
             */
            // @ts-ignore
            class RemoteProxyFailureException extends org.springframework.remoting.RemoteAccessException {
                /**
                 * Constructor for RemoteProxyFailureException.
                 * @param msg the detail message
                 * @param cause the root cause from the remoting API in use
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}

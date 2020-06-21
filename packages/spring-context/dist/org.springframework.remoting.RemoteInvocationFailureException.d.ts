declare namespace org {
    namespace springframework {
        namespace remoting {
            /**
             * RemoteAccessException subclass to be thrown when the execution
             * of the target method failed on the server side, for example
             * when a method was not found on the target object.
             * @author Juergen Hoeller
             * @since 2.5
             * @see RemoteProxyFailureException
             */
            // @ts-ignore
            class RemoteInvocationFailureException extends org.springframework.remoting.RemoteAccessException {
                /**
                 * Constructor for RemoteInvocationFailureException.
                 * @param msg the detail message
                 * @param cause the root cause from the remoting API in use
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}

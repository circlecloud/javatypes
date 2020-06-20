declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * Exception thrown as the result of a remote {@link MBeanServer}
             * method invocation when an <code>Error</code> is thrown while
             * processing the invocation in the remote MBean server.  A
             * <code>JMXServerErrorException</code> instance contains the original
             * <code>Error</code> that occurred as its cause.
             * @see java.rmi.ServerError
             * @since 1.5
             */
            // @ts-ignore
            class JMXServerErrorException extends java.io.IOException {
                /**
                 * Constructs a <code>JMXServerErrorException</code> with the specified
                 * detail message and nested error.
                 * @param s the detail message.
                 * @param err the nested error.  An instance of this class can be
                 *  constructed where this parameter is null, but the standard
                 *  connectors will never do so.
                 */
                // @ts-ignore
                constructor(s: string, err: java.lang.Error)
                // @ts-ignore
                getCause(): java.lang.Throwable
            }
        }
    }
}

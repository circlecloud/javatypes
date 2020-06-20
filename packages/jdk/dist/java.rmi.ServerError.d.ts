declare namespace java {
    namespace rmi {
        /**
         * A <code>ServerError</code> is thrown as a result of a remote method
         * invocation when an <code>Error</code> is thrown while processing
         * the invocation on the server, either while unmarshalling the arguments,
         * executing the remote method itself, or marshalling the return value.
         * A <code>ServerError</code> instance contains the original
         * <code>Error</code> that occurred as its cause.
         * @author Ann Wollrath
         * @since JDK1.1
         */
        // @ts-ignore
        class ServerError extends java.rmi.RemoteException {
            /**
             * Constructs a <code>ServerError</code> with the specified
             * detail message and nested error.
             * @param s the detail message
             * @param err the nested error
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: string, err: java.lang.Error)
        }
    }
}

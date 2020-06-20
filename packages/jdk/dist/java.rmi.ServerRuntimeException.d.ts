declare namespace java {
    namespace rmi {
        /**
         * From a server executing on JDK&nbsp;1.1, a
         * <code>ServerRuntimeException</code> is thrown as a result of a
         * remote method invocation when a <code>RuntimeException</code> is
         * thrown while processing the invocation on the server, either while
         * unmarshalling the arguments, executing the remote method itself, or
         * marshalling the return value.
         * A <code>ServerRuntimeException</code> instance contains the original
         * <code>RuntimeException</code> that occurred as its cause.
         * <p>A <code>ServerRuntimeException</code> is not thrown from servers
         * executing on the Java 2 platform v1.2 or later versions.
         * @author Ann Wollrath
         * @since JDK1.1
         * @deprecated no replacement
         */
        // @ts-ignore
        class ServerRuntimeException extends java.rmi.RemoteException {
            /**
             * Constructs a <code>ServerRuntimeException</code> with the specified
             * detail message and nested exception.
             * @param s the detail message
             * @param ex the nested exception
             * @deprecated no replacement
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: string, ex: java.lang.Exception)
        }
    }
}

declare namespace java {
    namespace rmi {
        /**
         * A <code>ConnectIOException</code> is thrown if an
         * <code>IOException</code> occurs while making a connection
         * to the remote host for a remote method call.
         * @author Ann Wollrath
         * @since JDK1.1
         */
        // @ts-ignore
        class ConnectIOException extends java.rmi.RemoteException {
            /**
             * Constructs a <code>ConnectIOException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs a <code>ConnectIOException</code> with the specified
             * detail message and nested exception.
             * @param s the detail message
             * @param ex the nested exception
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: string, ex: java.lang.Exception)
        }
    }
}

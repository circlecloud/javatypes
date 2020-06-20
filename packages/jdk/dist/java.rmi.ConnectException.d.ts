declare namespace java {
    namespace rmi {
        /**
         * A <code>ConnectException</code> is thrown if a connection is refused
         * to the remote host for a remote method call.
         * @author Ann Wollrath
         * @since JDK1.1
         */
        // @ts-ignore
        class ConnectException extends java.rmi.RemoteException {
            /**
             * Constructs a <code>ConnectException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs a <code>ConnectException</code> with the specified
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

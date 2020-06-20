declare namespace java {
    namespace rmi {
        /**
         * An <code>UnknownHostException</code> is thrown if a
         * <code>java.net.UnknownHostException</code> occurs while creating
         * a connection to the remote host for a remote method call.
         * @since JDK1.1
         */
        // @ts-ignore
        class UnknownHostException extends java.rmi.RemoteException {
            /**
             * Constructs an <code>UnknownHostException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs an <code>UnknownHostException</code> with the specified
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

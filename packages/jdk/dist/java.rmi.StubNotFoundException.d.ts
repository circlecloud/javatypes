declare namespace java {
    namespace rmi {
        /**
         * A <code>StubNotFoundException</code> is thrown if a valid stub class
         * could not be found for a remote object when it is exported.
         * A <code>StubNotFoundException</code> may also be
         * thrown when an activatable object is registered via the
         * <code>java.rmi.activation.Activatable.register</code> method.
         * @author Roger Riggs
         * @since JDK1.1
         * @see java.rmi.server.UnicastRemoteObject
         * @see java.rmi.activation.Activatable
         */
        // @ts-ignore
        class StubNotFoundException extends java.rmi.RemoteException {
            /**
             * Constructs a <code>StubNotFoundException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Constructs a <code>StubNotFoundException</code> with the specified
             * detail message and nested exception.
             * @param s the detail message
             * @param ex the nested exception
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: java.lang.String | string, ex: java.lang.Exception)
        }
    }
}

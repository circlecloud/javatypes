declare namespace java {
    namespace rmi {
        /**
         * An <code>UnexpectedException</code> is thrown if the client of a
         * remote method call receives, as a result of the call, a checked
         * exception that is not among the checked exception types declared in the
         * <code>throws</code> clause of the method in the remote interface.
         * @author Roger Riggs
         * @since JDK1.1
         */
        // @ts-ignore
        class UnexpectedException extends java.rmi.RemoteException {
            /**
             * Constructs an <code>UnexpectedException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Constructs a <code>UnexpectedException</code> with the specified
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

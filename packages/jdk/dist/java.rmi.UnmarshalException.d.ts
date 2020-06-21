declare namespace java {
    namespace rmi {
        /**
         * An <code>UnmarshalException</code> can be thrown while unmarshalling the
         * parameters or results of a remote method call if any of the following
         * conditions occur:
         * <ul>
         * <li> if an exception occurs while unmarshalling the call header
         * <li> if the protocol for the return value is invalid
         * <li> if a <code>java.io.IOException</code> occurs unmarshalling
         * parameters (on the server side) or the return value (on the client side).
         * <li> if a <code>java.lang.ClassNotFoundException</code> occurs during
         * unmarshalling parameters or return values
         * <li> if no skeleton can be loaded on the server-side; note that skeletons
         * are required in the 1.1 stub protocol, but not in the 1.2 stub protocol.
         * <li> if the method hash is invalid (i.e., missing method).
         * <li> if there is a failure to create a remote reference object for
         * a remote object's stub when it is unmarshalled.
         * </ul>
         * @author Ann Wollrath
         * @since JDK1.1
         */
        // @ts-ignore
        class UnmarshalException extends java.rmi.RemoteException {
            /**
             * Constructs an <code>UnmarshalException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Constructs an <code>UnmarshalException</code> with the specified
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

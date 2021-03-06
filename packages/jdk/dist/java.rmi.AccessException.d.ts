declare namespace java {
    namespace rmi {
        /**
         * An <code>AccessException</code> is thrown by certain methods of the
         * <code>java.rmi.Naming</code> class (specifically <code>bind</code>,
         * <code>rebind</code>, and <code>unbind</code>) and methods of the
         * <code>java.rmi.activation.ActivationSystem</code> interface to
         * indicate that the caller does not have permission to perform the action
         * requested by the method call.  If the method was invoked from a non-local
         * host, then an <code>AccessException</code> is thrown.
         * @author Ann Wollrath
         * @author Roger Riggs
         * @since JDK1.1
         * @see java.rmi.Naming
         * @see java.rmi.activation.ActivationSystem
         */
        // @ts-ignore
        class AccessException extends java.rmi.RemoteException {
            /**
             * Constructs an <code>AccessException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Constructs an <code>AccessException</code> with the specified
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

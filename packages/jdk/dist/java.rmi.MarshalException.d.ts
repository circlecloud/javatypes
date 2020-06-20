declare namespace java {
    namespace rmi {
        /**
         * A <code>MarshalException</code> is thrown if a
         * <code>java.io.IOException</code> occurs while marshalling the remote call
         * header, arguments or return value for a remote method call.  A
         * <code>MarshalException</code> is also thrown if the receiver does not
         * support the protocol version of the sender.
         * <p>If a <code>MarshalException</code> occurs during a remote method call,
         * the call may or may not have reached the server.  If the call did reach the
         * server, parameters may have been deserialized.  A call may not be
         * retransmitted after a <code>MarshalException</code> and reliably preserve
         * "at most once" call semantics.
         * @author Ann Wollrath
         * @since JDK1.1
         */
        // @ts-ignore
        class MarshalException extends java.rmi.RemoteException {
            /**
             * Constructs a <code>MarshalException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs a <code>MarshalException</code> with the specified
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

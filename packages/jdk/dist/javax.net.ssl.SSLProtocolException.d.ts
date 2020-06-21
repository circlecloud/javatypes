declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Reports an error in the operation of the SSL protocol.  Normally
             * this indicates a flaw in one of the protocol implementations.
             * @since 1.4
             * @author David Brownell
             */
            // @ts-ignore
            class SSLProtocolException extends javax.net.ssl.SSLException {
                /**
                 * Constructs an exception reporting an SSL protocol error
                 * detected by an SSL subsystem.
                 * @param reason describes the problem.
                 */
                // @ts-ignore
                constructor(reason: java.lang.String | string)
            }
        }
    }
}

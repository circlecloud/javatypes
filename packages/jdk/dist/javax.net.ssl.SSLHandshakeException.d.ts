declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Indicates that the client and server could not negotiate the
             * desired level of security.  The connection is no longer usable.
             * @since 1.4
             * @author David Brownell
             */
            // @ts-ignore
            class SSLHandshakeException extends javax.net.ssl.SSLException {
                /**
                 * Constructs an exception reporting an error found by
                 * an SSL subsystem during handshaking.
                 * @param reason describes the problem.
                 */
                // @ts-ignore
                constructor(reason: string)
            }
        }
    }
}

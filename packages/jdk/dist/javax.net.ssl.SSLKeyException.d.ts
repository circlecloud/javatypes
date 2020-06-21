declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Reports a bad SSL key.  Normally, this indicates misconfiguration
             * of the server or client SSL certificate and private key.
             * @since 1.4
             * @author David Brownell
             */
            // @ts-ignore
            class SSLKeyException extends javax.net.ssl.SSLException {
                /**
                 * Constructs an exception reporting a key management error
                 * found by an SSL subsystem.
                 * @param reason describes the problem.
                 */
                // @ts-ignore
                constructor(reason: java.lang.String | string)
            }
        }
    }
}

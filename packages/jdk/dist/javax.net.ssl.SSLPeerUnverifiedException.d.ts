declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Indicates that the peer's identity has not been verified.
             * <P>
             * When the peer was not able to
             * identify itself (for example; no certificate, the particular
             * cipher suite being used does not support authentication, or no
             * peer authentication was established during SSL handshaking) this
             * exception is thrown.
             * @since 1.4
             * @author David Brownell
             */
            // @ts-ignore
            class SSLPeerUnverifiedException extends javax.net.ssl.SSLException {
                /**
                 * Constructs an exception reporting that the SSL peer's
                 * identity has not been verified.
                 * @param reason describes the problem.
                 */
                // @ts-ignore
                constructor(reason: string)
            }
        }
    }
}

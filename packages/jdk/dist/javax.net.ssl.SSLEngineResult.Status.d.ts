declare namespace javax {
    namespace net {
        namespace ssl {
            namespace SSLEngineResult {
                /**
                 * An <code>SSLEngineResult</code> enum describing the overall result
                 * of the <code>SSLEngine</code> operation.
                 * The <code>Status</code> value does not reflect the
                 * state of a <code>SSLEngine</code> handshake currently
                 * in progress.  The <code>SSLEngineResult's HandshakeStatus</code>
                 * should be consulted for that information.
                 * @author Brad R. Wetmore
                 * @since 1.5
                 */
                // @ts-ignore
                class Status extends java.lang.Enum<javax.net.ssl.SSLEngineResult.Status> {
                    // @ts-ignore
                    values(): javax.net.ssl.SSLEngineResult.Status[]
                    // @ts-ignore
                    valueOf(name: string): javax.net.ssl.SSLEngineResult.Status
                }
            }
        }
    }
}

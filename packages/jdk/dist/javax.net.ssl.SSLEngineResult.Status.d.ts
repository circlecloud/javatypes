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
                    /**
                     * The <code>SSLEngine</code> was not able to unwrap the
                     * incoming data because there were not enough source bytes
                     * available to make a complete packet.
                     * <P>
                     * Repeat the call once more bytes are available.
                     */
                    // @ts-ignore
                    public static readonly BUFFER_UNDERFLOW: javax.net.ssl.SSLEngineResult.Status
                    /**
                     * The <code>SSLEngine</code> was not able to process the
                     * operation because there are not enough bytes available in the
                     * destination buffer to hold the result.
                     * <P>
                     * Repeat the call once more bytes are available.
                     * @see SSLSession#getPacketBufferSize()
                     * @see SSLSession#getApplicationBufferSize()
                     */
                    // @ts-ignore
                    public static readonly BUFFER_OVERFLOW: javax.net.ssl.SSLEngineResult.Status
                    /**
                     * The <code>SSLEngine</code> completed the operation, and
                     * is available to process similar calls.
                     */
                    // @ts-ignore
                    public static readonly OK: javax.net.ssl.SSLEngineResult.Status
                    /**
                     * The operation just closed this side of the
                     * <code>SSLEngine</code>, or the operation
                     * could not be completed because it was already closed.
                     */
                    // @ts-ignore
                    public static readonly CLOSED: javax.net.ssl.SSLEngineResult.Status
                    // @ts-ignore
                    public static values(): javax.net.ssl.SSLEngineResult.Status[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): javax.net.ssl.SSLEngineResult.Status
                }
            }
        }
    }
}

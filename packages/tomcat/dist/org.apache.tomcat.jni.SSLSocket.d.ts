declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * SSL Socket
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class SSLSocket extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Attach APR socket on a SSL connection.
                     * @param ctx SSLContext to use.
                     * @param sock APR Socket that already did physical connect or accept.
                     * @return APR_STATUS code.
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static attach(ctx: number /*long*/, sock: number /*long*/): number /*int*/
                    /**
                     * Do a SSL handshake.
                     * @param thesocket The socket to use
                     * @return the handshake status
                     */
                    // @ts-ignore
                    public static handshake(thesocket: number /*long*/): number /*int*/
                    /**
                     * Do a SSL renegotiation.
                     * SSL supports per-directory re-configuration of SSL parameters.
                     * This is implemented by performing an SSL renegotiation of the
                     * re-configured parameters after the request is read, but before the
                     * response is sent. In more detail: the renegotiation happens after the
                     * request line and MIME headers were read, but _before_ the attached
                     * request body is read. The reason simply is that in the HTTP protocol
                     * usually there is no acknowledgment step between the headers and the
                     * body (there is the 100-continue feature and the chunking facility
                     * only), so Apache has no API hook for this step.
                     * @param thesocket The socket to use
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static renegotiate(thesocket: number /*long*/): number /*int*/
                    /**
                     * Set Type of Client Certificate verification and Maximum depth of CA
                     * Certificates in Client Certificate verification.
                     * <br>
                     * This is used to change the verification level for a connection prior to
                     * starting a re-negotiation.
                     * <br>
                     * The following levels are available for level:
                     * <PRE>
                     * SSL_CVERIFY_NONE           - No client Certificate is required at all
                     * SSL_CVERIFY_OPTIONAL       - The client may present a valid Certificate
                     * SSL_CVERIFY_REQUIRE        - The client has to present a valid
                     * Certificate
                     * SSL_CVERIFY_OPTIONAL_NO_CA - The client may present a valid Certificate
                     * but it need not to be (successfully)
                     * verifiable
                     * </PRE>
                     * <br>
                     * @param sock  The socket to change.
                     * @param level Type of Client Certificate verification.
                     * @param depth Maximum number of certificates to permit in chain from
                     *               client to trusted CA. Use a value of 0 or less to leave the
                     *               current value unchanged
                     */
                    // @ts-ignore
                    public static setVerify(sock: number /*long*/, level: number /*int*/, depth: number /*int*/): void
                    /**
                     * Return SSL Info parameter as byte array.
                     * @param sock The socket to read the data from.
                     * @param id Parameter id.
                     * @return Byte array containing info id value.
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static getInfoB(sock: number /*long*/, id: number /*int*/): number /*byte*/[]
                    /**
                     * Return SSL Info parameter as String.
                     * @param sock The socket to read the data from.
                     * @param id Parameter id.
                     * @return String containing info id value.
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static getInfoS(sock: number /*long*/, id: number /*int*/): string
                    /**
                     * Return SSL Info parameter as integer.
                     * @param sock The socket to read the data from.
                     * @param id Parameter id.
                     * @return Integer containing info id value or -1 on error.
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static getInfoI(sock: number /*long*/, id: number /*int*/): number /*int*/
                    /**
                     * Obtain the name of the protocol negotiated via ALPN. Only valid after the
                     * TLS handshake has completed.
                     * @param sock                  Socket
                     * @param negotiatedProtocol    Byte array in which to store agreed protocol
                     * @return Length of agreed protocol. Zero means no protocol agreed.
                     */
                    // @ts-ignore
                    public static getALPN(sock: number /*long*/, negotiatedProtocol: number /*byte*/[]): number /*int*/
                }
            }
        }
    }
}

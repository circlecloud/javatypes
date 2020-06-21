declare namespace org {
    namespace apache {
        namespace coyote {
            // @ts-ignore
            interface UpgradeProtocol {
                /**
                 * @param isSSLEnabled Is this for a connector that is configured to support
                 *                      TLS. Some protocols (e.g. HTTP/2) only support HTTP
                 *                      upgrade over non-secure connections.
                 * @return The name that clients will use to request an upgrade to this
                 *          protocol via an HTTP/1.1 upgrade request or <code>null</code> if
                 *          upgrade via an HTTP/1.1 upgrade request is not supported.
                 */
                // @ts-ignore
                getHttpUpgradeName(isSSLEnabled: boolean): string
                /**
                 * @return The byte sequence as listed in the IANA registry for this
                 *          protocol or <code>null</code> if upgrade via ALPN is not
                 *          supported.
                 */
                // @ts-ignore
                getAlpnIdentifier(): number /*byte*/[]
                /**
                 * @return The name of the protocol as listed in the IANA registry if and
                 *          only if {#link #getAlpnIdentifier()} returns the UTF-8 encoding
                 *          of this name. If {@link #getAlpnIdentifier()} returns some other
                 *          byte sequence, then this method returns the empty string. If
                 *          upgrade via ALPN is not supported then <code>null</code> is
                 *          returned.
                 */
                // @ts-ignore
                getAlpnName(): string
                /**
                 * @param socketWrapper The socketWrapper for the connection that requires
                 *                       a processor
                 * @param adapter The Adapter instance that provides access to the standard
                 *                 Engine/Host/Context/Wrapper processing chain
                 * @return A processor instance for processing a connection using this
                 *          protocol.
                 */
                // @ts-ignore
                getProcessor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>, adapter: org.apache.coyote.Adapter): org.apache.coyote.Processor
                /**
                 * @param socketWrapper The socket
                 * @param adapter The Adapter to use to configure the new upgrade handler
                 * @param request A copy (may be incomplete) of the request that triggered
                 *                 the upgrade
                 * @return An instance of the HTTP upgrade handler for this protocol
                 */
                // @ts-ignore
                getInternalUpgradeHandler(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>, adapter: org.apache.coyote.Adapter, request: org.apache.coyote.Request): org.apache.coyote.http11.upgrade.InternalHttpUpgradeHandler
                /**
                 * Allows the implementation to examine the request and accept or reject it
                 * based on what it finds.
                 * @param request The request that included an upgrade header for this
                 *                 protocol
                 * @return <code>true</code> if the request is accepted, otherwise
                 *          <code>false</code>
                 */
                // @ts-ignore
                accept(request: org.apache.coyote.Request): boolean
            }
        }
    }
}

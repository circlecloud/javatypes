declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Provides a common interface for {@link SSLImplementation}s to create the
                     * necessary JSSE implementation objects for TLS connections created via the
                     * JSSE API.
                     */
                    // @ts-ignore
                    interface SSLUtil {
                        // @ts-ignore
                        createSSLContext(negotiableProtocols: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): org.apache.tomcat.util.net.SSLContext
                        // @ts-ignore
                        getKeyManagers(): javax.net.ssl.KeyManager[]
                        // @ts-ignore
                        getTrustManagers(): javax.net.ssl.TrustManager[]
                        // @ts-ignore
                        configureSessionContext(sslSessionContext: javax.net.ssl.SSLSessionContext): void
                        /**
                         * The set of enabled protocols is the intersection of the implemented
                         * protocols and the configured protocols. If no protocols are explicitly
                         * configured, then all of the implemented protocols will be included in the
                         * returned array.
                         * @return The protocols currently enabled and available for clients to
                         *          select from for the associated connection
                         * @throws IllegalArgumentException  If there is no intersection between the
                         *          implemented and configured protocols
                         */
                        // @ts-ignore
                        getEnabledProtocols(): string[]
                        /**
                         * The set of enabled ciphers is the intersection of the implemented ciphers
                         * and the configured ciphers. If no ciphers are explicitly configured, then
                         * the default ciphers will be included in the returned array.
                         * <p>
                         * The ciphers used during the TLS handshake may be further restricted by
                         * the {@link #getEnabledProtocols()} and the certificates.
                         * @return The ciphers currently enabled and available for clients to select
                         *          from for the associated connection
                         * @throws IllegalArgumentException  If there is no intersection between the
                         *          implemented and configured ciphers
                         */
                        // @ts-ignore
                        getEnabledCiphers(): string[]
                    }
                }
            }
        }
    }
}

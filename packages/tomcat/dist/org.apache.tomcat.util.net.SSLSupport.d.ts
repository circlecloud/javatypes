declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Defines an interface to interact with SSL sessions.
                     */
                    // @ts-ignore
                    interface SSLSupport {
                        /**
                         * The Request attribute key for the cipher suite.
                         */
                        // @ts-ignore
                        readonly CIPHER_SUITE_KEY: java.lang.String | string
                        /**
                         * The Request attribute key for the key size.
                         */
                        // @ts-ignore
                        readonly KEY_SIZE_KEY: java.lang.String | string
                        /**
                         * The Request attribute key for the client certificate chain.
                         */
                        // @ts-ignore
                        readonly CERTIFICATE_KEY: java.lang.String | string
                        /**
                         * The Request attribute key for the session id.
                         * This one is a Tomcat extension to the Servlet spec.
                         */
                        // @ts-ignore
                        readonly SESSION_ID_KEY: java.lang.String | string
                        /**
                         * The request attribute key for the session manager.
                         * This one is a Tomcat extension to the Servlet spec.
                         */
                        // @ts-ignore
                        readonly SESSION_MGR: java.lang.String | string
                        /**
                         * The request attribute key under which the String indicating the protocol
                         * that created the SSL socket is recorded - e.g. TLSv1 or TLSv1.2 etc.
                         */
                        // @ts-ignore
                        readonly PROTOCOL_VERSION_KEY: java.lang.String | string
                        /**
                         * The cipher suite being used on this connection.
                         * @return The name of the cipher suite as returned by the SSL/TLS
                         *         implementation
                         * @throws IOException If an error occurs trying to obtain the cipher suite
                         */
                        // @ts-ignore
                        getCipherSuite(): string
                        /**
                         * The client certificate chain (if any).
                         * @return The certificate chain presented by the client with the peer's
                         *          certificate first, followed by those of any certificate
                         *          authorities
                         * @throws IOException If an error occurs trying to obtain the certificate
                         *                      chain
                         */
                        // @ts-ignore
                        getPeerCertificateChain(): java.security.cert.X509Certificate[]
                        /**
                         * Get the keysize.
                         * What we're supposed to put here is ill-defined by the
                         * Servlet spec (S 4.7 again). There are at least 4 potential
                         * values that might go here:
                         * (a) The size of the encryption key
                         * (b) The size of the MAC key
                         * (c) The size of the key-exchange key
                         * (d) The size of the signature key used by the server
                         * Unfortunately, all of these values are nonsensical.
                         * @return The effective key size for the current cipher suite
                         * @throws IOException If an error occurs trying to obtain the key size
                         */
                        // @ts-ignore
                        getKeySize(): number
                        /**
                         * The current session Id.
                         * @return The current SSL/TLS session ID
                         * @throws IOException If an error occurs trying to obtain the session ID
                         */
                        // @ts-ignore
                        getSessionId(): string
                        /**
                         * @return the protocol String indicating how the SSL socket was created
                         *   e.g. TLSv1 or TLSv1.2 etc.
                         * @throws IOException If an error occurs trying to obtain the protocol
                         *    information from the socket
                         */
                        // @ts-ignore
                        getProtocol(): string
                    }
                }
            }
        }
    }
}

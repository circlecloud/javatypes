declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Extensions to the <code>X509TrustManager</code> interface to support
             * SSL/TLS connection sensitive trust management.
             * <p>
             * To prevent man-in-the-middle attacks, hostname checks can be done
             * to verify that the hostname in an end-entity certificate matches the
             * targeted hostname.  TLS does not require such checks, but some protocols
             * over TLS (such as HTTPS) do.  In earlier versions of the JDK, the
             * certificate chain checks were done at the SSL/TLS layer, and the hostname
             * verification checks were done at the layer over TLS.  This class allows
             * for the checking to be done during a single call to this class.
             * <p>
             * RFC 2830 defines the server identification specification for the "LDAPS"
             * algorithm. RFC 2818 defines both the server identification and the
             * client identification specification for the "HTTPS" algorithm.
             * @see X509TrustManager
             * @see HostnameVerifier
             * @since 1.7
             */
            // @ts-ignore
            class X509ExtendedTrustManager extends java.lang.Object implements javax.net.ssl.X509TrustManager {
                // @ts-ignore
                constructor()
                /**
                 * Given the partial or complete certificate chain provided by the
                 * peer, build and validate the certificate path based on the
                 * authentication type and ssl parameters.
                 * <p>
                 * The authentication type is determined by the actual certificate
                 * used. For instance, if RSAPublicKey is used, the authType
                 * should be "RSA". Checking is case-sensitive.
                 * <p>
                 * If the <code>socket</code> parameter is an instance of
                 * {@link javax.net.ssl.SSLSocket}, and the endpoint identification
                 * algorithm of the <code>SSLParameters</code> is non-empty, to prevent
                 * man-in-the-middle attacks, the address that the <code>socket</code>
                 * connected to should be checked against the peer's identity presented
                 * in the end-entity X509 certificate, as specified in the endpoint
                 * identification algorithm.
                 * <p>
                 * If the <code>socket</code> parameter is an instance of
                 * {@link javax.net.ssl.SSLSocket}, and the algorithm constraints of the
                 * <code>SSLParameters</code> is non-null, for every certificate in the
                 * certification path, fields such as subject public key, the signature
                 * algorithm, key usage, extended key usage, etc. need to conform to the
                 * algorithm constraints in place on this socket.
                 * @param chain the peer certificate chain
                 * @param authType the key exchange algorithm used
                 * @param socket the socket used for this connection. This parameter
                 *         can be null, which indicates that implementations need not check
                 *         the ssl parameters
                 * @throws IllegalArgumentException if null or zero-length array is passed
                 *         in for the <code>chain</code> parameter or if null or zero-length
                 *         string is passed in for the <code>authType</code> parameter
                 * @throws CertificateException if the certificate chain is not trusted
                 *         by this TrustManager
                 * @see SSLParameters#getEndpointIdentificationAlgorithm
                 * @see SSLParameters#setEndpointIdentificationAlgorithm(String)
                 * @see SSLParameters#getAlgorithmConstraints
                 * @see SSLParameters#setAlgorithmConstraints(AlgorithmConstraints)
                 */
                // @ts-ignore
                abstract checkClientTrusted(chain: java.security.cert.X509Certificate[], authType: string, socket: java.net.Socket): void
                /**
                 * Given the partial or complete certificate chain provided by the
                 * peer, build and validate the certificate path based on the
                 * authentication type and ssl parameters.
                 * <p>
                 * The authentication type is the key exchange algorithm portion
                 * of the cipher suites represented as a String, such as "RSA",
                 * "DHE_DSS". Note: for some exportable cipher suites, the key
                 * exchange algorithm is determined at run time during the
                 * handshake. For instance, for TLS_RSA_EXPORT_WITH_RC4_40_MD5,
                 * the authType should be RSA_EXPORT when an ephemeral RSA key is
                 * used for the key exchange, and RSA when the key from the server
                 * certificate is used. Checking is case-sensitive.
                 * <p>
                 * If the <code>socket</code> parameter is an instance of
                 * {@link javax.net.ssl.SSLSocket}, and the endpoint identification
                 * algorithm of the <code>SSLParameters</code> is non-empty, to prevent
                 * man-in-the-middle attacks, the address that the <code>socket</code>
                 * connected to should be checked against the peer's identity presented
                 * in the end-entity X509 certificate, as specified in the endpoint
                 * identification algorithm.
                 * <p>
                 * If the <code>socket</code> parameter is an instance of
                 * {@link javax.net.ssl.SSLSocket}, and the algorithm constraints of the
                 * <code>SSLParameters</code> is non-null, for every certificate in the
                 * certification path, fields such as subject public key, the signature
                 * algorithm, key usage, extended key usage, etc. need to conform to the
                 * algorithm constraints in place on this socket.
                 * @param chain the peer certificate chain
                 * @param authType the key exchange algorithm used
                 * @param socket the socket used for this connection. This parameter
                 *         can be null, which indicates that implementations need not check
                 *         the ssl parameters
                 * @throws IllegalArgumentException if null or zero-length array is passed
                 *         in for the <code>chain</code> parameter or if null or zero-length
                 *         string is passed in for the <code>authType</code> parameter
                 * @throws CertificateException if the certificate chain is not trusted
                 *         by this TrustManager
                 * @see SSLParameters#getEndpointIdentificationAlgorithm
                 * @see SSLParameters#setEndpointIdentificationAlgorithm(String)
                 * @see SSLParameters#getAlgorithmConstraints
                 * @see SSLParameters#setAlgorithmConstraints(AlgorithmConstraints)
                 */
                // @ts-ignore
                abstract checkServerTrusted(chain: java.security.cert.X509Certificate[], authType: string, socket: java.net.Socket): void
                /**
                 * Given the partial or complete certificate chain provided by the
                 * peer, build and validate the certificate path based on the
                 * authentication type and ssl parameters.
                 * <p>
                 * The authentication type is determined by the actual certificate
                 * used. For instance, if RSAPublicKey is used, the authType
                 * should be "RSA". Checking is case-sensitive.
                 * <p>
                 * If the <code>engine</code> parameter is available, and the endpoint
                 * identification algorithm of the <code>SSLParameters</code> is
                 * non-empty, to prevent man-in-the-middle attacks, the address that
                 * the <code>engine</code> connected to should be checked against
                 * the peer's identity presented in the end-entity X509 certificate,
                 * as specified in the endpoint identification algorithm.
                 * <p>
                 * If the <code>engine</code> parameter is available, and the algorithm
                 * constraints of the <code>SSLParameters</code> is non-null, for every
                 * certificate in the certification path, fields such as subject public
                 * key, the signature algorithm, key usage, extended key usage, etc.
                 * need to conform to the algorithm constraints in place on this engine.
                 * @param chain the peer certificate chain
                 * @param authType the key exchange algorithm used
                 * @param engine the engine used for this connection. This parameter
                 *         can be null, which indicates that implementations need not check
                 *         the ssl parameters
                 * @throws IllegalArgumentException if null or zero-length array is passed
                 *         in for the <code>chain</code> parameter or if null or zero-length
                 *         string is passed in for the <code>authType</code> parameter
                 * @throws CertificateException if the certificate chain is not trusted
                 *         by this TrustManager
                 * @see SSLParameters#getEndpointIdentificationAlgorithm
                 * @see SSLParameters#setEndpointIdentificationAlgorithm(String)
                 * @see SSLParameters#getAlgorithmConstraints
                 * @see SSLParameters#setAlgorithmConstraints(AlgorithmConstraints)
                 */
                // @ts-ignore
                abstract checkClientTrusted(chain: java.security.cert.X509Certificate[], authType: string, engine: javax.net.ssl.SSLEngine): void
                /**
                 * Given the partial or complete certificate chain provided by the
                 * peer, build and validate the certificate path based on the
                 * authentication type and ssl parameters.
                 * <p>
                 * The authentication type is the key exchange algorithm portion
                 * of the cipher suites represented as a String, such as "RSA",
                 * "DHE_DSS". Note: for some exportable cipher suites, the key
                 * exchange algorithm is determined at run time during the
                 * handshake. For instance, for TLS_RSA_EXPORT_WITH_RC4_40_MD5,
                 * the authType should be RSA_EXPORT when an ephemeral RSA key is
                 * used for the key exchange, and RSA when the key from the server
                 * certificate is used. Checking is case-sensitive.
                 * <p>
                 * If the <code>engine</code> parameter is available, and the endpoint
                 * identification algorithm of the <code>SSLParameters</code> is
                 * non-empty, to prevent man-in-the-middle attacks, the address that
                 * the <code>engine</code> connected to should be checked against
                 * the peer's identity presented in the end-entity X509 certificate,
                 * as specified in the endpoint identification algorithm.
                 * <p>
                 * If the <code>engine</code> parameter is available, and the algorithm
                 * constraints of the <code>SSLParameters</code> is non-null, for every
                 * certificate in the certification path, fields such as subject public
                 * key, the signature algorithm, key usage, extended key usage, etc.
                 * need to conform to the algorithm constraints in place on this engine.
                 * @param chain the peer certificate chain
                 * @param authType the key exchange algorithm used
                 * @param engine the engine used for this connection. This parameter
                 *         can be null, which indicates that implementations need not check
                 *         the ssl parameters
                 * @throws IllegalArgumentException if null or zero-length array is passed
                 *         in for the <code>chain</code> parameter or if null or zero-length
                 *         string is passed in for the <code>authType</code> parameter
                 * @throws CertificateException if the certificate chain is not trusted
                 *         by this TrustManager
                 * @see SSLParameters#getEndpointIdentificationAlgorithm
                 * @see SSLParameters#setEndpointIdentificationAlgorithm(String)
                 * @see SSLParameters#getAlgorithmConstraints
                 * @see SSLParameters#setAlgorithmConstraints(AlgorithmConstraints)
                 */
                // @ts-ignore
                abstract checkServerTrusted(chain: java.security.cert.X509Certificate[], authType: string, engine: javax.net.ssl.SSLEngine): void
            }
        }
    }
}

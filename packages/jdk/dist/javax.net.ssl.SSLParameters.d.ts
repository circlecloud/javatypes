declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Encapsulates parameters for an SSL/TLS connection. The parameters
             * are the list of ciphersuites to be accepted in an SSL/TLS handshake,
             * the list of protocols to be allowed, the endpoint identification
             * algorithm during SSL/TLS handshaking, the Server Name Indication (SNI),
             * the algorithm constraints and whether SSL/TLS servers should request
             * or require client authentication, etc.
             * <p>
             * SSLParameters can be created via the constructors in this class.
             * Objects can also be obtained using the <code>getSSLParameters()</code>
             * methods in
             * {@link SSLSocket#getSSLParameters SSLSocket} and
             * {@link SSLServerSocket#getSSLParameters SSLServerSocket} and
             * {@link SSLEngine#getSSLParameters SSLEngine} or the
             * {@link SSLContext#getDefaultSSLParameters getDefaultSSLParameters()} and
             * {@link SSLContext#getSupportedSSLParameters getSupportedSSLParameters()}
             * methods in <code>SSLContext</code>.
             * <p>
             * SSLParameters can be applied to a connection via the methods
             * {@link SSLSocket#setSSLParameters SSLSocket.setSSLParameters()} and
             * {@link SSLServerSocket#setSSLParameters SSLServerSocket.setSSLParameters()}
             * and {@link SSLEngine#setSSLParameters SSLEngine.setSSLParameters()}.
             * @see SSLSocket
             * @see SSLEngine
             * @see SSLContext
             * @since 1.6
             */
            // @ts-ignore
            class SSLParameters extends java.lang.Object {
                /**
                 * Constructs SSLParameters.
                 * <p>
                 * The values of cipherSuites, protocols, cryptographic algorithm
                 * constraints, endpoint identification algorithm, server names and
                 * server name matchers are set to <code>null</code>, useCipherSuitesOrder,
                 * wantClientAuth and needClientAuth are set to <code>false</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs SSLParameters from the specified array of ciphersuites.
                 * <p>
                 * Calling this constructor is equivalent to calling the no-args
                 * constructor followed by
                 * <code>setCipherSuites(cipherSuites);</code>.
                 * @param cipherSuites the array of ciphersuites (or null)
                 */
                // @ts-ignore
                constructor(cipherSuites: string[])
                /**
                 * Constructs SSLParameters from the specified array of ciphersuites
                 * and protocols.
                 * <p>
                 * Calling this constructor is equivalent to calling the no-args
                 * constructor followed by
                 * <code>setCipherSuites(cipherSuites); setProtocols(protocols);</code>.
                 * @param cipherSuites the array of ciphersuites (or null)
                 * @param protocols the array of protocols (or null)
                 */
                // @ts-ignore
                constructor(cipherSuites: string[], protocols: string[])
                /**
                 * Returns a copy of the array of ciphersuites or null if none
                 * have been set.
                 * @return a copy of the array of ciphersuites or null if none
                 *  have been set.
                 */
                // @ts-ignore
                getCipherSuites(): java.lang.String[]
                /**
                 * Sets the array of ciphersuites.
                 * @param cipherSuites the array of ciphersuites (or null)
                 */
                // @ts-ignore
                setCipherSuites(cipherSuites: string[]): void
                /**
                 * Returns a copy of the array of protocols or null if none
                 * have been set.
                 * @return a copy of the array of protocols or null if none
                 *  have been set.
                 */
                // @ts-ignore
                getProtocols(): java.lang.String[]
                /**
                 * Sets the array of protocols.
                 * @param protocols the array of protocols (or null)
                 */
                // @ts-ignore
                setProtocols(protocols: string[]): void
                /**
                 * Returns whether client authentication should be requested.
                 * @return whether client authentication should be requested.
                 */
                // @ts-ignore
                getWantClientAuth(): boolean
                /**
                 * Sets whether client authentication should be requested. Calling
                 * this method clears the <code>needClientAuth</code> flag.
                 * @param wantClientAuth whether client authentication should be requested
                 */
                // @ts-ignore
                setWantClientAuth(wantClientAuth: boolean): void
                /**
                 * Returns whether client authentication should be required.
                 * @return whether client authentication should be required.
                 */
                // @ts-ignore
                getNeedClientAuth(): boolean
                /**
                 * Sets whether client authentication should be required. Calling
                 * this method clears the <code>wantClientAuth</code> flag.
                 * @param needClientAuth whether client authentication should be required
                 */
                // @ts-ignore
                setNeedClientAuth(needClientAuth: boolean): void
                /**
                 * Returns the cryptographic algorithm constraints.
                 * @return the cryptographic algorithm constraints, or null if the
                 *      constraints have not been set
                 * @see #setAlgorithmConstraints(AlgorithmConstraints)
                 * @since 1.7
                 */
                // @ts-ignore
                getAlgorithmConstraints(): java.security.AlgorithmConstraints
                /**
                 * Sets the cryptographic algorithm constraints, which will be used
                 * in addition to any configured by the runtime environment.
                 * <p>
                 * If the <code>constraints</code> parameter is non-null, every
                 * cryptographic algorithm, key and algorithm parameters used in the
                 * SSL/TLS handshake must be permitted by the constraints.
                 * @param constraints the algorithm constraints (or null)
                 * @since 1.7
                 */
                // @ts-ignore
                setAlgorithmConstraints(constraints: java.security.AlgorithmConstraints): void
                /**
                 * Gets the endpoint identification algorithm.
                 * @return the endpoint identification algorithm, or null if none
                 *  has been set.
                 * @see X509ExtendedTrustManager
                 * @see #setEndpointIdentificationAlgorithm(String)
                 * @since 1.7
                 */
                // @ts-ignore
                getEndpointIdentificationAlgorithm(): java.lang.String
                /**
                 * Sets the endpoint identification algorithm.
                 * <p>
                 * If the <code>algorithm</code> parameter is non-null or non-empty, the
                 * endpoint identification/verification procedures must be handled during
                 * SSL/TLS handshaking.  This is to prevent man-in-the-middle attacks.
                 * @param algorithm The standard string name of the endpoint
                 *      identification algorithm (or null).  See Appendix A in the <a href=
                 *    "{#docRoot}/../technotes/guides/security/crypto/CryptoSpec.html#AppA">
                 *      Java Cryptography Architecture API Specification &amp; Reference </a>
                 *      for information about standard algorithm names.
                 * @see X509ExtendedTrustManager
                 * @since 1.7
                 */
                // @ts-ignore
                setEndpointIdentificationAlgorithm(algorithm: string): void
                /**
                 * Sets the desired {@link SNIServerName}s of the Server Name
                 * Indication (SNI) parameter.
                 * <P>
                 * This method is only useful to {@link SSLSocket}s or {@link SSLEngine}s
                 * operating in client mode.
                 * <P>
                 * Note that the {@code serverNames} list is cloned
                 * to protect against subsequent modification.
                 * @param serverNames
                 *          the list of desired {#link SNIServerName}s (or null)
                 * @throws NullPointerException if the {#code serverNames}
                 *          contains {@code null} element
                 * @throws IllegalArgumentException if the {#code serverNames}
                 *          contains more than one name of the same name type
                 * @see SNIServerName
                 * @see #getServerNames()
                 * @since 1.8
                 */
                // @ts-ignore
                setServerNames(serverNames: Array<javax.net.ssl.SNIServerName>): void
                /**
                 * Returns a {@link List} containing all {@link SNIServerName}s of the
                 * Server Name Indication (SNI) parameter, or null if none has been set.
                 * <P>
                 * This method is only useful to {@link SSLSocket}s or {@link SSLEngine}s
                 * operating in client mode.
                 * <P>
                 * For SSL/TLS connections, the underlying SSL/TLS provider
                 * may specify a default value for a certain server name type.  In
                 * client mode, it is recommended that, by default, providers should
                 * include the server name indication whenever the server can be located
                 * by a supported server name type.
                 * <P>
                 * It is recommended that providers initialize default Server Name
                 * Indications when creating {@code SSLSocket}/{@code SSLEngine}s.
                 * In the following examples, the server name could be represented by an
                 * instance of {@link SNIHostName} which has been initialized with the
                 * hostname "www.example.com" and type
                 * {@link StandardConstants#SNI_HOST_NAME}.
                 * <pre>
                 * Socket socket =
                 * sslSocketFactory.createSocket("www.example.com", 443);
                 * </pre>
                 * or
                 * <pre>
                 * SSLEngine engine =
                 * sslContext.createSSLEngine("www.example.com", 443);
                 * </pre>
                 * <P>
                 * @return null or an immutable list of non-null {#link SNIServerName}s
                 * @see List
                 * @see #setServerNames(List)
                 * @since 1.8
                 */
                // @ts-ignore
                getServerNames(): java.util.List<javax.net.ssl.SNIServerName>
                /**
                 * Sets the {@link SNIMatcher}s of the Server Name Indication (SNI)
                 * parameter.
                 * <P>
                 * This method is only useful to {@link SSLSocket}s or {@link SSLEngine}s
                 * operating in server mode.
                 * <P>
                 * Note that the {@code matchers} collection is cloned to protect
                 * against subsequent modification.
                 * @param matchers
                 *          the collection of {#link SNIMatcher}s (or null)
                 * @throws NullPointerException if the {#code matchers}
                 *          contains {@code null} element
                 * @throws IllegalArgumentException if the {#code matchers}
                 *          contains more than one name of the same name type
                 * @see Collection
                 * @see SNIMatcher
                 * @see #getSNIMatchers()
                 * @since 1.8
                 */
                // @ts-ignore
                setSNIMatchers(matchers: Array<javax.net.ssl.SNIMatcher>): void
                /**
                 * Returns a {@link Collection} containing all {@link SNIMatcher}s of the
                 * Server Name Indication (SNI) parameter, or null if none has been set.
                 * <P>
                 * This method is only useful to {@link SSLSocket}s or {@link SSLEngine}s
                 * operating in server mode.
                 * <P>
                 * For better interoperability, providers generally will not define
                 * default matchers so that by default servers will ignore the SNI
                 * extension and continue the handshake.
                 * @return null or an immutable collection of non-null {#link SNIMatcher}s
                 * @see SNIMatcher
                 * @see #setSNIMatchers(Collection)
                 * @since 1.8
                 */
                // @ts-ignore
                getSNIMatchers(): java.util.Collection<javax.net.ssl.SNIMatcher>
                /**
                 * Sets whether the local cipher suites preference should be honored.
                 * @param honorOrder whether local cipher suites order in
                 *         {#code #getCipherSuites} should be honored during
                 *         SSL/TLS handshaking.
                 * @see #getUseCipherSuitesOrder()
                 * @since 1.8
                 */
                // @ts-ignore
                setUseCipherSuitesOrder(honorOrder: boolean): void
                /**
                 * Returns whether the local cipher suites preference should be honored.
                 * @return whether local cipher suites order in {#code #getCipherSuites}
                 *          should be honored during SSL/TLS handshaking.
                 * @see #setUseCipherSuitesOrder(boolean)
                 * @since 1.8
                 */
                // @ts-ignore
                getUseCipherSuitesOrder(): boolean
            }
        }
    }
}

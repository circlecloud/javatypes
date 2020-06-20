declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * <code>HttpsURLConnection</code> extends <code>HttpURLConnection</code>
             * with support for https-specific features.
             * <P>
             * See <A HREF="http://www.w3.org/pub/WWW/Protocols/">
             * http://www.w3.org/pub/WWW/Protocols/</A> and
             * <A HREF="http://www.ietf.org/"> RFC 2818 </A>
             * for more details on the
             * https specification.
             * <P>
             * This class uses <code>HostnameVerifier</code> and
             * <code>SSLSocketFactory</code>.
             * There are default implementations defined for both classes.
             * However, the implementations can be replaced on a per-class (static) or
             * per-instance basis.  All new <code>HttpsURLConnection</code>s instances
             * will be assigned
             * the "default" static values at instance creation, but they can be overriden
             * by calling the appropriate per-instance set method(s) before
             * <code>connect</code>ing.
             * @since 1.4
             */
            // @ts-ignore
            class HttpsURLConnection extends java.net.HttpURLConnection {
                /**
                 * Creates an <code>HttpsURLConnection</code> using the
                 * URL specified.
                 * @param url the URL
                 */
                // @ts-ignore
                constructor(url: java.net.URL)
                /**
                 * The <code>hostnameVerifier</code> for this object.
                 */
                // @ts-ignore
                hostnameVerifier: javax.net.ssl.HostnameVerifier
                /**
                 * Returns the cipher suite in use on this connection.
                 * @return the cipher suite
                 * @throws IllegalStateException if this method is called before
                 *           the connection has been established.
                 */
                // @ts-ignore
                abstract getCipherSuite(): java.lang.String
                /**
                 * Returns the certificate(s) that were sent to the server during
                 * handshaking.
                 * <P>
                 * Note: This method is useful only when using certificate-based
                 * cipher suites.
                 * <P>
                 * When multiple certificates are available for use in a
                 * handshake, the implementation chooses what it considers the
                 * "best" certificate chain available, and transmits that to
                 * the other side.  This method allows the caller to know
                 * which certificate chain was actually sent.
                 * @return an ordered array of certificates,
                 *           with the client's own certificate first followed by any
                 *           certificate authorities.  If no certificates were sent,
                 *           then null is returned.
                 * @throws IllegalStateException if this method is called before
                 *           the connection has been established.
                 * @see #getLocalPrincipal()
                 */
                // @ts-ignore
                abstract getLocalCertificates(): java.security.cert.Certificate[]
                /**
                 * Returns the server's certificate chain which was established
                 * as part of defining the session.
                 * <P>
                 * Note: This method can be used only when using certificate-based
                 * cipher suites; using it with non-certificate-based cipher suites,
                 * such as Kerberos, will throw an SSLPeerUnverifiedException.
                 * @return an ordered array of server certificates,
                 *           with the peer's own certificate first followed by
                 *           any certificate authorities.
                 * @throws SSLPeerUnverifiedException if the peer is not verified.
                 * @throws IllegalStateException if this method is called before
                 *           the connection has been established.
                 * @see #getPeerPrincipal()
                 */
                // @ts-ignore
                abstract getServerCertificates(): java.security.cert.Certificate[]
                /**
                 * Returns the server's principal which was established as part of
                 * defining the session.
                 * <P>
                 * Note: Subclasses should override this method. If not overridden, it
                 * will default to returning the X500Principal of the server's end-entity
                 * certificate for certificate-based ciphersuites, or throw an
                 * SSLPeerUnverifiedException for non-certificate based ciphersuites,
                 * such as Kerberos.
                 * @return the server's principal. Returns an X500Principal of the
                 *  end-entity certiticate for X509-based cipher suites, and
                 *  KerberosPrincipal for Kerberos cipher suites.
                 * @throws SSLPeerUnverifiedException if the peer was not verified
                 * @throws IllegalStateException if this method is called before
                 *           the connection has been established.
                 * @see #getServerCertificates()
                 * @see #getLocalPrincipal()
                 * @since 1.5
                 */
                // @ts-ignore
                getPeerPrincipal(): java.security.Principal
                /**
                 * Returns the principal that was sent to the server during handshaking.
                 * <P>
                 * Note: Subclasses should override this method. If not overridden, it
                 * will default to returning the X500Principal of the end-entity certificate
                 * that was sent to the server for certificate-based ciphersuites or,
                 * return null for non-certificate based ciphersuites, such as Kerberos.
                 * @return the principal sent to the server. Returns an X500Principal
                 *  of the end-entity certificate for X509-based cipher suites, and
                 *  KerberosPrincipal for Kerberos cipher suites. If no principal was
                 *  sent, then null is returned.
                 * @throws IllegalStateException if this method is called before
                 *           the connection has been established.
                 * @see #getLocalCertificates()
                 * @see #getPeerPrincipal()
                 * @since 1.5
                 */
                // @ts-ignore
                getLocalPrincipal(): java.security.Principal
                /**
                 * Sets the default <code>HostnameVerifier</code> inherited by a
                 * new instance of this class.
                 * <P>
                 * If this method is not called, the default
                 * <code>HostnameVerifier</code> assumes the connection should not
                 * be permitted.
                 * @param v the default host name verifier
                 * @throws IllegalArgumentException if the <code>HostnameVerifier</code>
                 *           parameter is null.
                 * @throws SecurityException if a security manager exists and its
                 *          <code>checkPermission</code> method does not allow
                 *          <code>SSLPermission("setHostnameVerifier")</code>
                 * @see #getDefaultHostnameVerifier()
                 */
                // @ts-ignore
                setDefaultHostnameVerifier(v: javax.net.ssl.HostnameVerifier): void
                /**
                 * Gets the default <code>HostnameVerifier</code> that is inherited
                 * by new instances of this class.
                 * @return the default host name verifier
                 * @see #setDefaultHostnameVerifier(HostnameVerifier)
                 */
                // @ts-ignore
                getDefaultHostnameVerifier(): javax.net.ssl.HostnameVerifier
                /**
                 * Sets the <code>HostnameVerifier</code> for this instance.
                 * <P>
                 * New instances of this class inherit the default static hostname
                 * verifier set by {@link #setDefaultHostnameVerifier(HostnameVerifier)
                 * setDefaultHostnameVerifier}.  Calls to this method replace
                 * this object's <code>HostnameVerifier</code>.
                 * @param v the host name verifier
                 * @throws IllegalArgumentException if the <code>HostnameVerifier</code>
                 *   parameter is null.
                 * @see #getHostnameVerifier()
                 * @see #setDefaultHostnameVerifier(HostnameVerifier)
                 */
                // @ts-ignore
                setHostnameVerifier(v: javax.net.ssl.HostnameVerifier): void
                /**
                 * Gets the <code>HostnameVerifier</code> in place on this instance.
                 * @return the host name verifier
                 * @see #setHostnameVerifier(HostnameVerifier)
                 * @see #setDefaultHostnameVerifier(HostnameVerifier)
                 */
                // @ts-ignore
                getHostnameVerifier(): javax.net.ssl.HostnameVerifier
                /**
                 * Sets the default <code>SSLSocketFactory</code> inherited by new
                 * instances of this class.
                 * <P>
                 * The socket factories are used when creating sockets for secure
                 * https URL connections.
                 * @param sf the default SSL socket factory
                 * @throws IllegalArgumentException if the SSLSocketFactory
                 *           parameter is null.
                 * @throws SecurityException if a security manager exists and its
                 *          <code>checkSetFactory</code> method does not allow
                 *          a socket factory to be specified.
                 * @see #getDefaultSSLSocketFactory()
                 */
                // @ts-ignore
                setDefaultSSLSocketFactory(sf: javax.net.ssl.SSLSocketFactory): void
                /**
                 * Gets the default static <code>SSLSocketFactory</code> that is
                 * inherited by new instances of this class.
                 * <P>
                 * The socket factories are used when creating sockets for secure
                 * https URL connections.
                 * @return the default <code>SSLSocketFactory</code>
                 * @see #setDefaultSSLSocketFactory(SSLSocketFactory)
                 */
                // @ts-ignore
                getDefaultSSLSocketFactory(): javax.net.ssl.SSLSocketFactory
                /**
                 * Sets the <code>SSLSocketFactory</code> to be used when this instance
                 * creates sockets for secure https URL connections.
                 * <P>
                 * New instances of this class inherit the default static
                 * <code>SSLSocketFactory</code> set by
                 * {@link #setDefaultSSLSocketFactory(SSLSocketFactory)
                 * setDefaultSSLSocketFactory}.  Calls to this method replace
                 * this object's <code>SSLSocketFactory</code>.
                 * @param sf the SSL socket factory
                 * @throws IllegalArgumentException if the <code>SSLSocketFactory</code>
                 *           parameter is null.
                 * @throws SecurityException if a security manager exists and its
                 *          <code>checkSetFactory</code> method does not allow
                 *          a socket factory to be specified.
                 * @see #getSSLSocketFactory()
                 */
                // @ts-ignore
                setSSLSocketFactory(sf: javax.net.ssl.SSLSocketFactory): void
                /**
                 * Gets the SSL socket factory to be used when creating sockets
                 * for secure https URL connections.
                 * @return the <code>SSLSocketFactory</code>
                 * @see #setSSLSocketFactory(SSLSocketFactory)
                 */
                // @ts-ignore
                getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory
            }
        }
    }
}

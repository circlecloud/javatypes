declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * This class implements the LDAPv3 Extended Response for StartTLS as
             * defined in
             * <a href="http://www.ietf.org/rfc/rfc2830.txt">Lightweight Directory
             * Access Protocol (v3): Extension for Transport Layer Security</a>
             * The object identifier for StartTLS is 1.3.6.1.4.1.1466.20037
             * and no extended response value is defined.
             * <p>
             * The Start TLS extended request and response are used to establish
             * a TLS connection over the existing LDAP connection associated with
             * the JNDI context on which <tt>extendedOperation()</tt> is invoked.
             * Typically, a JNDI program uses the StartTLS extended request and response
             * classes as follows.
             * <blockquote><pre>
             * import javax.naming.ldap.*;
             * // Open an LDAP association
             * LdapContext ctx = new InitialLdapContext();
             * // Perform a StartTLS extended operation
             * StartTlsResponse tls =
             * (StartTlsResponse) ctx.extendedOperation(new StartTlsRequest());
             * // Open a TLS connection (over the existing LDAP association) and get details
             * // of the negotiated TLS session: cipher suite, peer certificate, ...
             * SSLSession session = tls.negotiate();
             * // ... use ctx to perform protected LDAP operations
             * // Close the TLS connection (revert back to the underlying LDAP association)
             * tls.close();
             * // ... use ctx to perform unprotected LDAP operations
             * // Close the LDAP association
             * ctx.close;
             * </pre></blockquote>
             * @since 1.4
             * @see StartTlsRequest
             * @author Vincent Ryan
             */
            // @ts-ignore
            abstract class StartTlsResponse extends java.lang.Object implements javax.naming.ldap.ExtendedResponse {
                /**
                 * Constructs a StartTLS extended response.
                 * A concrete subclass must have a public no-arg constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The StartTLS extended response's assigned object identifier
                 * is 1.3.6.1.4.1.1466.20037.
                 */
                // @ts-ignore
                public static readonly OID: java.lang.String | string
                /**
                 * Retrieves the StartTLS response's object identifier string.
                 * @return The object identifier string, "1.3.6.1.4.1.1466.20037".
                 */
                // @ts-ignore
                public getID(): string
                /**
                 * Retrieves the StartTLS response's ASN.1 BER encoded value.
                 * Since the response has no defined value, null is always
                 * returned.
                 * @return The null value.
                 */
                // @ts-ignore
                public getEncodedValue(): number /*byte*/[]
                /**
                 * Overrides the default list of cipher suites enabled for use on the
                 * TLS connection. The cipher suites must have already been listed by
                 * <tt>SSLSocketFactory.getSupportedCipherSuites()</tt> as being supported.
                 * Even if a suite has been enabled, it still might not be used because
                 * the peer does not support it, or because the requisite certificates
                 * (and private keys) are not available.
                 * @param suites The non-null list of names of all the cipher suites to
                 *  enable.
                 * @see #negotiate
                 */
                // @ts-ignore
                public abstract setEnabledCipherSuites(suites: java.lang.String[] | string[]): void
                /**
                 * Sets the hostname verifier used by <tt>negotiate()</tt>
                 * after the TLS handshake has completed and the default hostname
                 * verification has failed.
                 * <tt>setHostnameVerifier()</tt> must be called before
                 * <tt>negotiate()</tt> is invoked for it to have effect.
                 * If called after
                 * <tt>negotiate()</tt>, this method does not do anything.
                 * @param verifier The non-null hostname verifier callback.
                 * @see #negotiate
                 */
                // @ts-ignore
                public abstract setHostnameVerifier(verifier: javax.net.ssl.HostnameVerifier): void
                /**
                 * Negotiates a TLS session using the default SSL socket factory.
                 * <p>
                 * This method is equivalent to <tt>negotiate(null)</tt>.
                 * @return The negotiated SSL session
                 * @throws IOException If an IO error was encountered while establishing
                 *  the TLS session.
                 * @see #setEnabledCipherSuites
                 * @see #setHostnameVerifier
                 */
                // @ts-ignore
                public abstract negotiate(): javax.net.ssl.SSLSession
                /**
                 * Negotiates a TLS session using an SSL socket factory.
                 * <p>
                 * Creates an SSL socket using the supplied SSL socket factory and
                 * attaches it to the existing connection. Performs the TLS handshake
                 * and returns the negotiated session information.
                 * <p>
                 * If cipher suites have been set via <tt>setEnabledCipherSuites</tt>
                 * then they are enabled before the TLS handshake begins.
                 * <p>
                 * Hostname verification is performed after the TLS handshake completes.
                 * The default hostname verification performs a match of the server's
                 * hostname against the hostname information found in the server's certificate.
                 * If this verification fails and no callback has been set via
                 * <tt>setHostnameVerifier</tt> then the negotiation fails.
                 * If this verification fails and a callback has been set via
                 * <tt>setHostnameVerifier</tt>, then the callback is used to determine whether
                 * the negotiation succeeds.
                 * <p>
                 * If an error occurs then the SSL socket is closed and an IOException
                 * is thrown. The underlying connection remains intact.
                 * @param factory The possibly null SSL socket factory to use.
                 *  If null, the default SSL socket factory is used.
                 * @return The negotiated SSL session
                 * @throws IOException If an IO error was encountered while establishing
                 *  the TLS session.
                 * @see #setEnabledCipherSuites
                 * @see #setHostnameVerifier
                 */
                // @ts-ignore
                public abstract negotiate(factory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession
                /**
                 * Closes the TLS connection gracefully and reverts back to the underlying
                 * connection.
                 * @throws IOException If an IO error was encountered while closing the
                 *  TLS connection
                 */
                // @ts-ignore
                public abstract close(): void
            }
        }
    }
}

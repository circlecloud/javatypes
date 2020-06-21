declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This event indicates that an SSL handshake completed on a given
             * SSL connection.  All of the core information about that handshake's
             * result is captured through an "SSLSession" object.  As a convenience,
             * this event class provides direct access to some important session
             * attributes.
             * <P> The source of this event is the SSLSocket on which handshaking
             * just completed.
             * @see SSLSocket
             * @see HandshakeCompletedListener
             * @see SSLSession
             * @since 1.4
             * @author David Brownell
             */
            // @ts-ignore
            class HandshakeCompletedEvent extends java.util.EventObject {
                /**
                 * Constructs a new HandshakeCompletedEvent.
                 * @param sock the SSLSocket acting as the source of the event
                 * @param s the SSLSession this event is associated with
                 */
                // @ts-ignore
                constructor(sock: javax.net.ssl.SSLSocket, s: javax.net.ssl.SSLSession)
                /**
                 * Returns the session that triggered this event.
                 * @return the <code>SSLSession</code> for this handshake
                 */
                // @ts-ignore
                public getSession(): javax.net.ssl.SSLSession
                /**
                 * Returns the cipher suite in use by the session which was produced
                 * by the handshake.  (This is a convenience method for
                 * getting the ciphersuite from the SSLsession.)
                 * @return the name of the cipher suite negotiated during this session.
                 */
                // @ts-ignore
                public getCipherSuite(): string
                /**
                 * Returns the certificate(s) that were sent to the peer during
                 * handshaking.
                 * Note: This method is useful only when using certificate-based
                 * cipher suites.
                 * When multiple certificates are available for use in a
                 * handshake, the implementation chooses what it considers the
                 * "best" certificate chain available, and transmits that to
                 * the other side.  This method allows the caller to know
                 * which certificate chain was actually used.
                 * @return an ordered array of certificates, with the local
                 *           certificate first followed by any
                 *           certificate authorities.  If no certificates were sent,
                 *           then null is returned.
                 * @see #getLocalPrincipal()
                 */
                // @ts-ignore
                public getLocalCertificates(): java.security.cert.Certificate[]
                /**
                 * Returns the identity of the peer which was established as part
                 * of defining the session.
                 * Note: This method can be used only when using certificate-based
                 * cipher suites; using it with non-certificate-based cipher suites,
                 * such as Kerberos, will throw an SSLPeerUnverifiedException.
                 * @return an ordered array of the peer certificates,
                 *           with the peer's own certificate first followed by
                 *           any certificate authorities.
                 * @exception SSLPeerUnverifiedException if the peer is not verified.
                 * @see #getPeerPrincipal()
                 */
                // @ts-ignore
                public getPeerCertificates(): java.security.cert.Certificate[]
                /**
                 * Returns the identity of the peer which was identified as part
                 * of defining the session.
                 * Note: This method can be used only when using certificate-based
                 * cipher suites; using it with non-certificate-based cipher suites,
                 * such as Kerberos, will throw an SSLPeerUnverifiedException.
                 * <p><em>Note: this method exists for compatibility with previous
                 * releases. New applications should use
                 * {@link #getPeerCertificates} instead.</em></p>
                 * @return an ordered array of peer X.509 certificates,
                 *           with the peer's own certificate first followed by any
                 *           certificate authorities.  (The certificates are in
                 *           the original JSSE
                 *           {#link javax.security.cert.X509Certificate} format).
                 * @exception SSLPeerUnverifiedException if the peer is not verified.
                 * @see #getPeerPrincipal()
                 */
                // @ts-ignore
                public getPeerCertificateChain(): javax.security.cert.X509Certificate[]
                /**
                 * Returns the identity of the peer which was established as part of
                 * defining the session.
                 * @return the peer's principal. Returns an X500Principal of the
                 *  end-entity certiticate for X509-based cipher suites, and
                 *  KerberosPrincipal for Kerberos cipher suites.
                 * @throws SSLPeerUnverifiedException if the peer's identity has not
                 *           been verified
                 * @see #getPeerCertificates()
                 * @see #getLocalPrincipal()
                 * @since 1.5
                 */
                // @ts-ignore
                public getPeerPrincipal(): java.security.Principal
                /**
                 * Returns the principal that was sent to the peer during handshaking.
                 * @return the principal sent to the peer. Returns an X500Principal
                 *  of the end-entity certificate for X509-based cipher suites, and
                 *  KerberosPrincipal for Kerberos cipher suites. If no principal was
                 *  sent, then null is returned.
                 * @see #getLocalCertificates()
                 * @see #getPeerPrincipal()
                 * @since 1.5
                 */
                // @ts-ignore
                public getLocalPrincipal(): java.security.Principal
                /**
                 * Returns the socket which is the source of this event.
                 * (This is a convenience function, to let applications
                 * write code without type casts.)
                 * @return the socket on which the connection was made.
                 */
                // @ts-ignore
                public getSocket(): javax.net.ssl.SSLSocket
            }
        }
    }
}

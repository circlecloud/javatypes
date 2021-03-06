declare namespace java {
    namespace net {
        /**
         * Represents a cache response originally retrieved through secure
         * means, such as TLS.
         * @since 1.5
         */
        // @ts-ignore
        abstract class SecureCacheResponse extends java.net.CacheResponse {
            // @ts-ignore
            constructor()
            /**
             * Returns the cipher suite in use on the original connection that
             * retrieved the network resource.
             * @return a string representing the cipher suite
             */
            // @ts-ignore
            public abstract getCipherSuite(): string
            /**
             * Returns the certificate chain that were sent to the server during
             * handshaking of the original connection that retrieved the
             * network resource.  Note: This method is useful only
             * when using certificate-based cipher suites.
             * @return an immutable List of Certificate representing the
             *            certificate chain that was sent to the server. If no
             *            certificate chain was sent, null will be returned.
             * @see #getLocalPrincipal()
             */
            // @ts-ignore
            public abstract getLocalCertificateChain(): Array<java.security.cert.Certificate>
            /**
             * Returns the server's certificate chain, which was established as
             * part of defining the session in the original connection that
             * retrieved the network resource, from cache.  Note: This method
             * can be used only when using certificate-based cipher suites;
             * using it with non-certificate-based cipher suites, such as
             * Kerberos, will throw an SSLPeerUnverifiedException.
             * @return an immutable List of Certificate representing the server's
             *          certificate chain.
             * @throws SSLPeerUnverifiedException if the peer is not verified.
             * @see #getPeerPrincipal()
             */
            // @ts-ignore
            public abstract getServerCertificateChain(): Array<java.security.cert.Certificate>
            /**
             * Returns the server's principal which was established as part of
             * defining the session during the original connection that
             * retrieved the network resource.
             * @return the server's principal. Returns an X500Principal of the
             *  end-entity certiticate for X509-based cipher suites, and
             *  KerberosPrincipal for Kerberos cipher suites.
             * @throws SSLPeerUnverifiedException if the peer was not verified.
             * @see #getServerCertificateChain()
             * @see #getLocalPrincipal()
             */
            // @ts-ignore
            public abstract getPeerPrincipal(): java.security.Principal
            /**
             * Returns the principal that was sent to the server during
             * handshaking in the original connection that retrieved the
             * network resource.
             * @return the principal sent to the server. Returns an X500Principal
             *  of the end-entity certificate for X509-based cipher suites, and
             *  KerberosPrincipal for Kerberos cipher suites. If no principal was
             *  sent, then null is returned.
             * @see #getLocalCertificateChain()
             * @see #getPeerPrincipal()
             */
            // @ts-ignore
            public abstract getLocalPrincipal(): java.security.Principal
        }
    }
}

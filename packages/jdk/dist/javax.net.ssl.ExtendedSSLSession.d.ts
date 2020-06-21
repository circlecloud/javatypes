declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Extends the <code>SSLSession</code> interface to support additional
             * session attributes.
             * @since 1.7
             */
            // @ts-ignore
            abstract class ExtendedSSLSession extends java.lang.Object implements javax.net.ssl.SSLSession {
                // @ts-ignore
                constructor()
                /**
                 * Obtains an array of supported signature algorithms that the local side
                 * is willing to use.
                 * <p>
                 * Note: this method is used to indicate to the peer which signature
                 * algorithms may be used for digital signatures in TLS 1.2. It is
                 * not meaningful for TLS versions prior to 1.2.
                 * <p>
                 * The signature algorithm name must be a standard Java Security
                 * name (such as "SHA1withRSA", "SHA256withECDSA", and so on).
                 * See Appendix A in the <a href=
                 * "{@docRoot}/../technotes/guides/security/crypto/CryptoSpec.html#AppA">
                 * Java Cryptography Architecture API Specification &amp; Reference </a>
                 * for information about standard algorithm names.
                 * <p>
                 * Note: the local supported signature algorithms should conform to
                 * the algorithm constraints specified by
                 * {@link SSLParameters#getAlgorithmConstraints getAlgorithmConstraints()}
                 * method in <code>SSLParameters</code>.
                 * @return An array of supported signature algorithms, in descending
                 *      order of preference.  The return value is an empty array if
                 *      no signature algorithm is supported.
                 * @see SSLParameters#getAlgorithmConstraints
                 */
                // @ts-ignore
                public abstract getLocalSupportedSignatureAlgorithms(): string[]
                /**
                 * Obtains an array of supported signature algorithms that the peer is
                 * able to use.
                 * <p>
                 * Note: this method is used to indicate to the local side which signature
                 * algorithms may be used for digital signatures in TLS 1.2. It is
                 * not meaningful for TLS versions prior to 1.2.
                 * <p>
                 * The signature algorithm name must be a standard Java Security
                 * name (such as "SHA1withRSA", "SHA256withECDSA", and so on).
                 * See Appendix A in the <a href=
                 * "{@docRoot}/../technotes/guides/security/crypto/CryptoSpec.html#AppA">
                 * Java Cryptography Architecture API Specification &amp; Reference </a>
                 * for information about standard algorithm names.
                 * @return An array of supported signature algorithms, in descending
                 *      order of preference.  The return value is an empty array if
                 *      the peer has not sent the supported signature algorithms.
                 * @see X509KeyManager
                 * @see X509ExtendedKeyManager
                 */
                // @ts-ignore
                public abstract getPeerSupportedSignatureAlgorithms(): string[]
                /**
                 * Obtains a {@link List} containing all {@link SNIServerName}s
                 * of the requested Server Name Indication (SNI) extension.
                 * <P>
                 * In server mode, unless the return {@link List} is empty,
                 * the server should use the requested server names to guide its
                 * selection of an appropriate authentication certificate, and/or
                 * other aspects of security policy.
                 * <P>
                 * In client mode, unless the return {@link List} is empty,
                 * the client should use the requested server names to guide its
                 * endpoint identification of the peer's identity, and/or
                 * other aspects of security policy.
                 * @return a non-null immutable list of {#link SNIServerName}s of the
                 *          requested server name indications. The returned list may be
                 *          empty if no server name indications were requested.
                 * @throws UnsupportedOperationException if the underlying provider
                 *          does not implement the operation
                 * @see SNIServerName
                 * @see X509ExtendedTrustManager
                 * @see X509ExtendedKeyManager
                 * @since 1.8
                 */
                // @ts-ignore
                public getRequestedServerNames(): Array<javax.net.ssl.SNIServerName>
            }
        }
    }
}

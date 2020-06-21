declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Is called during handshake and hooked into openssl via {@code SSL_CTX_set_cert_verify_callback}.
                 */
                // @ts-ignore
                interface CertificateVerifier {
                    /**
                     * Returns {@code true} if the passed in certificate chain could be verified and so the handshake
                     * should be successful, {@code false} otherwise.
                     * @param ssl               the SSL instance
                     * @param x509              the {#code X509} certificate chain
                     * @param authAlgorithm     the auth algorithm
                     * @return verified         {#code true} if verified successful, {@code false} otherwise
                     */
                    // @ts-ignore
                    verify(ssl: number /*long*/, x509: number /*byte*/[][], authAlgorithm: java.lang.String | string): boolean
                }
            }
        }
    }
}

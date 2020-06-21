declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace jsse {
                        /**
                         * SSLUtil implementation for JSSE.
                         * @author Harish Prabandham
                         * @author Costin Manolache
                         * @author Stefan Freyr Stefansson
                         * @author EKR
                         * @author Jan Luehe
                         */
                        // @ts-ignore
                        class JSSEUtil extends org.apache.tomcat.util.net.SSLUtilBase {
                            // @ts-ignore
                            constructor(certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate)
                            // @ts-ignore
                            constructor(certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate, warnOnSkip: boolean)
                            // @ts-ignore
                            getLog(): org.apache.juli.logging.Log
                            // @ts-ignore
                            getImplementedProtocols(): Array<java.lang.String | string>
                            // @ts-ignore
                            getImplementedCiphers(): Array<java.lang.String | string>
                            // @ts-ignore
                            isTls13Available(): boolean
                            // @ts-ignore
                            isTls13RenegAuthAvailable(): boolean
                            // @ts-ignore
                            public createSSLContext(negotiableProtocols: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): org.apache.tomcat.util.net.SSLContext
                            // @ts-ignore
                            public getKeyManagers(): javax.net.ssl.KeyManager[]
                            // @ts-ignore
                            public getTrustManagers(): javax.net.ssl.TrustManager[]
                            // @ts-ignore
                            public configureSessionContext(sslSessionContext: javax.net.ssl.SSLSessionContext): void
                            /**
                             * Return the initialization parameters for the TrustManager.
                             * Currently, only the default <code>PKIX</code> is supported.
                             * @param crlf The path to the CRL file.
                             * @param trustStore The configured TrustStore.
                             * @param revocationEnabled Should the JSSE provider perform revocation
                             *                           checks? Ignored if {#code crlf} is non-null.
                             *                           Configuration of revocation checks are expected
                             *                           to be via proprietary JSSE provider methods.
                             * @return The parameters including the CRLs and TrustStore.
                             * @throws Exception An error occurred
                             */
                            // @ts-ignore
                            getParameters(crlf: java.lang.String | string, trustStore: java.security.KeyStore, revocationEnabled: boolean): java.security.cert.CertPathParameters
                            /**
                             * Load the collection of CRLs.
                             * @param crlf The path to the CRL file.
                             * @return the CRLs collection
                             * @throws IOException Error reading CRL file
                             * @throws CRLException CRL error
                             * @throws CertificateException Error processing certificate
                             */
                            // @ts-ignore
                            getCRLs(crlf: java.lang.String | string): Array<any>
                        }
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Implementation of SSLSupport for APR.
                     * <p>
                     * TODO: Add a mechanism (or figure out how to use what we already have) to
                     * invalidate the session.
                     */
                    // @ts-ignore
                    class AprSSLSupport extends java.lang.Object implements org.apache.tomcat.util.net.SSLSupport {
                        // @ts-ignore
                        constructor(socketWrapper: org.apache.tomcat.util.net.AprEndpoint.AprSocketWrapper, clientCertProvider: java.lang.String | string)
                        // @ts-ignore
                        public getCipherSuite(): string
                        // @ts-ignore
                        public getPeerCertificateChain(): java.security.cert.X509Certificate[]
                        // @ts-ignore
                        public getKeySize(): number
                        // @ts-ignore
                        public getSessionId(): string
                        // @ts-ignore
                        public getProtocol(): string
                    }
                }
            }
        }
    }
}

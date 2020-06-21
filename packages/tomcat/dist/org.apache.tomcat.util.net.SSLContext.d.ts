declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * This interface is needed to override the default SSLContext class
                     * to allow SSL implementation pluggability without having to use JCE. With
                     * regular JSSE it will do nothing but delegate to the SSLContext.
                     */
                    // @ts-ignore
                    interface SSLContext {
                        // @ts-ignore
                        init(kms: javax.net.ssl.KeyManager[], tms: javax.net.ssl.TrustManager[], sr: java.security.SecureRandom): void
                        // @ts-ignore
                        destroy(): void
                        // @ts-ignore
                        getServerSessionContext(): javax.net.ssl.SSLSessionContext
                        // @ts-ignore
                        createSSLEngine(): javax.net.ssl.SSLEngine
                        // @ts-ignore
                        getServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                        // @ts-ignore
                        getSupportedSSLParameters(): javax.net.ssl.SSLParameters
                        // @ts-ignore
                        getCertificateChain(alias: java.lang.String | string): java.security.cert.X509Certificate[]
                        // @ts-ignore
                        getAcceptedIssuers(): java.security.cert.X509Certificate[]
                    }
                }
            }
        }
    }
}

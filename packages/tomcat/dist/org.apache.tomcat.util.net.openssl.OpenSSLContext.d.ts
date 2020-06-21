declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace openssl {
                        // @ts-ignore
                        class OpenSSLContext extends java.lang.Object implements org.apache.tomcat.util.net.SSLContext {
                            // @ts-ignore
                            constructor(certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate, negotiableProtocols: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                            // @ts-ignore
                            readonly cctx: number /*long*/
                            // @ts-ignore
                            readonly ctx: number /*long*/
                            // @ts-ignore
                            public getJsseCipherNames(): Array<java.lang.String | string>
                            // @ts-ignore
                            public getEnabledProtocol(): string
                            // @ts-ignore
                            public setEnabledProtocol(protocol: java.lang.String | string): void
                            // @ts-ignore
                            public destroy(): void
                            /**
                             * Setup the SSL_CTX.
                             * @param kms Must contain a KeyManager of the type
                             *             {#code OpenSSLKeyManager}
                             * @param tms Must contain a TrustManager of the type
                             *             {#code X509TrustManager}
                             * @param sr Is not used for this implementation.
                             */
                            // @ts-ignore
                            public init(kms: javax.net.ssl.KeyManager[], tms: javax.net.ssl.TrustManager[], sr: java.security.SecureRandom): void
                            // @ts-ignore
                            public getServerSessionContext(): javax.net.ssl.SSLSessionContext
                            // @ts-ignore
                            public createSSLEngine(): javax.net.ssl.SSLEngine
                            // @ts-ignore
                            public getServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                            // @ts-ignore
                            public getSupportedSSLParameters(): javax.net.ssl.SSLParameters
                            // @ts-ignore
                            public getCertificateChain(alias: java.lang.String | string): java.security.cert.X509Certificate[]
                            // @ts-ignore
                            public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                            // @ts-ignore
                            finalize(): void
                        }
                    }
                }
            }
        }
    }
}

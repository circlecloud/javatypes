declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace openssl {
                        // @ts-ignore
                        class OpenSSLUtil extends org.apache.tomcat.util.net.SSLUtilBase {
                            // @ts-ignore
                            constructor(certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate)
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
                        }
                    }
                }
            }
        }
    }
}

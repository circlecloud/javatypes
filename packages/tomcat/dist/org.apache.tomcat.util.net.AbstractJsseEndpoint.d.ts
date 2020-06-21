declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    abstract class AbstractJsseEndpoint<S, U> extends org.apache.tomcat.util.net.AbstractEndpoint<S, U> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getSslImplementationName(): string
                        // @ts-ignore
                        public setSslImplementationName(s: java.lang.String | string): void
                        // @ts-ignore
                        public getSslImplementation(): org.apache.tomcat.util.net.SSLImplementation
                        // @ts-ignore
                        public getSniParseLimit(): number /*int*/
                        // @ts-ignore
                        public setSniParseLimit(sniParseLimit: number /*int*/): void
                        // @ts-ignore
                        getSslConfigType(): org.apache.tomcat.util.net.SSLHostConfig.Type
                        // @ts-ignore
                        initialiseSsl(): void
                        // @ts-ignore
                        createSSLContext(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                        // @ts-ignore
                        destroySsl(): void
                        // @ts-ignore
                        releaseSSLContext(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                        // @ts-ignore
                        createSSLEngine(sniHostName: java.lang.String | string, clientRequestedCiphers: java.util.List<org.apache.tomcat.util.net.openssl.ciphers.Cipher> | Array<org.apache.tomcat.util.net.openssl.ciphers.Cipher>, clientRequestedApplicationProtocols: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): javax.net.ssl.SSLEngine
                        // @ts-ignore
                        public isAlpnSupported(): boolean
                        // @ts-ignore
                        public unbind(): void
                        // @ts-ignore
                        abstract getServerSocket(): java.nio.channels.NetworkChannel
                        // @ts-ignore
                        getLocalAddress(): java.net.InetSocketAddress
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace openssl {
                        /**
                         * Implements a {@link SSLEngine} using
                         * <a href="https://www.openssl.org/docs/crypto/BIO_s_bio.html#EXAMPLE">OpenSSL
                         * BIO abstractions</a>.
                         */
                        // @ts-ignore
                        class OpenSSLEngine extends javax.net.ssl.SSLEngine implements org.apache.tomcat.util.net.SSLUtil.ProtocolInfo {
                            // @ts-ignore
                            public static readonly AVAILABLE_CIPHER_SUITES: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>
                            // @ts-ignore
                            public static readonly IMPLEMENTED_PROTOCOLS_SET: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>
                            // @ts-ignore
                            public getNegotiatedProtocol(): string
                            /**
                             * Destroys this engine.
                             */
                            // @ts-ignore
                            public shutdown(): void
                            // @ts-ignore
                            public wrap(srcs: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, dst: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
                            // @ts-ignore
                            public unwrap(src: java.nio.ByteBuffer, dsts: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/): javax.net.ssl.SSLEngineResult
                            // @ts-ignore
                            public getDelegatedTask(): java.lang.Runnable
                            // @ts-ignore
                            public closeInbound(): void
                            // @ts-ignore
                            public isInboundDone(): boolean
                            // @ts-ignore
                            public closeOutbound(): void
                            // @ts-ignore
                            public isOutboundDone(): boolean
                            // @ts-ignore
                            public getSupportedCipherSuites(): string[]
                            // @ts-ignore
                            public getEnabledCipherSuites(): string[]
                            // @ts-ignore
                            public setEnabledCipherSuites(cipherSuites: java.lang.String[] | string[]): void
                            // @ts-ignore
                            public getSupportedProtocols(): string[]
                            // @ts-ignore
                            public getEnabledProtocols(): string[]
                            // @ts-ignore
                            public setEnabledProtocols(protocols: java.lang.String[] | string[]): void
                            // @ts-ignore
                            public getSession(): javax.net.ssl.SSLSession
                            // @ts-ignore
                            public beginHandshake(): void
                            // @ts-ignore
                            public getHandshakeStatus(): javax.net.ssl.SSLEngineResult.HandshakeStatus
                            // @ts-ignore
                            public setUseClientMode(clientMode: boolean): void
                            // @ts-ignore
                            public getUseClientMode(): boolean
                            // @ts-ignore
                            public setNeedClientAuth(b: boolean): void
                            // @ts-ignore
                            public getNeedClientAuth(): boolean
                            // @ts-ignore
                            public setWantClientAuth(b: boolean): void
                            // @ts-ignore
                            public getWantClientAuth(): boolean
                            // @ts-ignore
                            public setEnableSessionCreation(b: boolean): void
                            // @ts-ignore
                            public getEnableSessionCreation(): boolean
                            // @ts-ignore
                            finalize(): void
                        }
                    }
                }
            }
        }
    }
}

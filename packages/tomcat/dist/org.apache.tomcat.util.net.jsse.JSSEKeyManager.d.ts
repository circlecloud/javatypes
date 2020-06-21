declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace jsse {
                        /**
                         * X509KeyManager which allows selection of a specific keypair and certificate
                         * chain (identified by their keystore alias name) to be used by the server to
                         * authenticate itself to SSL clients.
                         * @author Jan Luehe
                         */
                        // @ts-ignore
                        class JSSEKeyManager extends javax.net.ssl.X509ExtendedKeyManager {
                            /**
                             * Constructor.
                             * @param mgr The X509KeyManager used as a delegate
                             * @param serverKeyAlias The alias name of the server's keypair and
                             *  supporting certificate chain
                             */
                            // @ts-ignore
                            constructor(mgr: javax.net.ssl.X509KeyManager, serverKeyAlias: java.lang.String | string)
                            /**
                             * Returns the server key alias that was provided in the constructor or the
                             * result from {@link X509KeyManager#chooseServerAlias(String, Principal[],
                             * Socket)} for the delegate if no alias is specified.
                             */
                            // @ts-ignore
                            public chooseServerAlias(keyType: java.lang.String | string, issuers: java.security.Principal[], socket: java.net.Socket): string
                            /**
                             * Returns the server key alias that was provided in the constructor or the
                             * result from {@link X509ExtendedKeyManager#chooseEngineServerAlias(String,
                             * Principal[], SSLEngine)} for the delegate if no alias is specified.
                             */
                            // @ts-ignore
                            public chooseEngineServerAlias(keyType: java.lang.String | string, issuers: java.security.Principal[], engine: javax.net.ssl.SSLEngine): string
                            // @ts-ignore
                            public chooseClientAlias(keyType: java.lang.String[] | string[], issuers: java.security.Principal[], socket: java.net.Socket): string
                            // @ts-ignore
                            public getCertificateChain(alias: java.lang.String | string): java.security.cert.X509Certificate[]
                            // @ts-ignore
                            public getClientAliases(keyType: java.lang.String | string, issuers: java.security.Principal[]): string[]
                            // @ts-ignore
                            public getServerAliases(keyType: java.lang.String | string, issuers: java.security.Principal[]): string[]
                            // @ts-ignore
                            public getPrivateKey(alias: java.lang.String | string): java.security.PrivateKey
                            // @ts-ignore
                            public chooseEngineClientAlias(keyType: java.lang.String[] | string[], issuers: java.security.Principal[], engine: javax.net.ssl.SSLEngine): string
                        }
                    }
                }
            }
        }
    }
}

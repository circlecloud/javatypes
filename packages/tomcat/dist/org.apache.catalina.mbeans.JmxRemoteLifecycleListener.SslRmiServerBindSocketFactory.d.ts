declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                namespace JmxRemoteLifecycleListener {
                    // @ts-ignore
                    class SslRmiServerBindSocketFactory extends javax.rmi.ssl.SslRMIServerSocketFactory {
                        // @ts-ignore
                        constructor(sslContext: javax.net.ssl.SSLContext, enabledCipherSuites: java.lang.String[] | string[], enabledProtocols: java.lang.String[] | string[], needClientAuth: boolean, address: java.lang.String | string)
                        // @ts-ignore
                        public createServerSocket(port: number /*int*/): java.net.ServerSocket
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    class SSLHostConfigCertificate extends java.lang.Object implements java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig, type: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type)
                        // @ts-ignore
                        public static readonly DEFAULT_TYPE: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                        // @ts-ignore
                        public getSslContext(): org.apache.tomcat.util.net.SSLContext
                        // @ts-ignore
                        public setSslContext(sslContext: org.apache.tomcat.util.net.SSLContext): void
                        // @ts-ignore
                        public getSSLHostConfig(): org.apache.tomcat.util.net.SSLHostConfig
                        // @ts-ignore
                        public getObjectName(): javax.management.ObjectName
                        // @ts-ignore
                        public setObjectName(oname: javax.management.ObjectName): void
                        // @ts-ignore
                        public getType(): org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                        // @ts-ignore
                        public getCertificateKeyPassword(): string
                        // @ts-ignore
                        public setCertificateKeyPassword(certificateKeyPassword: java.lang.String | string): void
                        // @ts-ignore
                        public setCertificateKeyAlias(certificateKeyAlias: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeyAlias(): string
                        // @ts-ignore
                        public setCertificateKeystoreFile(certificateKeystoreFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeystoreFile(): string
                        // @ts-ignore
                        public setCertificateKeystorePassword(certificateKeystorePassword: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeystorePassword(): string
                        // @ts-ignore
                        public setCertificateKeystoreProvider(certificateKeystoreProvider: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeystoreProvider(): string
                        // @ts-ignore
                        public setCertificateKeystoreType(certificateKeystoreType: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeystoreType(): string
                        // @ts-ignore
                        public setCertificateKeystore(certificateKeystore: java.security.KeyStore): void
                        // @ts-ignore
                        public getCertificateKeystore(): java.security.KeyStore
                        // @ts-ignore
                        public setCertificateChainFile(certificateChainFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateChainFile(): string
                        // @ts-ignore
                        public setCertificateFile(certificateFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateFile(): string
                        // @ts-ignore
                        public setCertificateKeyFile(certificateKeyFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeyFile(): string
                    }
                }
            }
        }
    }
}

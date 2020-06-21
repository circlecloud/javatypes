declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Represents the TLS configuration for a virtual host.
                     */
                    // @ts-ignore
                    class SSLHostConfig extends java.lang.Object implements java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly DEFAULT_SSL_HOST_NAME: java.lang.String | string
                        // @ts-ignore
                        static readonly SSL_PROTO_ALL_SET: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>
                        // @ts-ignore
                        public getOpenSslConfContext(): number
                        // @ts-ignore
                        public setOpenSslConfContext(openSslConfContext: java.lang.Long | number): void
                        // @ts-ignore
                        public getOpenSslContext(): number
                        // @ts-ignore
                        public setOpenSslContext(openSslContext: java.lang.Long | number): void
                        // @ts-ignore
                        public getConfigType(): string
                        // @ts-ignore
                        public setConfigType(configType: org.apache.tomcat.util.net.SSLHostConfig.Type): void
                        /**
                         * @see SSLUtil#getEnabledProtocols()
                         * @return The protocols enabled for this TLS virtual host
                         */
                        // @ts-ignore
                        public getEnabledProtocols(): string[]
                        // @ts-ignore
                        public setEnabledProtocols(enabledProtocols: java.lang.String[] | string[]): void
                        /**
                         * @see SSLUtil#getEnabledCiphers()
                         * @return The ciphers enabled for this TLS virtual host
                         */
                        // @ts-ignore
                        public getEnabledCiphers(): string[]
                        // @ts-ignore
                        public setEnabledCiphers(enabledCiphers: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public getObjectName(): javax.management.ObjectName
                        // @ts-ignore
                        public setObjectName(oname: javax.management.ObjectName): void
                        // @ts-ignore
                        public addCertificate(certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate): void
                        // @ts-ignore
                        public getOpenSslConf(): org.apache.tomcat.util.net.openssl.OpenSSLConf
                        // @ts-ignore
                        public setOpenSslConf(conf: org.apache.tomcat.util.net.openssl.OpenSSLConf): void
                        // @ts-ignore
                        public getCertificates(): Array<org.apache.tomcat.util.net.SSLHostConfigCertificate>
                        // @ts-ignore
                        public getCertificates(createDefaultIfEmpty: boolean): Array<org.apache.tomcat.util.net.SSLHostConfigCertificate>
                        // @ts-ignore
                        public getCertificateKeyPassword(): string
                        // @ts-ignore
                        public setCertificateKeyPassword(certificateKeyPassword: java.lang.String | string): void
                        // @ts-ignore
                        public setCertificateRevocationListFile(certificateRevocationListFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateRevocationListFile(): string
                        // @ts-ignore
                        public setCertificateVerification(certificateVerification: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateVerification(): org.apache.tomcat.util.net.SSLHostConfig.CertificateVerification
                        // @ts-ignore
                        public setCertificateVerificationAsString(certificateVerification: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateVerificationAsString(): string
                        // @ts-ignore
                        public setCertificateVerificationDepth(certificateVerificationDepth: number /*int*/): void
                        // @ts-ignore
                        public getCertificateVerificationDepth(): number /*int*/
                        // @ts-ignore
                        public isCertificateVerificationDepthConfigured(): boolean
                        /**
                         * Set the new cipher configuration. Note: Regardless of the format used to
                         * set the configuration, it is always stored in OpenSSL format.
                         * @param ciphersList The new cipher configuration in OpenSSL or JSSE format
                         */
                        // @ts-ignore
                        public setCiphers(ciphersList: java.lang.String | string): void
                        /**
                         * @return An OpenSSL cipher string for the current configuration.
                         */
                        // @ts-ignore
                        public getCiphers(): string
                        // @ts-ignore
                        public getCipherList(): java.util.LinkedHashSet<org.apache.tomcat.util.net.openssl.ciphers.Cipher>
                        /**
                         * Obtain the list of JSSE cipher names for the current configuration.
                         * Ciphers included in the configuration but not supported by JSSE will be
                         * excluded from this list.
                         * @return A list of the JSSE cipher names
                         */
                        // @ts-ignore
                        public getJsseCipherNames(): Array<java.lang.String | string>
                        // @ts-ignore
                        public setHonorCipherOrder(honorCipherOrder: boolean): void
                        // @ts-ignore
                        public getHonorCipherOrder(): boolean
                        // @ts-ignore
                        public setHostName(hostName: java.lang.String | string): void
                        // @ts-ignore
                        public getHostName(): string
                        // @ts-ignore
                        public setProtocols(input: java.lang.String | string): void
                        // @ts-ignore
                        public getProtocols(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getCertificateKeyAlias(): string
                        // @ts-ignore
                        public setCertificateKeyAlias(certificateKeyAlias: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeystoreFile(): string
                        // @ts-ignore
                        public setCertificateKeystoreFile(certificateKeystoreFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeystorePassword(): string
                        // @ts-ignore
                        public setCertificateKeystorePassword(certificateKeystorePassword: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeystoreProvider(): string
                        // @ts-ignore
                        public setCertificateKeystoreProvider(certificateKeystoreProvider: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeystoreType(): string
                        // @ts-ignore
                        public setCertificateKeystoreType(certificateKeystoreType: java.lang.String | string): void
                        // @ts-ignore
                        public setKeyManagerAlgorithm(keyManagerAlgorithm: java.lang.String | string): void
                        // @ts-ignore
                        public getKeyManagerAlgorithm(): string
                        // @ts-ignore
                        public setRevocationEnabled(revocationEnabled: boolean): void
                        // @ts-ignore
                        public getRevocationEnabled(): boolean
                        // @ts-ignore
                        public setSessionCacheSize(sessionCacheSize: number /*int*/): void
                        // @ts-ignore
                        public getSessionCacheSize(): number /*int*/
                        // @ts-ignore
                        public setSessionTimeout(sessionTimeout: number /*int*/): void
                        // @ts-ignore
                        public getSessionTimeout(): number /*int*/
                        // @ts-ignore
                        public setSslProtocol(sslProtocol: java.lang.String | string): void
                        // @ts-ignore
                        public getSslProtocol(): string
                        // @ts-ignore
                        public setTrustManagerClassName(trustManagerClassName: java.lang.String | string): void
                        // @ts-ignore
                        public getTrustManagerClassName(): string
                        // @ts-ignore
                        public setTruststoreAlgorithm(truststoreAlgorithm: java.lang.String | string): void
                        // @ts-ignore
                        public getTruststoreAlgorithm(): string
                        // @ts-ignore
                        public setTruststoreFile(truststoreFile: java.lang.String | string): void
                        // @ts-ignore
                        public getTruststoreFile(): string
                        // @ts-ignore
                        public setTruststorePassword(truststorePassword: java.lang.String | string): void
                        // @ts-ignore
                        public getTruststorePassword(): string
                        // @ts-ignore
                        public setTruststoreProvider(truststoreProvider: java.lang.String | string): void
                        // @ts-ignore
                        public getTruststoreProvider(): string
                        // @ts-ignore
                        public setTruststoreType(truststoreType: java.lang.String | string): void
                        // @ts-ignore
                        public getTruststoreType(): string
                        // @ts-ignore
                        public setTrustStore(truststore: java.security.KeyStore): void
                        // @ts-ignore
                        public getTruststore(): java.security.KeyStore
                        // @ts-ignore
                        public getCertificateChainFile(): string
                        // @ts-ignore
                        public setCertificateChainFile(certificateChainFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateFile(): string
                        // @ts-ignore
                        public setCertificateFile(certificateFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateKeyFile(): string
                        // @ts-ignore
                        public setCertificateKeyFile(certificateKeyFile: java.lang.String | string): void
                        // @ts-ignore
                        public setCertificateRevocationListPath(certificateRevocationListPath: java.lang.String | string): void
                        // @ts-ignore
                        public getCertificateRevocationListPath(): string
                        // @ts-ignore
                        public setCaCertificateFile(caCertificateFile: java.lang.String | string): void
                        // @ts-ignore
                        public getCaCertificateFile(): string
                        // @ts-ignore
                        public setCaCertificatePath(caCertificatePath: java.lang.String | string): void
                        // @ts-ignore
                        public getCaCertificatePath(): string
                        // @ts-ignore
                        public setDisableCompression(disableCompression: boolean): void
                        // @ts-ignore
                        public getDisableCompression(): boolean
                        // @ts-ignore
                        public setDisableSessionTickets(disableSessionTickets: boolean): void
                        // @ts-ignore
                        public getDisableSessionTickets(): boolean
                        // @ts-ignore
                        public setInsecureRenegotiation(insecureRenegotiation: boolean): void
                        // @ts-ignore
                        public getInsecureRenegotiation(): boolean
                        // @ts-ignore
                        public static adjustRelativePath(path: java.lang.String | string): string
                    }
                }
            }
        }
    }
}

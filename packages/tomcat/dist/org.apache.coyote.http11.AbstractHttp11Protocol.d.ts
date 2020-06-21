declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                // @ts-ignore
                abstract class AbstractHttp11Protocol<S> extends org.apache.coyote.AbstractProtocol<S> {
                    // @ts-ignore
                    constructor(endpoint: org.apache.tomcat.util.net.AbstractEndpoint<S, any>)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public init(): void
                    // @ts-ignore
                    getProtocolName(): string
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Over-ridden here to make the method visible to nested classes.
                     */
                    // @ts-ignore
                    getEndpoint(): org.apache.tomcat.util.net.AbstractEndpoint<S, any>
                    // @ts-ignore
                    public getRelaxedPathChars(): string
                    // @ts-ignore
                    public setRelaxedPathChars(relaxedPathChars: java.lang.String | string): void
                    // @ts-ignore
                    public getRelaxedQueryChars(): string
                    // @ts-ignore
                    public setRelaxedQueryChars(relaxedQueryChars: java.lang.String | string): void
                    /**
                     * Will Tomcat accept an HTTP 1.1 request where the host header does not
                     * agree with the host specified (if any) in the request line?
                     * @return {#code true} if Tomcat will allow such requests, otherwise
                     *          {@code false}
                     */
                    // @ts-ignore
                    public getAllowHostHeaderMismatch(): boolean
                    /**
                     * Will Tomcat accept an HTTP 1.1 request where the host header does not
                     * agree with the host specified (if any) in the request line?
                     * @param allowHostHeaderMismatch {#code true} to allow such requests,
                     *                                 {@code false} to reject them with a 400
                     */
                    // @ts-ignore
                    public setAllowHostHeaderMismatch(allowHostHeaderMismatch: boolean): void
                    /**
                     * If an HTTP request is received that contains an illegal header name (i.e.
                     * the header name is not a token) will the request be rejected (with a 400
                     * response) or will the illegal header be ignored.
                     * @return {#code true} if the request will be rejected or {@code false} if
                     *          the header will be ignored
                     */
                    // @ts-ignore
                    public getRejectIllegalHeaderName(): boolean
                    /**
                     * If an HTTP request is received that contains an illegal header name (i.e.
                     * the header name is not a token) should the request be rejected (with a
                     * 400 response) or should the illegal header be ignored.
                     * @param rejectIllegalHeaderName   {#code true} to reject requests with
                     *                                   illegal header names, {@code false} to
                     *                                   ignore the header
                     */
                    // @ts-ignore
                    public setRejectIllegalHeaderName(rejectIllegalHeaderName: boolean): void
                    /**
                     * Return the maximum size of the post which will be saved during FORM or
                     * CLIENT-CERT authentication.
                     * @return The size in bytes
                     */
                    // @ts-ignore
                    public getMaxSavePostSize(): number /*int*/
                    /**
                     * Set the maximum size of a POST which will be buffered during FORM or
                     * CLIENT-CERT authentication. When a POST is received where the security
                     * constraints require a client certificate, the POST body needs to be
                     * buffered while an SSL handshake takes place to obtain the certificate. A
                     * similar buffering is required during FDORM auth.
                     * @param maxSavePostSize The maximum size POST body to buffer in bytes
                     */
                    // @ts-ignore
                    public setMaxSavePostSize(maxSavePostSize: number /*int*/): void
                    // @ts-ignore
                    public getMaxHttpHeaderSize(): number /*int*/
                    // @ts-ignore
                    public setMaxHttpHeaderSize(valueI: number /*int*/): void
                    /**
                     * Specifies a different (usually longer) connection timeout during data
                     * upload. Default is 5 minutes as in Apache HTTPD server.
                     * @return The timeout in milliseconds
                     */
                    // @ts-ignore
                    public getConnectionUploadTimeout(): number /*int*/
                    /**
                     * Set the upload timeout.
                     * @param timeout Upload timeout in milliseconds
                     */
                    // @ts-ignore
                    public setConnectionUploadTimeout(timeout: number /*int*/): void
                    /**
                     * Get the flag that controls upload time-outs. If true, the
                     * connectionUploadTimeout will be ignored and the regular socket timeout
                     * will be used for the full duration of the connection.
                     * @return {#code true} if the separate upload timeout is disabled
                     */
                    // @ts-ignore
                    public getDisableUploadTimeout(): boolean
                    /**
                     * Set the flag to control whether a separate connection timeout is used
                     * during upload of a request body.
                     * @param isDisabled {#code true} if the separate upload timeout should be
                     *                    disabled
                     */
                    // @ts-ignore
                    public setDisableUploadTimeout(isDisabled: boolean): void
                    // @ts-ignore
                    public setCompression(compression: java.lang.String | string): void
                    // @ts-ignore
                    public getCompression(): string
                    // @ts-ignore
                    getCompressionLevel(): number /*int*/
                    // @ts-ignore
                    public getNoCompressionUserAgents(): string
                    // @ts-ignore
                    getNoCompressionUserAgentsPattern(): java.util.regex.Pattern
                    // @ts-ignore
                    public setNoCompressionUserAgents(noCompressionUserAgents: java.lang.String | string): void
                    // @ts-ignore
                    public getCompressibleMimeType(): string
                    // @ts-ignore
                    public setCompressibleMimeType(valueS: java.lang.String | string): void
                    // @ts-ignore
                    public getCompressibleMimeTypes(): string[]
                    // @ts-ignore
                    public getCompressionMinSize(): number /*int*/
                    // @ts-ignore
                    public setCompressionMinSize(compressionMinSize: number /*int*/): void
                    // @ts-ignore
                    public useCompression(request: org.apache.coyote.Request, response: org.apache.coyote.Response): boolean
                    /**
                     * Get the string form of the regular expression that defines the User
                     * agents which should be restricted to HTTP/1.0 support.
                     * @return The regular expression as a String
                     */
                    // @ts-ignore
                    public getRestrictedUserAgents(): string
                    // @ts-ignore
                    getRestrictedUserAgentsPattern(): java.util.regex.Pattern
                    /**
                     * Set restricted user agent list (which will downgrade the connector
                     * to HTTP/1.0 mode). Regular expression as supported by {@link Pattern}.
                     * @param restrictedUserAgents The regular expression as supported by
                     *                              {#link Pattern} for the user agents e.g.
                     *                              "gorilla|desesplorer|tigrus"
                     */
                    // @ts-ignore
                    public setRestrictedUserAgents(restrictedUserAgents: java.lang.String | string): void
                    // @ts-ignore
                    public getServer(): string
                    /**
                     * Set the server header name.
                     * @param server The new value to use for the server header
                     */
                    // @ts-ignore
                    public setServer(server: java.lang.String | string): void
                    /**
                     * Should application provider values for the HTTP Server header be removed.
                     * Note that if {@link #server} is set, any application provided value will
                     * be over-ridden.
                     * @return {#code true} if application provided values should be removed,
                     *          otherwise {@code false}
                     */
                    // @ts-ignore
                    public getServerRemoveAppProvidedValues(): boolean
                    // @ts-ignore
                    public setServerRemoveAppProvidedValues(serverRemoveAppProvidedValues: boolean): void
                    // @ts-ignore
                    public getMaxTrailerSize(): number /*int*/
                    // @ts-ignore
                    public setMaxTrailerSize(maxTrailerSize: number /*int*/): void
                    // @ts-ignore
                    public getMaxExtensionSize(): number /*int*/
                    // @ts-ignore
                    public setMaxExtensionSize(maxExtensionSize: number /*int*/): void
                    // @ts-ignore
                    public getMaxSwallowSize(): number /*int*/
                    // @ts-ignore
                    public setMaxSwallowSize(maxSwallowSize: number /*int*/): void
                    // @ts-ignore
                    public getSecure(): boolean
                    // @ts-ignore
                    public setSecure(b: boolean): void
                    // @ts-ignore
                    public setAllowedTrailerHeaders(commaSeparatedHeaders: java.lang.String | string): void
                    // @ts-ignore
                    getAllowedTrailerHeadersInternal(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getAllowedTrailerHeaders(): string
                    // @ts-ignore
                    public addAllowedTrailerHeader(header: java.lang.String | string): void
                    // @ts-ignore
                    public removeAllowedTrailerHeader(header: java.lang.String | string): void
                    // @ts-ignore
                    public addUpgradeProtocol(upgradeProtocol: org.apache.coyote.UpgradeProtocol): void
                    // @ts-ignore
                    public findUpgradeProtocols(): org.apache.coyote.UpgradeProtocol[]
                    // @ts-ignore
                    public getNegotiatedProtocol(negotiatedName: java.lang.String | string): org.apache.coyote.UpgradeProtocol
                    // @ts-ignore
                    public getUpgradeProtocol(upgradedName: java.lang.String | string): org.apache.coyote.UpgradeProtocol
                    // @ts-ignore
                    public isSSLEnabled(): boolean
                    // @ts-ignore
                    public setSSLEnabled(SSLEnabled: boolean): void
                    // @ts-ignore
                    public getUseSendfile(): boolean
                    // @ts-ignore
                    public setUseSendfile(useSendfile: boolean): void
                    /**
                     * @return The maximum number of requests which can be performed over a
                     *          keep-alive connection. The default is the same as for Apache HTTP
                     *          Server (100).
                     */
                    // @ts-ignore
                    public getMaxKeepAliveRequests(): number /*int*/
                    /**
                     * Set the maximum number of Keep-Alive requests to allow.
                     * This is to safeguard from DoS attacks. Setting to a negative
                     * value disables the limit.
                     * @param mkar The new maximum number of Keep-Alive requests allowed
                     */
                    // @ts-ignore
                    public setMaxKeepAliveRequests(mkar: number /*int*/): void
                    // @ts-ignore
                    public getDefaultSSLHostConfigName(): string
                    // @ts-ignore
                    public setDefaultSSLHostConfigName(defaultSSLHostConfigName: java.lang.String | string): void
                    // @ts-ignore
                    public addSslHostConfig(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                    // @ts-ignore
                    public findSslHostConfigs(): org.apache.tomcat.util.net.SSLHostConfig[]
                    // @ts-ignore
                    public reloadSslHostConfigs(): void
                    // @ts-ignore
                    public reloadSslHostConfig(hostName: java.lang.String | string): void
                    // @ts-ignore
                    public getSslEnabledProtocols(): string
                    // @ts-ignore
                    public setSslEnabledProtocols(enabledProtocols: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLProtocol(): string
                    // @ts-ignore
                    public setSSLProtocol(sslProtocol: java.lang.String | string): void
                    // @ts-ignore
                    public getKeystoreFile(): string
                    // @ts-ignore
                    public setKeystoreFile(keystoreFile: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLCertificateChainFile(): string
                    // @ts-ignore
                    public setSSLCertificateChainFile(certificateChainFile: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLCertificateFile(): string
                    // @ts-ignore
                    public setSSLCertificateFile(certificateFile: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLCertificateKeyFile(): string
                    // @ts-ignore
                    public setSSLCertificateKeyFile(certificateKeyFile: java.lang.String | string): void
                    // @ts-ignore
                    public getAlgorithm(): string
                    // @ts-ignore
                    public setAlgorithm(keyManagerAlgorithm: java.lang.String | string): void
                    // @ts-ignore
                    public getClientAuth(): string
                    // @ts-ignore
                    public setClientAuth(certificateVerification: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLVerifyClient(): string
                    // @ts-ignore
                    public setSSLVerifyClient(certificateVerification: java.lang.String | string): void
                    // @ts-ignore
                    public getTrustMaxCertLength(): number /*int*/
                    // @ts-ignore
                    public setTrustMaxCertLength(certificateVerificationDepth: number /*int*/): void
                    // @ts-ignore
                    public getSSLVerifyDepth(): number /*int*/
                    // @ts-ignore
                    public setSSLVerifyDepth(certificateVerificationDepth: number /*int*/): void
                    // @ts-ignore
                    public getUseServerCipherSuitesOrder(): boolean
                    // @ts-ignore
                    public setUseServerCipherSuitesOrder(honorCipherOrder: boolean): void
                    // @ts-ignore
                    public getSSLHonorCipherOrder(): boolean
                    // @ts-ignore
                    public setSSLHonorCipherOrder(honorCipherOrder: boolean): void
                    // @ts-ignore
                    public getCiphers(): string
                    // @ts-ignore
                    public setCiphers(ciphers: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLCipherSuite(): string
                    // @ts-ignore
                    public setSSLCipherSuite(ciphers: java.lang.String | string): void
                    // @ts-ignore
                    public getKeystorePass(): string
                    // @ts-ignore
                    public setKeystorePass(certificateKeystorePassword: java.lang.String | string): void
                    // @ts-ignore
                    public getKeyPass(): string
                    // @ts-ignore
                    public setKeyPass(certificateKeyPassword: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLPassword(): string
                    // @ts-ignore
                    public setSSLPassword(certificateKeyPassword: java.lang.String | string): void
                    // @ts-ignore
                    public getCrlFile(): string
                    // @ts-ignore
                    public setCrlFile(certificateRevocationListFile: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLCARevocationFile(): string
                    // @ts-ignore
                    public setSSLCARevocationFile(certificateRevocationListFile: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLCARevocationPath(): string
                    // @ts-ignore
                    public setSSLCARevocationPath(certificateRevocationListPath: java.lang.String | string): void
                    // @ts-ignore
                    public getKeystoreType(): string
                    // @ts-ignore
                    public setKeystoreType(certificateKeystoreType: java.lang.String | string): void
                    // @ts-ignore
                    public getKeystoreProvider(): string
                    // @ts-ignore
                    public setKeystoreProvider(certificateKeystoreProvider: java.lang.String | string): void
                    // @ts-ignore
                    public getKeyAlias(): string
                    // @ts-ignore
                    public setKeyAlias(certificateKeyAlias: java.lang.String | string): void
                    // @ts-ignore
                    public getTruststoreAlgorithm(): string
                    // @ts-ignore
                    public setTruststoreAlgorithm(truststoreAlgorithm: java.lang.String | string): void
                    // @ts-ignore
                    public getTruststoreFile(): string
                    // @ts-ignore
                    public setTruststoreFile(truststoreFile: java.lang.String | string): void
                    // @ts-ignore
                    public getTruststorePass(): string
                    // @ts-ignore
                    public setTruststorePass(truststorePassword: java.lang.String | string): void
                    // @ts-ignore
                    public getTruststoreType(): string
                    // @ts-ignore
                    public setTruststoreType(truststoreType: java.lang.String | string): void
                    // @ts-ignore
                    public getTruststoreProvider(): string
                    // @ts-ignore
                    public setTruststoreProvider(truststoreProvider: java.lang.String | string): void
                    // @ts-ignore
                    public getSslProtocol(): string
                    // @ts-ignore
                    public setSslProtocol(sslProtocol: java.lang.String | string): void
                    // @ts-ignore
                    public getSessionCacheSize(): number /*int*/
                    // @ts-ignore
                    public setSessionCacheSize(sessionCacheSize: number /*int*/): void
                    // @ts-ignore
                    public getSessionTimeout(): number /*int*/
                    // @ts-ignore
                    public setSessionTimeout(sessionTimeout: number /*int*/): void
                    // @ts-ignore
                    public getSSLCACertificatePath(): string
                    // @ts-ignore
                    public setSSLCACertificatePath(caCertificatePath: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLCACertificateFile(): string
                    // @ts-ignore
                    public setSSLCACertificateFile(caCertificateFile: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLDisableCompression(): boolean
                    // @ts-ignore
                    public setSSLDisableCompression(disableCompression: boolean): void
                    // @ts-ignore
                    public getSSLDisableSessionTickets(): boolean
                    // @ts-ignore
                    public setSSLDisableSessionTickets(disableSessionTickets: boolean): void
                    // @ts-ignore
                    public getTrustManagerClassName(): string
                    // @ts-ignore
                    public setTrustManagerClassName(trustManagerClassName: java.lang.String | string): void
                    // @ts-ignore
                    createProcessor(): org.apache.coyote.Processor
                    // @ts-ignore
                    createUpgradeProcessor(socket: org.apache.tomcat.util.net.SocketWrapperBase<any>, upgradeToken: org.apache.coyote.UpgradeToken): org.apache.coyote.Processor
                }
            }
        }
    }
}

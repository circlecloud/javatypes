declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http2 {
                // @ts-ignore
                class Http2Protocol extends java.lang.Object implements org.apache.coyote.UpgradeProtocol {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getHttpUpgradeName(isSSLEnabled: boolean): string
                    // @ts-ignore
                    public getAlpnIdentifier(): number /*byte*/[]
                    // @ts-ignore
                    public getAlpnName(): string
                    // @ts-ignore
                    public getProcessor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>, adapter: org.apache.coyote.Adapter): org.apache.coyote.Processor
                    // @ts-ignore
                    public getInternalUpgradeHandler(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>, adapter: org.apache.coyote.Adapter, coyoteRequest: org.apache.coyote.Request): org.apache.coyote.http11.upgrade.InternalHttpUpgradeHandler
                    // @ts-ignore
                    public accept(request: org.apache.coyote.Request): boolean
                    // @ts-ignore
                    public getReadTimeout(): number /*long*/
                    // @ts-ignore
                    public setReadTimeout(readTimeout: number /*long*/): void
                    // @ts-ignore
                    public getWriteTimeout(): number /*long*/
                    // @ts-ignore
                    public setWriteTimeout(writeTimeout: number /*long*/): void
                    // @ts-ignore
                    public getKeepAliveTimeout(): number /*long*/
                    // @ts-ignore
                    public setKeepAliveTimeout(keepAliveTimeout: number /*long*/): void
                    // @ts-ignore
                    public getStreamReadTimeout(): number /*long*/
                    // @ts-ignore
                    public setStreamReadTimeout(streamReadTimeout: number /*long*/): void
                    // @ts-ignore
                    public getStreamWriteTimeout(): number /*long*/
                    // @ts-ignore
                    public setStreamWriteTimeout(streamWriteTimeout: number /*long*/): void
                    // @ts-ignore
                    public getMaxConcurrentStreams(): number /*long*/
                    // @ts-ignore
                    public setMaxConcurrentStreams(maxConcurrentStreams: number /*long*/): void
                    // @ts-ignore
                    public getMaxConcurrentStreamExecution(): number /*int*/
                    // @ts-ignore
                    public setMaxConcurrentStreamExecution(maxConcurrentStreamExecution: number /*int*/): void
                    // @ts-ignore
                    public getInitialWindowSize(): number /*int*/
                    // @ts-ignore
                    public setInitialWindowSize(initialWindowSize: number /*int*/): void
                    // @ts-ignore
                    public getUseSendfile(): boolean
                    // @ts-ignore
                    public setUseSendfile(useSendfile: boolean): void
                    // @ts-ignore
                    public setAllowedTrailerHeaders(commaSeparatedHeaders: java.lang.String | string): void
                    // @ts-ignore
                    public getAllowedTrailerHeaders(): string
                    // @ts-ignore
                    public setMaxHeaderCount(maxHeaderCount: number /*int*/): void
                    // @ts-ignore
                    public getMaxHeaderCount(): number /*int*/
                    // @ts-ignore
                    public setMaxHeaderSize(maxHeaderSize: number /*int*/): void
                    // @ts-ignore
                    public getMaxHeaderSize(): number /*int*/
                    // @ts-ignore
                    public setMaxTrailerCount(maxTrailerCount: number /*int*/): void
                    // @ts-ignore
                    public getMaxTrailerCount(): number /*int*/
                    // @ts-ignore
                    public setMaxTrailerSize(maxTrailerSize: number /*int*/): void
                    // @ts-ignore
                    public getMaxTrailerSize(): number /*int*/
                    // @ts-ignore
                    public getOverheadCountFactor(): number /*int*/
                    // @ts-ignore
                    public setOverheadCountFactor(overheadCountFactor: number /*int*/): void
                    // @ts-ignore
                    public setInitiatePingDisabled(initiatePingDisabled: boolean): void
                    // @ts-ignore
                    public getInitiatePingDisabled(): boolean
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
                }
            }
        }
    }
}

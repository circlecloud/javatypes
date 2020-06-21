declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                // @ts-ignore
                class Http11Processor extends org.apache.coyote.AbstractProcessor {
                    // @ts-ignore
                    constructor(protocol: org.apache.coyote.http11.AbstractHttp11Protocol<any>, adapter: org.apache.coyote.Adapter)
                    // @ts-ignore
                    public service(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                    /**
                     * When committing the response, we have to validate the set of headers, as
                     * well as setup the response filters.
                     */
                    // @ts-ignore
                    prepareResponse(): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation provides the server port from the local port.
                     */
                    // @ts-ignore
                    populatePort(): void
                    // @ts-ignore
                    flushBufferedWrite(): boolean
                    // @ts-ignore
                    dispatchEndRequest(): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                    // @ts-ignore
                    finishResponse(): void
                    // @ts-ignore
                    ack(): void
                    // @ts-ignore
                    flush(): void
                    // @ts-ignore
                    available(doRead: boolean): number /*int*/
                    // @ts-ignore
                    setRequestBody(body: org.apache.tomcat.util.buf.ByteChunk): void
                    // @ts-ignore
                    setSwallowResponse(): void
                    // @ts-ignore
                    disableSwallowRequest(): void
                    // @ts-ignore
                    sslReHandShake(): void
                    // @ts-ignore
                    isRequestBodyFullyRead(): boolean
                    // @ts-ignore
                    registerReadInterest(): void
                    // @ts-ignore
                    isReadyForWrite(): boolean
                    // @ts-ignore
                    public getUpgradeToken(): org.apache.coyote.UpgradeToken
                    // @ts-ignore
                    doHttpUpgrade(upgradeToken: org.apache.coyote.UpgradeToken): void
                    // @ts-ignore
                    public getLeftoverInput(): java.nio.ByteBuffer
                    // @ts-ignore
                    public isUpgrade(): boolean
                    // @ts-ignore
                    isTrailerFieldsReady(): boolean
                    // @ts-ignore
                    isTrailerFieldsSupported(): boolean
                    // @ts-ignore
                    public recycle(): void
                    // @ts-ignore
                    public pause(): void
                }
            }
        }
    }
}

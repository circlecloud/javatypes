declare namespace org {
    namespace apache {
        namespace coyote {
            namespace ajp {
                /**
                 * AJP Processor implementation.
                 */
                // @ts-ignore
                class AjpProcessor extends org.apache.coyote.AbstractProcessor {
                    // @ts-ignore
                    constructor(protocol: org.apache.coyote.ajp.AbstractAjpProtocol<any>, adapter: org.apache.coyote.Adapter)
                    // @ts-ignore
                    flushBufferedWrite(): boolean
                    // @ts-ignore
                    dispatchNonBlockingRead(): void
                    // @ts-ignore
                    dispatchEndRequest(): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                    // @ts-ignore
                    public service(socket: org.apache.tomcat.util.net.SocketWrapperBase<any>): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                    // @ts-ignore
                    public recycle(): void
                    // @ts-ignore
                    public pause(): void
                    /**
                     * Get more request body data from the web server and store it in the
                     * internal buffer.
                     * @param block <code>true</code> if this is blocking IO
                     * @return <code>true</code> if there is more data,
                     *   <code>false</code> if not.
                     * @throws IOException An IO error occurred
                     */
                    // @ts-ignore
                    refillReadBuffer(block: boolean): boolean
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation populates the server name from the local name
                     * provided by the AJP message.
                     */
                    // @ts-ignore
                    populateHost(): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation populates the server port from the local port
                     * provided by the AJP message.
                     */
                    // @ts-ignore
                    populatePort(): void
                    /**
                     * When committing the response, we have to validate the set of headers, as
                     * well as setup the response filters.
                     */
                    // @ts-ignore
                    prepareResponse(): void
                    /**
                     * Callback to write data from the buffer.
                     */
                    // @ts-ignore
                    flush(): void
                    /**
                     * Finish AJP response.
                     */
                    // @ts-ignore
                    finishResponse(): void
                    // @ts-ignore
                    ack(): void
                    // @ts-ignore
                    available(doRead: boolean): number /*int*/
                    // @ts-ignore
                    setRequestBody(body: org.apache.tomcat.util.buf.ByteChunk): void
                    // @ts-ignore
                    setSwallowResponse(): void
                    // @ts-ignore
                    disableSwallowRequest(): void
                    // @ts-ignore
                    getPopulateRequestAttributesFromSocket(): boolean
                    // @ts-ignore
                    populateRequestAttributeRemoteHost(): void
                    // @ts-ignore
                    populateSslRequestAttributes(): void
                    // @ts-ignore
                    isRequestBodyFullyRead(): boolean
                    // @ts-ignore
                    registerReadInterest(): void
                    // @ts-ignore
                    isReadyForWrite(): boolean
                    // @ts-ignore
                    isTrailerFieldsReady(): boolean
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}

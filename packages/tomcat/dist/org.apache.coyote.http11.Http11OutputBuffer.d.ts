declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                /**
                 * Provides buffering for the HTTP headers (allowing responses to be reset
                 * before they have been committed) and the link to the Socket for writing the
                 * headers (once committed) and the response body. Note that buffering of the
                 * response body happens at a higher level.
                 */
                // @ts-ignore
                class Http11OutputBuffer extends java.lang.Object implements org.apache.coyote.http11.HttpOutputBuffer {
                    // @ts-ignore
                    constructor(response: org.apache.coyote.Response, headerBufferSize: number /*int*/)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Associated Coyote response.
                     */
                    // @ts-ignore
                    readonly response: org.apache.coyote.Response
                    /**
                     * Finished flag.
                     */
                    // @ts-ignore
                    responseFinished: boolean
                    /**
                     * The buffer used for header composition.
                     */
                    // @ts-ignore
                    readonly headerBuffer: java.nio.ByteBuffer
                    /**
                     * Filter library for processing the response body.
                     */
                    // @ts-ignore
                    filterLibrary: org.apache.coyote.http11.OutputFilter[]
                    /**
                     * Active filters for the current request.
                     */
                    // @ts-ignore
                    activeFilters: org.apache.coyote.http11.OutputFilter[]
                    /**
                     * Index of the last active filter.
                     */
                    // @ts-ignore
                    lastActiveFilter: number /*int*/
                    /**
                     * Underlying output buffer.
                     */
                    // @ts-ignore
                    outputStreamOutputBuffer: org.apache.coyote.http11.HttpOutputBuffer
                    /**
                     * Wrapper for socket where data will be written to.
                     */
                    // @ts-ignore
                    socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>
                    /**
                     * Bytes written to client for the current request
                     */
                    // @ts-ignore
                    byteCount: number /*long*/
                    /**
                     * Add an output filter to the filter library. Note that calling this method
                     * resets the currently active filters to none.
                     * @param filter The filter to add
                     */
                    // @ts-ignore
                    public addFilter(filter: org.apache.coyote.http11.OutputFilter): void
                    /**
                     * Get filters.
                     * @return The current filter library containing all possible filters
                     */
                    // @ts-ignore
                    public getFilters(): org.apache.coyote.http11.OutputFilter[]
                    /**
                     * Add an output filter to the active filters for the current response.
                     * <p>
                     * The filter does not have to be present in {@link #getFilters()}.
                     * <p>
                     * A filter can only be added to a response once. If the filter has already
                     * been added to this response then this method will be a NO-OP.
                     * @param filter The filter to add
                     */
                    // @ts-ignore
                    public addActiveFilter(filter: org.apache.coyote.http11.OutputFilter): void
                    // @ts-ignore
                    public doWrite(chunk: java.nio.ByteBuffer): number /*int*/
                    // @ts-ignore
                    public getBytesWritten(): number /*long*/
                    /**
                     * Flush the response.
                     * @throws IOException an underlying I/O error occurred
                     */
                    // @ts-ignore
                    public flush(): void
                    // @ts-ignore
                    public end(): void
                    /**
                     * Recycle the output buffer. This should be called when closing the
                     * connection.
                     */
                    // @ts-ignore
                    public recycle(): void
                    /**
                     * End processing of current HTTP request.
                     * Note: All bytes of the current request should have been already
                     * consumed. This method only resets all the pointers so that we are ready
                     * to parse the next HTTP request.
                     */
                    // @ts-ignore
                    public nextRequest(): void
                    // @ts-ignore
                    public init(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>): void
                    // @ts-ignore
                    public sendAck(): void
                    /**
                     * Commit the response.
                     * @throws IOException an underlying I/O error occurred
                     */
                    // @ts-ignore
                    commit(): void
                    /**
                     * Send the response status line.
                     */
                    // @ts-ignore
                    public sendStatus(): void
                    /**
                     * Send a header.
                     * @param name Header name
                     * @param value Header value
                     */
                    // @ts-ignore
                    public sendHeader(name: org.apache.tomcat.util.buf.MessageBytes, value: org.apache.tomcat.util.buf.MessageBytes): void
                    /**
                     * End the header block.
                     */
                    // @ts-ignore
                    public endHeaders(): void
                    /**
                     * This method will write the contents of the specified byte
                     * buffer to the output stream, without filtering. This method is meant to
                     * be used to write the response header.
                     * @param b data to be written
                     */
                    // @ts-ignore
                    public write(b: number /*byte*/[]): void
                    /**
                     * Writes any remaining buffered data.
                     * @param block     Should this method block until the buffer is empty
                     * @return <code>true</code> if data remains in the buffer (which can only
                     *           happen in non-blocking mode) else <code>false</code>.
                     * @throws IOException Error writing data
                     */
                    // @ts-ignore
                    flushBuffer(block: boolean): boolean
                    /**
                     * Is standard Servlet blocking IO being used for output?
                     * @return <code>true</code> if this is blocking IO
                     */
                    // @ts-ignore
                    isBlocking(): boolean
                    // @ts-ignore
                    isReady(): boolean
                    // @ts-ignore
                    public hasDataToWrite(): boolean
                    // @ts-ignore
                    public registerWriteInterest(): void
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http2 {
                // @ts-ignore
                class Http2OutputBuffer extends java.lang.Object implements org.apache.coyote.http11.HttpOutputBuffer {
                    // @ts-ignore
                    constructor(coyoteResponse: org.apache.coyote.Response, streamOutputBuffer: org.apache.coyote.http2.Stream.StreamOutputBuffer)
                    /**
                     * Add a filter at the start of the existing processing chain. Subsequent
                     * calls to the {@link HttpOutputBuffer} methods of this object will be
                     * passed to the filter. If appropriate, the filter will then call the same
                     * method on the next HttpOutputBuffer in the chain until the call reaches
                     * the StreamOutputBuffer.
                     * @param filter    The filter to add to the start of the processing chain
                     */
                    // @ts-ignore
                    public addFilter(filter: org.apache.coyote.http11.OutputFilter): void
                    // @ts-ignore
                    public doWrite(chunk: java.nio.ByteBuffer): number /*int*/
                    // @ts-ignore
                    public getBytesWritten(): number /*long*/
                    // @ts-ignore
                    public end(): void
                    // @ts-ignore
                    public flush(): void
                }
            }
        }
    }
}

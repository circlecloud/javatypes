declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                /**
                 * Input filter interface.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                interface InputFilter extends org.apache.coyote.InputBuffer {
                    /**
                     * Some filters need additional parameters from the request.
                     * @param request The request to be associated with this filter
                     */
                    // @ts-ignore
                    setRequest(request: org.apache.coyote.Request): void
                    /**
                     * Make the filter ready to process the next request.
                     */
                    // @ts-ignore
                    recycle(): void
                    /**
                     * Get the name of the encoding handled by this filter.
                     * @return The encoding name as a byte chunk to facilitate comparison with
                     *          the value read from the HTTP headers which will also be a
                     *          ByteChunk
                     */
                    // @ts-ignore
                    getEncodingName(): org.apache.tomcat.util.buf.ByteChunk
                    /**
                     * Set the next buffer in the filter pipeline.
                     * @param buffer The next buffer
                     */
                    // @ts-ignore
                    setBuffer(buffer: org.apache.coyote.InputBuffer): void
                    /**
                     * End the current request.
                     * @return 0 is the expected return value. A positive value indicates that
                     *  too many bytes were read. This method is allowed to use buffer.doRead
                     *  to consume extra bytes. The result of this method can't be negative (if
                     *  an error happens, an IOException should be thrown instead).
                     * @throws IOException If an error happens
                     */
                    // @ts-ignore
                    end(): number /*long*/
                    /**
                     * Amount of bytes still available in a buffer.
                     * @return The number of bytes in the buffer
                     */
                    // @ts-ignore
                    available(): number /*int*/
                    /**
                     * Has the request body been read fully?
                     * @return {#code true} if the request body has been fully read, otherwise
                     *          {@code false}
                     */
                    // @ts-ignore
                    isFinished(): boolean
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                /**
                 * Output filter.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                interface OutputFilter extends org.apache.coyote.http11.HttpOutputBuffer {
                    /**
                     * Some filters need additional parameters from the response. All the
                     * necessary reading can occur in that method, as this method is called
                     * after the response header processing is complete.
                     * @param response The response to associate with this OutputFilter
                     */
                    // @ts-ignore
                    setResponse(response: org.apache.coyote.Response): void
                    /**
                     * Make the filter ready to process the next request.
                     */
                    // @ts-ignore
                    recycle(): void
                    /**
                     * Set the next buffer in the filter pipeline.
                     * @param buffer The next buffer instance
                     */
                    // @ts-ignore
                    setBuffer(buffer: org.apache.coyote.http11.HttpOutputBuffer): void
                }
            }
        }
    }
}

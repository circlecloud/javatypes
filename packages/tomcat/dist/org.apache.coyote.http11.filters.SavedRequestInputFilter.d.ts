declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Input filter responsible for replaying the request body when restoring the
                     * saved request after FORM authentication.
                     */
                    // @ts-ignore
                    class SavedRequestInputFilter extends java.lang.Object implements org.apache.coyote.http11.InputFilter {
                        /**
                         * Create a new SavedRequestInputFilter.
                         * @param input The saved request body to be replayed.
                         */
                        // @ts-ignore
                        constructor(input: org.apache.tomcat.util.buf.ByteChunk)
                        /**
                         * The original request body.
                         */
                        // @ts-ignore
                        input: org.apache.tomcat.util.buf.ByteChunk
                        // @ts-ignore
                        public doRead(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): number /*int*/
                        /**
                         * Set the content length on the request.
                         */
                        // @ts-ignore
                        public setRequest(request: org.apache.coyote.Request): void
                        /**
                         * Make the filter ready to process the next request.
                         */
                        // @ts-ignore
                        public recycle(): void
                        /**
                         * Return the name of the associated encoding; here, the value is null.
                         */
                        // @ts-ignore
                        public getEncodingName(): org.apache.tomcat.util.buf.ByteChunk
                        /**
                         * Set the next buffer in the filter pipeline (has no effect).
                         */
                        // @ts-ignore
                        public setBuffer(buffer: org.apache.coyote.InputBuffer): void
                        /**
                         * Amount of bytes still available in a buffer.
                         */
                        // @ts-ignore
                        public available(): number /*int*/
                        /**
                         * End the current request (has no effect).
                         */
                        // @ts-ignore
                        public end(): number /*long*/
                        // @ts-ignore
                        public isFinished(): boolean
                    }
                }
            }
        }
    }
}

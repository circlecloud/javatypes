declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Void input filter, which returns -1 when attempting a read. Used with a GET,
                     * HEAD, or a similar request.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class VoidInputFilter extends java.lang.Object implements org.apache.coyote.http11.InputFilter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly ENCODING_NAME: java.lang.String | string
                        // @ts-ignore
                        static readonly ENCODING: org.apache.tomcat.util.buf.ByteChunk
                        // @ts-ignore
                        public doRead(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): number /*int*/
                        /**
                         * Set the associated request.
                         */
                        // @ts-ignore
                        public setRequest(request: org.apache.coyote.Request): void
                        /**
                         * Set the next buffer in the filter pipeline.
                         */
                        // @ts-ignore
                        public setBuffer(buffer: org.apache.coyote.InputBuffer): void
                        /**
                         * Make the filter ready to process the next request.
                         */
                        // @ts-ignore
                        public recycle(): void
                        /**
                         * Return the name of the associated encoding; Here, the value is
                         * "void".
                         */
                        // @ts-ignore
                        public getEncodingName(): org.apache.tomcat.util.buf.ByteChunk
                        /**
                         * End the current request. It is acceptable to write extra bytes using
                         * buffer.doWrite during the execution of this method.
                         * @return Should return 0 unless the filter does some content length
                         *  delimitation, in which case the number is the amount of extra bytes or
                         *  missing bytes, which would indicate an error.
                         *  Note: It is recommended that extra bytes be swallowed by the filter.
                         */
                        // @ts-ignore
                        public end(): number /*long*/
                        // @ts-ignore
                        public available(): number /*int*/
                        // @ts-ignore
                        public isFinished(): boolean
                    }
                }
            }
        }
    }
}

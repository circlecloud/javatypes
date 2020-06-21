declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Identity output filter.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class IdentityOutputFilter extends java.lang.Object implements org.apache.coyote.http11.OutputFilter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Content length.
                         */
                        // @ts-ignore
                        contentLength: number /*long*/
                        /**
                         * Remaining bytes.
                         */
                        // @ts-ignore
                        remaining: number /*long*/
                        /**
                         * Next buffer in the pipeline.
                         */
                        // @ts-ignore
                        buffer: org.apache.coyote.http11.HttpOutputBuffer
                        // @ts-ignore
                        public doWrite(chunk: java.nio.ByteBuffer): number /*int*/
                        // @ts-ignore
                        public getBytesWritten(): number /*long*/
                        // @ts-ignore
                        public setResponse(response: org.apache.coyote.Response): void
                        // @ts-ignore
                        public setBuffer(buffer: org.apache.coyote.http11.HttpOutputBuffer): void
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public end(): void
                        // @ts-ignore
                        public recycle(): void
                    }
                }
            }
        }
    }
}

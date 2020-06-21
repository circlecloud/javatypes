declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Gzip output filter.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class GzipOutputFilter extends java.lang.Object implements org.apache.coyote.http11.OutputFilter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly log: org.apache.juli.logging.Log
                        /**
                         * Next buffer in the pipeline.
                         */
                        // @ts-ignore
                        buffer: org.apache.coyote.http11.HttpOutputBuffer
                        /**
                         * Compression output stream.
                         */
                        // @ts-ignore
                        compressionStream: java.util.zip.GZIPOutputStream
                        /**
                         * Fake internal output stream.
                         */
                        // @ts-ignore
                        readonly fakeOutputStream: java.io.OutputStream
                        // @ts-ignore
                        public doWrite(chunk: java.nio.ByteBuffer): number /*int*/
                        // @ts-ignore
                        public getBytesWritten(): number /*long*/
                        /**
                         * Added to allow flushing to happen for the gzip'ed outputstream
                         */
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public setResponse(response: org.apache.coyote.Response): void
                        // @ts-ignore
                        public setBuffer(buffer: org.apache.coyote.http11.HttpOutputBuffer): void
                        // @ts-ignore
                        public end(): void
                        /**
                         * Make the filter ready to process the next request.
                         */
                        // @ts-ignore
                        public recycle(): void
                    }
                }
            }
        }
    }
}

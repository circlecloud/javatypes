declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Chunked output filter.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class ChunkedOutputFilter extends java.lang.Object implements org.apache.coyote.http11.OutputFilter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Next buffer in the pipeline.
                         */
                        // @ts-ignore
                        buffer: org.apache.coyote.http11.HttpOutputBuffer
                        /**
                         * Chunk header.
                         */
                        // @ts-ignore
                        readonly chunkHeader: java.nio.ByteBuffer
                        // @ts-ignore
                        readonly lastChunk: java.nio.ByteBuffer
                        // @ts-ignore
                        readonly crlfChunk: java.nio.ByteBuffer
                        /**
                         * End chunk.
                         */
                        // @ts-ignore
                        readonly endChunk: java.nio.ByteBuffer
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

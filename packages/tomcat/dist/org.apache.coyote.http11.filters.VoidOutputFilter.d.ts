declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Void output filter, which silently swallows bytes written. Used with a 204
                     * status (no content) or a HEAD request.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class VoidOutputFilter extends java.lang.Object implements org.apache.coyote.http11.OutputFilter {
                        // @ts-ignore
                        constructor()
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
                        public recycle(): void
                        // @ts-ignore
                        public end(): void
                    }
                }
            }
        }
    }
}

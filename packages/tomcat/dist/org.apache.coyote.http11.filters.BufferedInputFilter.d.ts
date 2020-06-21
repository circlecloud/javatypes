declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Input filter responsible for reading and buffering the request body, so that
                     * it does not interfere with client SSL handshake messages.
                     */
                    // @ts-ignore
                    class BufferedInputFilter extends java.lang.Object implements org.apache.coyote.http11.InputFilter, org.apache.tomcat.util.net.ApplicationBufferHandler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the buffering limit. This should be reset every time the buffer is
                         * used.
                         * @param limit The maximum number of bytes that will be buffered
                         */
                        // @ts-ignore
                        public setLimit(limit: number /*int*/): void
                        /**
                         * Reads the request body and buffers it.
                         */
                        // @ts-ignore
                        public setRequest(request: org.apache.coyote.Request): void
                        /**
                         * Fills the given ByteBuffer with the buffered request body.
                         */
                        // @ts-ignore
                        public doRead(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): number /*int*/
                        // @ts-ignore
                        public setBuffer(buffer: org.apache.coyote.InputBuffer): void
                        // @ts-ignore
                        public recycle(): void
                        // @ts-ignore
                        public getEncodingName(): org.apache.tomcat.util.buf.ByteChunk
                        // @ts-ignore
                        public end(): number /*long*/
                        // @ts-ignore
                        public available(): number /*int*/
                        // @ts-ignore
                        public isFinished(): boolean
                        // @ts-ignore
                        public setByteBuffer(buffer: java.nio.ByteBuffer): void
                        // @ts-ignore
                        public getByteBuffer(): java.nio.ByteBuffer
                        // @ts-ignore
                        public expand(size: number /*int*/): void
                    }
                }
            }
        }
    }
}

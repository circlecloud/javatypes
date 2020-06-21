declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Identity input filter.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class IdentityInputFilter extends java.lang.Object implements org.apache.coyote.http11.InputFilter, org.apache.tomcat.util.net.ApplicationBufferHandler {
                        // @ts-ignore
                        constructor(maxSwallowSize: number /*int*/)
                        // @ts-ignore
                        static readonly ENCODING_NAME: java.lang.String | string
                        // @ts-ignore
                        static readonly ENCODING: org.apache.tomcat.util.buf.ByteChunk
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
                        buffer: org.apache.coyote.InputBuffer
                        /**
                         * ByteBuffer used to read leftover bytes.
                         */
                        // @ts-ignore
                        tempRead: java.nio.ByteBuffer
                        // @ts-ignore
                        public doRead(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): number /*int*/
                        /**
                         * Read the content length from the request.
                         */
                        // @ts-ignore
                        public setRequest(request: org.apache.coyote.Request): void
                        // @ts-ignore
                        public end(): number /*long*/
                        /**
                         * Amount of bytes still available in a buffer.
                         */
                        // @ts-ignore
                        public available(): number /*int*/
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
                         * "identity".
                         */
                        // @ts-ignore
                        public getEncodingName(): org.apache.tomcat.util.buf.ByteChunk
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

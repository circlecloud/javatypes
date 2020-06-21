declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    /**
                     * Chunked input filter. Parses chunked data according to
                     * <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.6.1">http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.6.1</a><br>
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class ChunkedInputFilter extends java.lang.Object implements org.apache.coyote.http11.InputFilter, org.apache.tomcat.util.net.ApplicationBufferHandler {
                        // @ts-ignore
                        constructor(maxTrailerSize: number /*int*/, allowedTrailerHeaders: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>, maxExtensionSize: number /*int*/, maxSwallowSize: number /*int*/)
                        // @ts-ignore
                        static readonly ENCODING_NAME: java.lang.String | string
                        // @ts-ignore
                        static readonly ENCODING: org.apache.tomcat.util.buf.ByteChunk
                        /**
                         * Next buffer in the pipeline.
                         */
                        // @ts-ignore
                        buffer: org.apache.coyote.InputBuffer
                        /**
                         * Number of bytes remaining in the current chunk.
                         */
                        // @ts-ignore
                        remaining: number /*int*/
                        /**
                         * Byte chunk used to read bytes.
                         */
                        // @ts-ignore
                        readChunk: java.nio.ByteBuffer
                        /**
                         * Flag set to true when the end chunk has been read.
                         */
                        // @ts-ignore
                        endChunk: boolean
                        /**
                         * Byte chunk used to store trailing headers.
                         */
                        // @ts-ignore
                        readonly trailingHeaders: org.apache.tomcat.util.buf.ByteChunk
                        /**
                         * Flag set to true if the next call to doRead() must parse a CRLF pair
                         * before doing anything else.
                         */
                        // @ts-ignore
                        needCRLFParse: boolean
                        // @ts-ignore
                        public doRead(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): number /*int*/
                        /**
                         * Read the content length from the request.
                         */
                        // @ts-ignore
                        public setRequest(request: org.apache.coyote.Request): void
                        /**
                         * End the current request.
                         */
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
                        /**
                         * Read bytes from the previous buffer.
                         * @return The byte count which has been read
                         * @throws IOException Read error
                         */
                        // @ts-ignore
                        readBytes(): number /*int*/
                        /**
                         * Parse the header of a chunk.
                         * A chunk header can look like one of the following:<br>
                         * A10CRLF<br>
                         * F23;chunk-extension to be ignoredCRLF
                         * <p>
                         * The letters before CRLF or ';' (whatever comes first) must be valid hex
                         * digits. We should not parse F23IAMGONNAMESSTHISUP34CRLF as a valid
                         * header according to the spec.
                         * @return <code>true</code> if the chunk header has been
                         *   successfully parsed
                         * @throws IOException Read error
                         */
                        // @ts-ignore
                        parseChunkHeader(): boolean
                        /**
                         * Parse CRLF at end of chunk.
                         * @param tolerant    Should tolerant parsing (LF and CRLF) be used? This
                         *                       is recommended (RFC2616, section 19.3) for message
                         *                       headers.
                         * @throws IOException An error occurred parsing CRLF
                         */
                        // @ts-ignore
                        parseCRLF(tolerant: boolean): void
                        /**
                         * Parse end chunk data.
                         * @throws IOException Error propagation
                         */
                        // @ts-ignore
                        parseEndChunk(): void
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

declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * All URL decoding happens here. This way we can reuse, review, optimize
                     * without adding complexity to the buffers.
                     * The conversion will modify the original buffer.
                     * @author Costin Manolache
                     */
                    // @ts-ignore
                    class UDecoder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly ALLOW_ENCODED_SLASH: boolean
                        /**
                         * URLDecode, will modify the source.
                         * @param mb The URL encoded bytes
                         * @param query <code>true</code> if this is a query string
                         * @throws IOException Invalid %xx URL encoding
                         */
                        // @ts-ignore
                        public convert(mb: org.apache.tomcat.util.buf.ByteChunk, query: boolean): void
                        /**
                         * In-buffer processing - the buffer will be modified.
                         * @param mb The URL encoded chars
                         * @param query <code>true</code> if this is a query string
                         * @throws IOException Invalid %xx URL encoding
                         */
                        // @ts-ignore
                        public convert(mb: org.apache.tomcat.util.buf.CharChunk, query: boolean): void
                        /**
                         * URLDecode, will modify the source
                         * @param mb The URL encoded String, bytes or chars
                         * @param query <code>true</code> if this is a query string
                         * @throws IOException Invalid %xx URL encoding
                         */
                        // @ts-ignore
                        public convert(mb: org.apache.tomcat.util.buf.MessageBytes, query: boolean): void
                        /**
                         * %xx decoding of a string. FIXME: this is inefficient.
                         * @param str The URL encoded string
                         * @param query <code>true</code> if this is a query string
                         * @return the decoded string
                         */
                        // @ts-ignore
                        public convert(str: java.lang.String | string, query: boolean): string
                        /**
                         * Decode and return the specified URL-encoded String.
                         * When the byte array is converted to a string, UTF-8 is used. This may
                         * be different than some other servers. It is assumed the string is not a
                         * query string.
                         * @param str The url-encoded string
                         * @return the decoded string
                         * @exception IllegalArgumentException if a '%' character is not followed
                         *  by a valid 2-digit hexadecimal number
                         */
                        // @ts-ignore
                        public static URLDecode(str: java.lang.String | string): string
                        /**
                         * Decode and return the specified URL-encoded String. It is assumed the
                         * string is not a query string.
                         * @param str The url-encoded string
                         * @param charset The character encoding to use; if null, UTF-8 is used.
                         * @return the decoded string
                         * @exception IllegalArgumentException if a '%' character is not followed
                         *  by a valid 2-digit hexadecimal number
                         */
                        // @ts-ignore
                        public static URLDecode(str: java.lang.String | string, charset: java.nio.charset.Charset): string
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * NIO based character decoder.
                     */
                    // @ts-ignore
                    class B2CConverter extends java.lang.Object {
                        // @ts-ignore
                        constructor(charset: java.nio.charset.Charset)
                        // @ts-ignore
                        constructor(charset: java.nio.charset.Charset, replaceOnError: boolean)
                        // @ts-ignore
                        static readonly LEFTOVER_SIZE: number /*int*/
                        /**
                         * Obtain the Charset for the given encoding
                         * @param enc The name of the encoding for the required charset
                         * @return The Charset corresponding to the requested encoding
                         * @throws UnsupportedEncodingException If the requested Charset is not
                         *                                       available
                         */
                        // @ts-ignore
                        public static getCharset(enc: java.lang.String | string): java.nio.charset.Charset
                        /**
                         * Reset the decoder state.
                         */
                        // @ts-ignore
                        public recycle(): void
                        /**
                         * Convert the given bytes to characters.
                         * @param bc byte input
                         * @param cc char output
                         * @param endOfInput    Is this all of the available data
                         * @throws IOException If the conversion can not be completed
                         */
                        // @ts-ignore
                        public convert(bc: org.apache.tomcat.util.buf.ByteChunk, cc: org.apache.tomcat.util.buf.CharChunk, endOfInput: boolean): void
                        /**
                         * Convert the given bytes to characters.
                         * @param bc byte input
                         * @param cc char output
                         * @param ic byte input channel
                         * @param endOfInput    Is this all of the available data
                         * @throws IOException If the conversion can not be completed
                         */
                        // @ts-ignore
                        public convert(bc: java.nio.ByteBuffer, cc: java.nio.CharBuffer, ic: org.apache.tomcat.util.buf.ByteChunk.ByteInputChannel, endOfInput: boolean): void
                        // @ts-ignore
                        public getCharset(): java.nio.charset.Charset
                    }
                }
            }
        }
    }
}

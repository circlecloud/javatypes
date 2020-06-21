declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * NIO based character encoder.
                     */
                    // @ts-ignore
                    class C2BConverter extends java.lang.Object {
                        // @ts-ignore
                        constructor(charset: java.nio.charset.Charset)
                        /**
                         * Reset the encoder state.
                         */
                        // @ts-ignore
                        public recycle(): void
                        // @ts-ignore
                        public isUndeflow(): boolean
                        /**
                         * Convert the given characters to bytes.
                         * @param cc char input
                         * @param bc byte output
                         * @throws IOException An encoding error occurred
                         */
                        // @ts-ignore
                        public convert(cc: org.apache.tomcat.util.buf.CharChunk, bc: org.apache.tomcat.util.buf.ByteChunk): void
                        /**
                         * Convert the given characters to bytes.
                         * @param cc char input
                         * @param bc byte output
                         * @throws IOException An encoding error occurred
                         */
                        // @ts-ignore
                        public convert(cc: java.nio.CharBuffer, bc: java.nio.ByteBuffer): void
                        // @ts-ignore
                        public getCharset(): java.nio.charset.Charset
                    }
                }
            }
        }
    }
}

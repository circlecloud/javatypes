declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Efficient implementation of an UTF-8 encoder.
                     * This class is not thread safe - you need one encoder per thread.
                     * The encoder will save and recycle the internal objects, avoiding
                     * garbage.
                     * You can add extra characters that you want preserved, for example
                     * while encoding a URL you can add "/".
                     * @author Costin Manolache
                     */
                    // @ts-ignore
                    class UEncoder extends java.lang.Object {
                        /**
                         * Create a UEncoder with an unmodifiable safe character set.
                         * @param safeCharsSet safe characters for this encoder
                         */
                        // @ts-ignore
                        constructor(safeCharsSet: org.apache.tomcat.util.buf.UEncoder.SafeCharsSet)
                        /**
                         * URL Encode string, using a specified encoding.
                         * @param s string to be encoded
                         * @param start the beginning index, inclusive
                         * @param end the ending index, exclusive
                         * @return A new CharChunk contained the URL encoded string
                         * @throws IOException If an I/O error occurs
                         */
                        // @ts-ignore
                        public encodeURL(s: java.lang.String | string, start: number /*int*/, end: number /*int*/): org.apache.tomcat.util.buf.CharChunk
                        // @ts-ignore
                        urlEncode(out: org.apache.tomcat.util.buf.CharChunk, bb: org.apache.tomcat.util.buf.ByteChunk): void
                    }
                }
            }
        }
    }
}

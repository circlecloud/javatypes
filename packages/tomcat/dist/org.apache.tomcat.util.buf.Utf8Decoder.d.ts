declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Decodes bytes to UTF-8. Extracted from Apache Harmony and modified to reject
                     * code points from U+D800 to U+DFFF as per RFC3629. The standard Java decoder
                     * does not reject these. It has also been modified to reject code points
                     * greater than U+10FFFF which the standard Java decoder rejects but the harmony
                     * one does not.
                     */
                    // @ts-ignore
                    class Utf8Decoder extends java.nio.charset.CharsetDecoder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        decodeLoop(input: java.nio.ByteBuffer, out: java.nio.CharBuffer): java.nio.charset.CoderResult
                    }
                }
            }
        }
    }
}

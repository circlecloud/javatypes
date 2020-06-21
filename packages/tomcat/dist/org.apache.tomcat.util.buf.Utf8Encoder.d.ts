declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Encodes characters as bytes using UTF-8. Extracted from Apache Harmony with
                     * some minor bug fixes applied.
                     */
                    // @ts-ignore
                    class Utf8Encoder extends java.nio.charset.CharsetEncoder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        encodeLoop(input: java.nio.CharBuffer, out: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    }
                }
            }
        }
    }
}

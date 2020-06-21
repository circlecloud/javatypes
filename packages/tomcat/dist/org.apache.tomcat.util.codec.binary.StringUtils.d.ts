declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace codec {
                    namespace binary {
                        /**
                         * Converts String to and from bytes using the encodings required by the Java specification. These encodings are
                         * specified in <a href="http://download.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html">
                         * Standard charsets</a>.
                         * <p>This class is immutable and thread-safe.</p>
                         * @see <a href="http://download.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html">Standard charsets</a>
                         * @since 1.4
                         */
                        // @ts-ignore
                        class StringUtils extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Encodes the given string into a sequence of bytes using the UTF-8 charset, storing the result into a new byte
                             * array.
                             * @param string
                             *             the String to encode, may be <code>null</code>
                             * @return encoded bytes, or <code>null</code> if the input string was <code>null</code>
                             * @see <a href="http://download.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html">Standard charsets</a>
                             */
                            // @ts-ignore
                            public static getBytesUtf8(string: java.lang.String | string): number /*byte*/[]
                            /**
                             * Constructs a new <code>String</code> by decoding the specified array of bytes using the US-ASCII charset.
                             * @param bytes
                             *             The bytes to be decoded into characters
                             * @return A new <code>String</code> decoded from the specified array of bytes using the US-ASCII charset,
                             *          or <code>null</code> if the input byte array was <code>null</code>.
                             */
                            // @ts-ignore
                            public static newStringUsAscii(bytes: number /*byte*/[]): string
                            /**
                             * Constructs a new <code>String</code> by decoding the specified array of bytes using the UTF-8 charset.
                             * @param bytes
                             *             The bytes to be decoded into characters
                             * @return A new <code>String</code> decoded from the specified array of bytes using the UTF-8 charset,
                             *          or <code>null</code> if the input byte array was <code>null</code>.
                             */
                            // @ts-ignore
                            public static newStringUtf8(bytes: number /*byte*/[]): string
                        }
                    }
                }
            }
        }
    }
}

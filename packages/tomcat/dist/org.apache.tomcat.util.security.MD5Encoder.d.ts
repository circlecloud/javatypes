declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace security {
                    /**
                     * Encode an MD5 digest into a String.
                     * <p>
                     * The 128 bit MD5 hash is converted into a 32 character long String.
                     * Each character of the String is the hexadecimal representation of 4 bits
                     * of the digest.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class MD5Encoder extends java.lang.Object {
                        /**
                         * Encodes the 128 bit (16 bytes) MD5 into a 32 character String.
                         * @param binaryData Array containing the digest
                         * @return Encoded MD5, or null if encoding failed
                         */
                        // @ts-ignore
                        public static encode(binaryData: number /*byte*/[]): string
                    }
                }
            }
        }
    }
}

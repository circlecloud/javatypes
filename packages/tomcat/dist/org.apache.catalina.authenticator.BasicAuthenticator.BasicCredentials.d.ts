declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace BasicAuthenticator {
                    /**
                     * Parser for an HTTP Authorization header for BASIC authentication
                     * as per RFC 2617 section 2, and the Base64 encoded credentials as
                     * per RFC 2045 section 6.8.
                     */
                    // @ts-ignore
                    class BasicCredentials extends java.lang.Object {
                        /**
                         * Parse the HTTP Authorization header for BASIC authentication
                         * as per RFC 2617 section 2, and the Base64 encoded credentials
                         * as per RFC 2045 section 6.8.
                         * @param input   The header value to parse in-place
                         * @param charset The character set to use to convert the bytes to a
                         *                 string
                         * @throws IllegalArgumentException If the header does not conform
                         *                                   to RFC 2617
                         * @deprecated Unused. Will be removed in Tomcat 10. Use 3-arg constructor
                         */
                        // @ts-ignore
                        constructor(input: org.apache.tomcat.util.buf.ByteChunk, charset: java.nio.charset.Charset)
                        /**
                         * Parse the HTTP Authorization header for BASIC authentication
                         * as per RFC 2617 section 2, and the Base64 encoded credentials
                         * as per RFC 2045 section 6.8.
                         * @param input           The header value to parse in-place
                         * @param charset         The character set to use to convert the bytes
                         *                         to a string
                         * @param trimCredentials Should leading and trailing whitespace be
                         *                         removed from the parsed credentials
                         * @throws IllegalArgumentException If the header does not conform
                         *                                   to RFC 2617
                         */
                        // @ts-ignore
                        constructor(input: org.apache.tomcat.util.buf.ByteChunk, charset: java.nio.charset.Charset, trimCredentials: boolean)
                        /**
                         * Trivial accessor.
                         * @return the decoded username token as a String, which is
                         *           never be <code>null</code>, but can be empty.
                         */
                        // @ts-ignore
                        public getUsername(): string
                        /**
                         * Trivial accessor.
                         * @return the decoded password token as a String, or <code>null</code>
                         *           if no password was found in the credentials.
                         */
                        // @ts-ignore
                        public getPassword(): string
                    }
                }
            }
        }
    }
}

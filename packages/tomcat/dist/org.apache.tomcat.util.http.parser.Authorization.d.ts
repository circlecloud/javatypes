declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace parser {
                        /**
                         * Parser for an "Authorization" header.
                         */
                        // @ts-ignore
                        class Authorization extends java.lang.Object {
                            /**
                             * Parses an HTTP Authorization header for DIGEST authentication as per RFC
                             * 2617 section 3.2.2.
                             * @param input The header value to parse
                             * @return A map of directives and values as {#link String}s or
                             *           <code>null</code> if a parsing error occurs. Although the
                             *           values returned are {@link String}s they will have been
                             *           validated to ensure that they conform to RFC 2617.
                             * @throws IllegalArgumentException If the header does not conform to RFC
                             *                                   2617
                             * @throws java.io.IOException If an error occurs while reading the input
                             */
                            // @ts-ignore
                            public static parseAuthorizationDigest(input: java.io.StringReader): java.util.Map<java.lang.String | string, java.lang.String | string>
                        }
                    }
                }
            }
        }
    }
}

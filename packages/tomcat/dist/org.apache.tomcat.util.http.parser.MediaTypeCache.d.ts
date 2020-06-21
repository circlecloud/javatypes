declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace parser {
                        /**
                         * Caches the results of parsing content-type headers.
                         */
                        // @ts-ignore
                        class MediaTypeCache extends java.lang.Object {
                            // @ts-ignore
                            constructor(size: number /*int*/)
                            /**
                             * Looks in the cache and returns the cached value if one is present. If no
                             * match exists in the cache, a new parser is created, the input parsed and
                             * the results placed in the cache and returned to the user.
                             * @param input The content-type header value to parse
                             * @return The results are provided as a two element String array. The
                             *                   first element is the media type less the charset and
                             *                   the second element is the charset
                             */
                            // @ts-ignore
                            public parse(input: java.lang.String | string): string[]
                        }
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace parser {
                        /**
                         * HTTP header value parser implementation. Parsing HTTP headers as per RFC2616
                         * is not always as simple as it first appears. For headers that only use tokens
                         * the simple approach will normally be sufficient. However, for the other
                         * headers, while simple code meets 99.9% of cases, there are often some edge
                         * cases that make things far more complicated.
                         * The purpose of this parser is to let the parser worry about the edge cases.
                         * It provides tolerant (where safe to do so) parsing of HTTP header values
                         * assuming that wrapped header lines have already been unwrapped. (The Tomcat
                         * header processing code does the unwrapping.)
                         */
                        // @ts-ignore
                        class HttpParser extends java.lang.Object {
                            // @ts-ignore
                            constructor(relaxedPathChars: java.lang.String | string, relaxedQueryChars: java.lang.String | string)
                            // @ts-ignore
                            public isNotRequestTargetRelaxed(c: number /*int*/): boolean
                            // @ts-ignore
                            public isAbsolutePathRelaxed(c: number /*int*/): boolean
                            // @ts-ignore
                            public isQueryRelaxed(c: number /*int*/): boolean
                            // @ts-ignore
                            public static unquote(input: java.lang.String | string): string
                            // @ts-ignore
                            public static isToken(c: number /*int*/): boolean
                            // @ts-ignore
                            public static isHex(c: number /*int*/): boolean
                            // @ts-ignore
                            public static isNotRequestTarget(c: number /*int*/): boolean
                            // @ts-ignore
                            public static isHttpProtocol(c: number /*int*/): boolean
                            // @ts-ignore
                            public static isAlpha(c: number /*int*/): boolean
                            // @ts-ignore
                            public static isNumeric(c: number /*int*/): boolean
                            // @ts-ignore
                            public static isUserInfo(c: number /*int*/): boolean
                            // @ts-ignore
                            public static isAbsolutePath(c: number /*int*/): boolean
                            // @ts-ignore
                            public static isQuery(c: number /*int*/): boolean
                        }
                    }
                }
            }
        }
    }
}

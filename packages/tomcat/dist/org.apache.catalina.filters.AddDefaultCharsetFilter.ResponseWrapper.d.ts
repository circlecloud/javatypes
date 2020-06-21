declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace AddDefaultCharsetFilter {
                    /**
                     * Wrapper that adds a character set for text media types if no character
                     * set is specified.
                     */
                    // @ts-ignore
                    class ResponseWrapper extends javax.servlet.http.HttpServletResponseWrapper {
                        // @ts-ignore
                        constructor(response: javax.servlet.http.HttpServletResponse, encoding: java.lang.String | string)
                        // @ts-ignore
                        public setContentType(ct: java.lang.String | string): void
                        // @ts-ignore
                        public setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                        // @ts-ignore
                        public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                        // @ts-ignore
                        public setCharacterEncoding(charset: java.lang.String | string): void
                    }
                }
            }
        }
    }
}

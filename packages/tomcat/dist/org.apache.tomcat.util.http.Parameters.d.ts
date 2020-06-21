declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    /**
                     * @author Costin Manolache
                     */
                    // @ts-ignore
                    class Parameters extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setQuery(queryMB: org.apache.tomcat.util.buf.MessageBytes): void
                        // @ts-ignore
                        public setLimit(limit: number /*int*/): void
                        // @ts-ignore
                        public getCharset(): java.nio.charset.Charset
                        // @ts-ignore
                        public setCharset(charset: java.nio.charset.Charset): void
                        // @ts-ignore
                        public setQueryStringCharset(queryStringCharset: java.nio.charset.Charset): void
                        // @ts-ignore
                        public isParseFailed(): boolean
                        // @ts-ignore
                        public getParseFailedReason(): org.apache.tomcat.util.http.Parameters.FailReason
                        // @ts-ignore
                        public setParseFailedReason(failReason: org.apache.tomcat.util.http.Parameters.FailReason): void
                        // @ts-ignore
                        public recycle(): void
                        // @ts-ignore
                        public getParameterValues(name: java.lang.String | string): string[]
                        // @ts-ignore
                        public getParameterNames(): java.util.Enumeration<java.lang.String | string>
                        // @ts-ignore
                        public getParameter(name: java.lang.String | string): string
                        /**
                         * Process the query string into parameters
                         */
                        // @ts-ignore
                        public handleQueryParameters(): void
                        // @ts-ignore
                        public addParameter(key: java.lang.String | string, value: java.lang.String | string): void
                        // @ts-ignore
                        public setURLDecoder(u: org.apache.tomcat.util.buf.UDecoder): void
                        // @ts-ignore
                        public processParameters(bytes: number /*byte*/[], start: number /*int*/, len: number /*int*/): void
                        // @ts-ignore
                        public processParameters(data: org.apache.tomcat.util.buf.MessageBytes, charset: java.nio.charset.Charset): void
                        /**
                         * Debug purpose
                         */
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}

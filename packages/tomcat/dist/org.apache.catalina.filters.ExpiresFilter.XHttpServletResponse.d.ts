declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace ExpiresFilter {
                    /**
                     * <p>
                     * Wrapping extension of the {@link HttpServletResponse} to yrap the
                     * "Start Write Response Body" event.
                     * </p>
                     * <p>
                     * For performance optimization : this extended response holds the
                     * {@link #lastModifiedHeader} and {@link #cacheControlHeader} values access
                     * to the slow {@link #getHeader(String)} and to spare the {@code string}
                     * to {@code date} to {@code long} conversion.
                     * </p>
                     */
                    // @ts-ignore
                    class XHttpServletResponse extends javax.servlet.http.HttpServletResponseWrapper {
                        // @ts-ignore
                        constructor(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse)
                        // @ts-ignore
                        public addDateHeader(name: java.lang.String | string, date: number /*long*/): void
                        // @ts-ignore
                        public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                        // @ts-ignore
                        public getCacheControlHeader(): string
                        // @ts-ignore
                        public getLastModifiedHeader(): number /*long*/
                        // @ts-ignore
                        public getOutputStream(): javax.servlet.ServletOutputStream
                        // @ts-ignore
                        public getWriter(): java.io.PrintWriter
                        // @ts-ignore
                        public isLastModifiedHeaderSet(): boolean
                        // @ts-ignore
                        public isWriteResponseBodyStarted(): boolean
                        // @ts-ignore
                        public reset(): void
                        // @ts-ignore
                        public setDateHeader(name: java.lang.String | string, date: number /*long*/): void
                        // @ts-ignore
                        public setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                        // @ts-ignore
                        public setWriteResponseBodyStarted(writeResponseBodyStarted: boolean): void
                    }
                }
            }
        }
    }
}
